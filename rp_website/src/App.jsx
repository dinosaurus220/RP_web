import styles from "./style";
import { useState } from "react";

import { Navbar, Services, Home, Footer, Feedback, Header } from "./components";

const App = () => {
  return (
    <div className="w-full overflow-hidden align-center">
      <div className="bg-home ">
        <div>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>

        <div className={`pt-10 ${styles.flexStart}`}>
          <div className={`h-screen ${styles.boxWidth}`}>
            <Home />
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
          <Feedback />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
