import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20  flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-serif font-bold text-2xl text-white mx-2 w-10">
          NS
        </h1>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/nandushaji/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Nandushaji888"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/nandu._ts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
