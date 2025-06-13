"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./SliderSwiperSection.module.scss";
import clsx from "clsx";
import { CirclePhoto } from "@/shared/ui/CirclePhoto";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slideItemsArray = [
  {
    number: "[01]",
    titleParts: [
      "Maintain and ",
      <span key="upgrade" className={styles.highlight}>
        upgrade
      </span>,
      " our knowledge",
    ],
    text: "Continually in all aspects of this industry to financial management",
    srcPhoto: "/images/IRSplusAboutUs/SliderSwiperSection/img1.webp",
  },
  {
    number: "[02]",
    titleParts: [
      "Make every effort to obtain ",
      <span key="information" className={styles.highlight}>
        information
      </span>,
    ],
    text: "And an understanding of all that affects your economic or financial situation",
    srcPhoto: "/images/IRSplusAboutUs/SliderSwiperSection/img2.webp",
  },
  {
    number: "[03]",
    titleParts: [
      "Provide you ",
      <span key="resources" className={styles.highlight}>
        with the full resources
      </span>,
      " you would expect",
    ],
    text: "From a large accounting firm while maintaining that personal touch",
    srcPhoto: "/images/IRSplusAboutUs/SliderSwiperSection/img3.webp",
  },
  {
    number: "[04]",
    titleParts: [
      "Respect your ",
      <span key="point" className={styles.highlight}>
        point of view
      </span>,
    ],
    text: "While assisting you to make informed decisions about your government incentives",
    srcPhoto: "/images/IRSplusAboutUs/SliderSwiperSection/img4.webp",
  },
  {
    number: "[05]",
    titleParts: [
      "Keep our relationship strictly ",
      <span key="confidential" className={styles.highlight}>
        confidential
      </span>,
    ],
    text: "In accordance with our privacy policies and practices",
    srcPhoto: "/images/IRSplusAboutUs/SliderSwiperSection/img5.webp",
  },
  {
    number: "[06]",
    titleParts: [
      "Provide you with the ",
      <span key="standards" className={styles.highlight}>
        highest standards
      </span>,
      " of work ethic",
    ],
    text: "With integrity, professionalism, reliability, and courtesy",
    srcPhoto: "/images/IRSplusAboutUs/SliderSwiperSection/img6.webp",
  },
];

export const SliderSwiperSection = ({ className }: { className?: string }) => {
  const isMobile = useIsMobile();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.on("slideChange", () => {
      setActiveIndex(swiper.realIndex);
    });
  }, []);
  return (
    <section className={clsx(styles.sliderSwiperSection, className)}>
      <h1>We Commit to</h1>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect={"creative"}
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={isMobile ? 36 : 80}
        speed={800}
        grabCursor={true}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className={styles.sliderWrapper}
      >
        {slideItemsArray.map(
          ({ number, titleParts, text, srcPhoto }, index) => (
            <SwiperSlide key={index}>
              <div className={clsx(styles.sliderItem, className)} key={index}>
                <div className={styles.sliderItem__textBlock}>
                  <h4 className={styles.sliderItem__textBlock__number}>
                    {number}
                  </h4>
                  <div>
                    <h3 className={styles.sliderItem__textBlock__title}>
                      {titleParts}
                    </h3>
                    <p className={styles.sliderItem__textBlock__text}>{text}</p>
                  </div>
                </div>

                <CirclePhoto imageSrc={srcPhoto} size={isMobile ? 60 : 109} />
              </div>
            </SwiperSlide>
          )
        )}

        <SwiperSlide
          key="empty"
          aria-hidden="true"
          style={{ pointerEvents: "none" }}
        >
          <div style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
      </Swiper>

      <div className={styles.buttonsFrame}>
        <div
          className={styles.leftButton}
          onClick={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;

            if (activeIndex === 0) {
              swiper.slideTo(slideItemsArray.length - 1, 1000);
            } else {
              swiper.slidePrev();
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3817 9.73843H2.14175M2.14175 9.73843L10.7617 1.11846M2.14175 9.73843L10.7617 18.3584"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div
          className={styles.rightButton}
          onClick={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;

            if (activeIndex === slideItemsArray.length - 1) {
              swiper.slideTo(0, 1000);
            } else {
              swiper.slideNext();
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.618313 9.73843H17.8582M17.8582 9.73843L9.23828 1.11846M17.8582 9.73843L9.23828 18.3584"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
