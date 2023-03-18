import styles from "../style";

import { bg_logo } from "../assets";
const Home = () => (
  <section
    to="/" id="domu"
    className={`static  flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 py-10 px-6`}
    >
      <img src={bg_logo} className="w-[470px]"></img>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5 `}>
        Každé auto má svou vlastní osobnost. Když navštívíte detailingovou
        garáž, měli byste očekávat více než jen odstranění prachu a skvrn nebo
        odstranění promáčklin a škrábanců. Měli byste očekávat profesionální
        služby v oblasti detailů vozu, které se zaměřují na vyzdvižení jedinečné
        osobnosti vašeho vozu To je úroveň služeb, které poskytujeme v
        Detailer's Garage
      </p>
    </div>
  </section>
);

export default Home;
