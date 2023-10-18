// Components
import { LinkButton, PrimaryButton } from "../../components/Buttons";

const AuthScreen = () => {
  return (
    <div className="w-[100vw] h-[100vh] grid place-content-center">
      <div className="border-[1.5px] border-gray-300 py-4 px-8 w-[30vw] flex flex-col gap-4 justify-center items-center rounded-lg">
        <p className="font-poppins text-blue-600 text-xl">VoteEZ</p>
        <div>
          <p className="text-gray-600 text-center">
            You must connect your{" "}
            <LinkButton
              label="Metamask"
              href="https://metamask.io/"
              className="text-orange-500"
            />{" "}
            inorder to create and vote on the public polls.
          </p>
        </div>
        <PrimaryButton label="Connect Wallet" className="px-8" />
      </div>
    </div>
  );
};

export default AuthScreen;
