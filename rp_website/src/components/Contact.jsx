import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../style";
import { contactlogo } from "../assets";

/* const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_kux4cus",
      "template_v1qiw75",
      form.current,
      "lyVQADEUaCxQkc0fD"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}; */

function Contact() {
  return (
    <div id="kontakt">
      <img src={contactlogo} className={styles.img}></img>
      <div>
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-5 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Celé jméno
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Zpráva
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-[#3c479e] border-0 py-2 px-8 focus:outline-none hover:bg-[#7161aa] rounded text-lg">
                    Odeslat
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-[#3c479e]">info@detailersgarage.eu</a>
                  <p className="leading-normal my-5">
                    Satanwagen
                    <br />
                    Koza Bobkov, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
