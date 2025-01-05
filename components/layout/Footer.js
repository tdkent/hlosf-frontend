import React from "react";

const Footer = () => {
  return (
    <footer className="h-24 pt-6 pb-6 border-t border-slate-300 bg-slate-50 font-light text-center text-xs">
      <p>&copy; Historical Landmarks of San Francisco, 2019-25</p>
      <p className="my-2">
        Website developed by{" "}
        <a
          href="https://www.timdkent.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Tim Kent
        </a>
      </p>
    </footer>
  );
};

export default Footer;
