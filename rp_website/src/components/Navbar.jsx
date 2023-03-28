import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`fixed w-full flex py-5 pl-16 justify-between items-center ${
        color ? "bg-[#0b0b0c] transition ease-in delay-100" : "bg-transparent"
      }`}
    >
      <img
        src={logo}
        alt="Detailer's Garage"
        className="z-10 w-[200px] h[60px]"
      />

      {/* Hide the desktop navigation links on small screens */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Show the hamburger menu on small screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <button
            className="w-[28px] h-[28px] flex items-center justify-center"
            onClick={() => {
              document.body.style.overflow = "auto";
              settoggle(false);
            }}
          >
            <img
              src={close}
              alt="close"
              className="z-10 w-[30px] h-[25px] mr-3"
            />
          </button>
        ) : (
          <button
            className="w-[28px] h-[28px] flex items-center justify-center"
            onClick={() => {
              document.body.style.overflow = "hidden";
              settoggle(true);
            }}
          >
            <img src={menu} alt="menu" className="w-[30px] h-[25px] mr-3" />
          </button>
        )}
      </div>

      {/* Show the sidebar on small screens when the hamburger menu is clicked */}

      <div className="">
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } fixed top-0 left-0 w-full h-full  bg-black bg-gradient-to-b from-[#151517] via-[#0b0b0c] to-[#151517]`}
        >
          <ul className=" list-none flex flex-col justify-center items-center h-full ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`mx-[150px] pt-8 cursor-pointer text-[30px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    (document.body.style.overflow = "auto"), settoggle(false);
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Add a close button to the sidebar */}

        <button
          className="absolute top-5 right-0 p-2 text-white"
          onClick={() => {
            (document.body.style.overflow = "auto"), settoggle(false);
          }}
        ></button>
      </div>
    </nav>
  );
};

export default Navbar;
