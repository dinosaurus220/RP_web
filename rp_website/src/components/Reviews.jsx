import React from "react";
import styles from "../style";
import {ElfsightWidget} from "react-elfsight-widget"
import { reviewslogo } from "../assets";

const Reviews = () => {
  return (
    <div className="pb-5">
      <img id="recenze" src={reviewslogo} className={styles.img}></img>
      <ElfsightWidget  widgetID="d92d0fa4-bdc2-42c6-bd7f-7ccf58db9e57"/>
    </div>
  );
};

export default Reviews;
