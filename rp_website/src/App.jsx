import styles from "./style";

import { Navbar, Services, Home, Footer, Feedback } from "./components";

const App = () => (
  <div className="  w-full overflow-hidden align-center">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-home ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
        <Feedback />
        <Services />
      </div>
    </div>
  </div>
);

export default App;
