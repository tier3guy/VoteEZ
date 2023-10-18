// Components
import { PrimaryButton, LinkButton } from "../../components/Buttons";

/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @returns React Function Component - Home Screen
 */
const HomeScreen = () => {
  return (
    // Main container covering the entire screen with horizontal overflow hidden
    <div className="w-screen min-h-screen overflow-x-hidden">
      {/* Navbar Component */}
      <NavbarComponent />

      <section className="w-4/5 m-auto py-8 h-[100vh] flex items-center justify-center flex-col">
        <h1 className="text-5xl text-center leading-[65px] text-blue-600 font-semibold font-poppins">
          Transforming Democracy with VoteEZ, Revolutionizing the way we vote
        </h1>
        <p className="text-gray-600 text-center my-4 w-4/5">
          Welcome to VoteEZ, the future of secure, transparent, and tamper-proof
          voting systems. In a world where trust in electoral processes is
          paramount, VoteEZ redefines democracy by harnessing the power of
          blockchain technology.
        </p>
        <PrimaryButton label="Get Started" className="px-8" />
      </section>
    </div>
  );
};

/**
 * @author Avinash Gupta [avinashgupta.works@gmail.com]
 * @returns React Function Component - Navbar Component
 */
const NavbarComponent = () => {
  return (
    <nav className="backdrop-4 px-8 py-3 flex justify-between items-center border-b-[1px] border-gray-300 fixed w-full">
      {/* Logo */}
      <p className="text-xl text-blue-600">VoteEZ</p>
      <div className="flex items-center gap-3 absolute left-[50%] -translate-x-[50%]">
        {/* Navigation Links */}
        <LinkButton label="About" />
        <LinkButton label="Features" />
        <LinkButton label="Pricing" />
      </div>
      {/* Call-to-action button */}
      <PrimaryButton label="Get Started" />
    </nav>
  );
};

export default HomeScreen;
