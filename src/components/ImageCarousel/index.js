import React from "react";
import styles from "./index.module.scss";
import { aboutImages } from "./aboutImages";
import CarouselItem from "./CarouselItem";

const ImageCarousel = () => {

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {/* <img src= */}
        {Object.keys(aboutImages).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={aboutImages[detailKey].imgUrl}
              imgTitle={aboutImages[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(aboutImages).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={aboutImages[detailKey].imgUrl}
              imgTitle={aboutImages[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;