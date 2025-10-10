 import { FaGithub, FaFacebook, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = {
    github: "https://github.com/ernestfakokunde",
    tiktok: "https://tiktok.com/@ernestfakokunde",
  };

  return (
    <footer className="border-t border-white/5 py-6 mt-10 bg-transparent text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left: Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Ernest Fakokunde</span>. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-5 text-2xl justify-center md:justify-end">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-400 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-pink-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/ernest-fakokunde-53713a36a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
