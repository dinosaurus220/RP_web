import React from "react";
import styles from "../style";

const Footer = () => {
  return (
    <footer className="text-[#3c479e]">
      <div
        className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-4
    text-center py-5 text-gray-400 text-sm"
      >
        <span className="text-[#3c479e] text-[20px]">Kontakt</span>

        <p>info@detailersgarage.eu</p>
        <p>+420 111 222 333</p>

        <span className="text-[#3c479e] text-[20px]">Navigace</span>
        <p>Nazev</p>
        <p>Nazev</p>
        <span className="text-[#3c479e] text-[20px]">Užitečné odkazy</span>
        <p>Nazev</p>
        <p>Nazev</p>

        <span className="inline-flex">
          <a href="https://www.facebook.com/autofinesse" target="_blank" className="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/autofinesse" target="_blank" className="ml-4 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/autofinesse/" target="_blank" className="ml-4 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
      <div className="text-center pt-4 text-gray-400 text-sm pb-4">
        <span>© 2023 Detailer's Garage. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
