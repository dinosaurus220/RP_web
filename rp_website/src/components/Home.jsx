import styles from "../style";

import { home } from "../assets";
const Home = () => (
  <section id="home" className={`static  flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexstart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] rounder-[10px] mb-2">
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">DETAILER'S <br />
            GARAGE
          </h1>
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Každé auto má svou vlastní osobnost. Když navštívíte detailingovou
        garáž, měli byste očekávat více než jen odstranění prachu a skvrn nebo
        odstranění promáčklin a škrábanců. Měli byste očekávat profesionální
        služby v oblasti detailů vozu, které se zaměřují na vyzdvižení jedinečné
        osobnosti vašeho vozu To je úroveň služeb, které poskytujeme v Detailer's Garage</p>
       
      
    </div>
  </section>
);

export default Home;
