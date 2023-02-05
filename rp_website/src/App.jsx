import styles from "./style";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navbar,
  Services,
  Home,
  Footer,
  Reviews,
  Contact,
} from "./components";

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyCkdGq0U3OXQr04onKeTgSP4m8VMfUn5R8"></script>

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden align-center">
        <div className="bg-home ">
          <div>
            <div className={`${styles.boxWidth} z-10`}>
              <Navbar />
            </div>
          </div>

          <div
            className={`pt-10 w-full overflow-hidden align-center ${styles.flexStart}`}
          >
            <div className={`h-screen ${styles.boxWidth}`}>
              <Home />
            </div>
          </div>
          <Routes>
           <Route path="/" exact component={() => <Home />} />
          </Routes>
        </div>
      </div>

      <div
        className={`w-full overflow-hidden align-center ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Services />
          <Routes>
            {" "}
            <Route path="/services" exact component={() => <Services />} />
          </Routes>
          <div id="google-reviews">

            
          </div>
          <Reviews />
          
          <Contact/>  
          <Routes>
            {" "}
            <Route path="/kontakt" exact component={() => <Contact />} />
          </Routes>
        </div>
      </div>

      <div className="w-full overflow-hidden align-center">
        <Footer />
      </div>
    </Router>
  );
};
export default App;
