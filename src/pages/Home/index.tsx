// External Imports
import { useNavigate } from "react-router-dom";

// Components
import { PrimaryButton, LinkButton } from "../../components/Buttons";

/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @returns React Function Component - Home Screen
 */
const HomeScreen = () => {
  // Vars
  const navigate = useNavigate();

  return (
    // Main container covering the entire screen with horizontal overflow hidden
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Navbar Component */}
      <NavbarComponent />

      <section className="w-4/5 m-auto mt-[20vh] py-8 h-[80vh] flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center leading-[65px] text-blue-600 font-semibold font-poppins">
          Transforming Democracy with VoteEZ, Revolutionizing the way we vote
        </h1>
        <p className="text-gray-600 text-center my-4 w-4/5">
          Welcome to VoteEZ, the future of secure, transparent, and tamper-proof
          voting systems. In a world where trust in electoral processes is
          paramount, VoteEZ redefines democracy by harnessing the power of
          blockchain technology.
        </p>
        <PrimaryButton
          label="Get Started"
          className="px-8"
          action={() => {
            navigate("/auth");
          }}
        />
      </section>

      <section
        id="about"
        className="w-4/5 m-auto p-4 px-8 border-[1px] border-gray-300 rounded-xl shadow-xl flex flex-col gap-4"
      >
        <h1 className="text-5xl leading-[65px] text-blue-600 font-semibold font-poppins">
          about us
        </h1>
        <p className="text-gray-700">
          Welcome to DigiBallot, your trusted partner in revolutionizing the way
          voting and polling take place. We are a passionate team of developers
          and blockchain enthusiasts dedicated to making the electoral process
          more secure, transparent, and accessible for organizations and
          individuals alike. Our mission is to empower you with cutting-edge
          technology to conduct voting and polls with ease, anonymity, and the
          utmost confidence.
        </p>
        <p className="text-gray-700">
          At DigiBallot, we believe in the power of blockchain technology to
          bring about a positive change in the way voting is conducted. With a
          commitment to transparency, security, and user-friendliness, we have
          developed a platform that caters to a diverse range of users, from
          corporations seeking employee feedback to individuals looking to gauge
          public opinion.
        </p>
      </section>

      {/* Footer Component */}
      <FooterComponent />
    </div>
  );
};

/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @returns React Function Component - Navbar Component
 */
const NavbarComponent = () => {
  // Vars
  const navigate = useNavigate();

  return (
    <nav className="z-10 bg-white backdrop-4 px-8 py-3 flex justify-between items-center border-b-[1px] border-gray-300 fixed w-full">
      {/* Logo */}
      <p className="text-xl text-blue-600 font-poppins">VoteEZ</p>
      <div className="flex items-center gap-3 absolute left-[50%] -translate-x-[50%]">
        {/* Navigation Links */}
        <LinkButton label="About" href="#about" />
        <LinkButton label="Features" />
        <LinkButton label="Pricing" />
      </div>
      {/* Call-to-action button */}
      <PrimaryButton
        label="Get Started"
        action={() => {
          navigate("/auth");
        }}
      />
    </nav>
  );
};

/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @returns React Function Component - Footer Component
 */
const FooterComponent = () => {
  return (
    <footer className="bg-blue-600 p-8 mt-4 flex justify-between items-end">
      <div className="flex gap-10 items-end">
        <div className="flex flex-col gap-1 ">
          <h3 className="font-poppins text-white font-semibold text-lg">
            Get in touch
          </h3>
          <div>
            <p className="text-gray-300">contact.vote.ez@gmail.com</p>
            <p className="text-gray-300">avinashgupta.works@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <h3 className="font-poppins text-white font-semibold text-lg">
            Connect
          </h3>
          <div>
            <p className="text-gray-300">LinkedIn</p>
            <p className="text-gray-300">Instagram</p>
            {/* <p className="text-gray-300">Facebook</p>
          <p className="text-gray-300">Threads</p> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="text-white text-xl font-poppins">VoteEZ.in</p>
      </div>
    </footer>
  );
};

export default HomeScreen;
