import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div> {new Date().getFullYear()} Ernest Ayodele Fakokunde</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:ernestfakokunde9@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
