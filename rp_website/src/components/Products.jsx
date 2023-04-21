import React from "react";
import styles from "../style";
import { autofinesse, gyeon, meguiars, valetpro } from "../assets/products";

function Products() {
  return (
    <div id="produkty" className="py-2">
      <p
        className={`${styles.paragraph} flex justify-center text-center max-w-xs mx-auto`}
      >
        U NÁS NENALETÍTE Odebíráme nejlepší světovou autokosmetiku přímo od
        výrobců. Ručíme vám za kvalitu a řádnou záruku.
      </p>
      <div className={`${styles.img} gap-10`}>
        <a href="https://www.autofinesse.com" target="_blank">
          <img
            src={autofinesse}
            alt="Autofinesse"
            className="hover:graysacle"
          />
        </a>
        <a href="https://gyeon.co" target="_blank">
          <img src={gyeon} alt="Gyeon" className="hover:graysacle" />
        </a>
        <a href="https://www.meguiars.com" target="_blank">
          <img src={meguiars} alt="Meguiar's" className="hover:graysacle" />
        </a>
        <a href="https://www.valetpro.global" target="_blank">
          <img src={valetpro} alt="ValetPRO" className="hover:graysacle" />
        </a>
      </div>
    </div>
  );
}

export default Products;
