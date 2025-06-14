"use client";

import styles from "./Slider.module.scss";
import clsx from "clsx";

const images = [
  { src: "/images/Slider/NFF.png", alt: "NFF" },
  { src: "/images/Slider/FA.png", alt: "FA" },
  { src: "/images/Slider/FMSC.png", alt: "FMSC" },
  { src: "/images/Slider/Unicef.png", alt: "Unicef" },
  { src: "/images/Slider/OTP.png", alt: "OTP" },
  { src: "/images/Slider/Rise.png", alt: "Rise" },
  { src: "/images/Slider/WCK.png", alt: "WCK" },
  { src: "/images/Slider/WFPUSA.png", alt: "WFPUSA" },
  { src: "/images/Slider/AAH.png", alt: "AAH" },
];

export const Slider = ({ className }: { className?: string }) => {
  return (
    <section className={clsx(styles.sliderSection, className)}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselFrame}>
          {[...images, ...images].map((img, i) => (
            <div key={i} className={styles.imageWrapper}>
              <img src={img.src} alt={img.alt} className={styles.Image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
