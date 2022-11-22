import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);

  return (

    <nav className={`fixed w-full flex py-5 pl-16 justify-between items-center ${color ? 'bg-[#0b0b0c] transition ease-in delay-100' : 'bg-transparent'}`}>
      <img src={logo} alt="Detailer's Garage" className="w-[200px] h[60px]" />

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

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-primary
             absolute top-[11%] right-0 my-6 w-full sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
