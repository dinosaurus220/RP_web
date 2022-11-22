import styles from "../style";
import React from "react";

import { phone, mail } from "../assets/";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <div className={`flex-row pt-1 `}>
      <img className={`float-left w-[32px] mr-4`} src={mail} />
      <p className={`float-left w-auto  ${styles.paragraph}`}>
        <a href="">E-mail info@detailersgarage.eu</a> <br /> <br />
      </p>
      
      <img className={`float-left  w-[32px] mr-4`} src={phone} />
      <p className={`float-left w-auto mr-4 ${styles.paragraph}`}>
        <a href="">Telefon +420 123 123 123</a>
      </p>
      
    </div>
  );
};

export default Header;
