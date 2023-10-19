// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Poll {
    struct Option {
        string name;
        uint256 voteCount;
    }

    struct PollData {
        address creator;
        uint256 creationDate;
        string title;
        string description;
        Option[] options;
        bool isClosed;
    }

    PollData[] public polls;

    event PollCreated(uint256 indexed pollId);
    event Voted(uint256 indexed pollId, uint256 indexed optionId, address indexed voter);

    modifier pollExists(uint256 _pollId) {
        require(_pollId < polls.length, "Poll does not exist");
        _;
    }

    modifier pollNotClosed(uint256 _pollId) {
        require(!polls[_pollId].isClosed, "Poll is closed");
        _;
    }

    constructor() {
        // Constructor can be left empty or used for initialization.
    }

    function createPoll(
        string memory _title,
        string memory _description,
        string[] memory _options
    ) external {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_options.length > 1, "At least two options are required");

        Option[] memory options = new Option[](_options.length);
        for (uint256 i = 0; i < _options.length; i++) {
            options[i] = Option({
                name: _options[i],
                voteCount: 0
            });
        }

        polls.push(PollData({
            creator: msg.sender,
            creationDate: block.timestamp,
            title: _title,
            description: _description,
            options: options,
            isClosed: false
        }));

        emit PollCreated(polls.length - 1);
    }

    function vote(uint256 _pollId, uint256 _optionId) external pollExists(_pollId) pollNotClosed(_pollId) {
        require(_optionId < polls[_pollId].options.length, "Invalid option");
        require(msg.sender != polls[_pollId].creator, "Creator cannot vote");

        polls[_pollId].options[_optionId].voteCount++;
        emit Voted(_pollId, _optionId, msg.sender);
    }

    function closePoll(uint256 _pollId) external pollExists(_pollId) {
        require(msg.sender == polls[_pollId].creator, "Only the creator can close the poll");
        polls[_pollId].isClosed = true;
    }

    function getPollCount() external view returns (uint256) {
        return polls.length;
    }

    function getPoll(uint256 _pollId)
        external
        view
        pollExists(_pollId)
        returns (
            address,
            uint256,
            string memory,
            string memory,
            Option[] memory,
            bool
        )
    {
        PollData memory poll = polls[_pollId];
        return (
            poll.creator,
            poll.creationDate,
            poll.title,
            poll.description,
            poll.options,
            poll.isClosed
        );
    }
}
