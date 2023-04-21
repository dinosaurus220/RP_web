import React from "react";
import styles from "../style";

const Footer = () => {
  return (
    <footer id="footer" className="text-[#3c479e] ">
      <div

        className="flex flex-col gap-4 text-center py-5 text-gray-400 text-sm md:grid md:grid-rows-3 md:grid-cols-4 md:grid-flow-col md:gap-4 "

  

      >
        <span className={`${styles.parFooter}`}>Kontakt</span>

        <a href="mailto:info@detailersgarage.eu">info@detailersgarage.eu</a>
        <a href="tel:+420111222333">+420 111 222 333</a>

        <span className={`pt-5 ${styles.parFooter}`}>Pobočky</span>
        <a target="_blank" href="https://www.google.com/maps?q=Čištění+interiéru+auta+-+Steam+Wash+Technology+s.r.o.&client=opera&hs=ZUx&sxsrf=APwXEdczbkk1tU7KlJY8m0x8OuZsi-bo5g:1682093298748&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQ6CggAEEcQ1gQQsANKBAhBGABQ3AFY3AFg6wJoAXABeACAAUyIAUySAQExmAEAoAECoAEByAEIwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwimxvX8rbv-AhXRQ_EDHZGnAd4Q_AUoAnoECAIQBA">U Trati 886/52, 100 00 Strašnice</a>
        <a target="_blank" href="https://www.google.com/maps/place/UMYEM+-+Detailing+Brno/@49.202928,16.6244614,17z/data=!3m1!4b1!4m6!3m5!1s0x471295b27771d827:0x577316dfe15d8c81!8m2!3d49.202928!4d16.6266501!16s%2Fg%2F11c5b4scdm">Vranovská 53/2, 614 00 Brno-sever-Zábrdovice</a>

        
        <span className={`pt-5 ${styles.parFooter}`}>Užitečné odkazy</span>
        <a href="https://www.autofinesse.com/en/academy">Školení</a>
        <a href="https://www.autofinesse.com/en/shop">Produkty</a>


        <span className="inline-flex justify-center pt-5">


          <a
            href="https://www.facebook.com/autofinesse"
            target="_blank"
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/autofinesse"
            target="_blank"
            className="ml-4 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/autofinesse/"
            target="_blank"
            className="ml-4 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
      <div className="text-center pt-4 text-gray-400 text-sm pb-4">
        <span>© 2023 Detailer's Garage. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
