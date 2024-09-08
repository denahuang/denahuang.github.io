import React from "react";
import styles from "./index.module.scss";

const CarouselItem = ({ imgUrl, imgTitle }) => {
  return (
    <div className={styles.carouselCard}>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}

export default CarouselItem;