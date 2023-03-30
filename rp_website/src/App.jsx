import styles from "./style";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { products } from "./assets";
import {
  Navbar,
  Services,
  Home,
  Footer,
  Reviews,
  Contact,
  Products,
} from "./components";

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyCkdGq0U3OXQr04onKeTgSP4m8VMfUn5R8"></script>;

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden align-center scroll-mt-[60px]">
        <div className="bg-home ">
          <div>
            <div className={`${styles.boxWidth} z-20`}>
              <Navbar />
            </div>
          </div>

          <div
            className={`pt-10 w-full overflow-hidden align-center ${styles.flexStart}`}
          >
            <div className={`h-screen ${styles.boxWidth} `}>
              <Home />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full overflow-hidden align-center ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Services />
          <img src={products} className="relative -z-10 h-[145px] flex mx-auto justify-center my-5 xl:px-0 sm:px-16 px-6 center" />

          <Products />
          <div id="google-reviews"></div>
          <Reviews className="-z-50"/>
          <Contact />
        </div>
      </div>

      <div className="w-full overflow-hidden align-center">
        <Footer />
      </div>
    </Router>
  );
};
export default App;
