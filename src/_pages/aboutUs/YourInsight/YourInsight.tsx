"use client";

import { useEffect } from "react";
import styles from "./YourInsight.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { GsapAnim } from "@/shared/lib/Animations/Animations";
import { Button } from "@/shared/ui/Button";
import { Counter } from "@/shared/ui/Counter";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamImageArray = [
  {
    imageSrc: "/images/TeamPhoto/img1.webp",
    alt: "Team Photo Member 1",
  },
  {
    imageSrc: "/images/TeamPhoto/img2.webp",
    alt: "Team Photo Member 2",
  },
  {
    imageSrc: "/images/TeamPhoto/img3.webp",
    alt: "Team Photo Member 3",
  },
];

const insightsArray = [
  {
    title: "Hours per month",
    count: "33,000",
    text: "Our team is full of high-integrity professionals geared for serving your business",
    svgSrc: "/images/IRSplusAboutUs/YourInsight/vector1.svg",
  },
  {
    title: "Cups of Coffee a Week",
    count: "1,162",
    text: "Our employees work around the clock to serve our clients",
    svgSrc: "/images/IRSplusAboutUs/YourInsight/vector2.svg",
  },
  {
    title: "Us in Numbers",
    count: "150",
    text: "We have over 150 employees dedicated to serving you",
    svgSrc: "/images/IRSplusAboutUs/YourInsight/vector3.svg",
  },
  {
    title: "Trees and Meals",
    count: "10M",
    text: "Our goal for giving back to the planet and people",
    svgSrc: "/images/IRSplusAboutUs/YourInsight/vector4.svg",
  },
];

export const YourInsight = ({ className }: { className?: string }) => {
  useEffect(() => {
    const circles = gsap.utils.toArray<HTMLDivElement>(".outerCircle");

    ScrollTrigger.batch(circles, {
      start: "top 80%",
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          {
            opacity: 0,
            x: -50,
            rotation: -180,
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      },
      onLeave: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          x: -50,
          rotation: -180,
          duration: 0.8,
          ease: "power3.in",
          stagger: 0.1,
        });
      },
      onEnterBack: (batch) => {
        gsap.fromTo(
          batch,
          {
            opacity: 0,
            x: -50,
            rotation: -180,
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          x: -50,
          rotation: -180,
          duration: 0.8,
          ease: "power3.in",
          stagger: 0.1,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={clsx(styles.yourInsightSection, className)}>
      <div className={styles.yourInsightSection__leftSide}>
        <div className={styles.yourInsightSection__leftSide__title}>
          <div className={styles.yourInsightSection__leftSide__title__h1}>
            <h1>By the Numbers:</h1>
            <h1>
              <span className={styles.coloredText}>
                Your Insight, Our Metrics
              </span>
            </h1>
          </div>

          <p>Professionalism, integrity, and a client-centric approach.</p>
        </div>

        <div className={styles.yourInsightSection__leftSide__dn}>
          <GsapAnim
            animation="fade-scale"
            markers={false}
            triggerStart="top 100%"
            targets={[`[data-anim="button"]`]}
          >
            <div data-anim="button" className={styles.button}>
              <Button
                text="Explore ERC Solutions"
                textSize="14px"
                textColor="#fff"
                borderRadius="18px"
                bg="#396CF0"
                iconSrc="/icons/arrowUp.svg"
                iconPosition="right"
              />

              <div className={styles.unionArrow}>
                <svg
                  width="763"
                  height="179"
                  viewBox="0 0 763 179"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-12.5509 129.439L238.303 17.091C248.189 12.6638 258.892 21.5502 256.477 32.109C243.558 88.6043 228.753 166.94 242.293 163.691C262.035 158.955 462 -40.5 754.5 148.5"
                    stroke="url(#paint0_linear_4477_42446)"
                    strokeWidth="30"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4477_42446"
                      x1="-14.2788"
                      y1="101.421"
                      x2="836.994"
                      y2="48.9222"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.156961" stopColor="#EBFDB8" />
                      <stop offset="0.950233" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </GsapAnim>

          <div className={styles.teamBlock}>
            <h3>Team of experts</h3>

            <div className={styles.teamBlock__teamPhoto}>
              {teamImageArray.map(({ imageSrc, alt }, index) => (
                <div
                  key={index}
                  className={clsx(
                    "outerCircle",
                    styles.outerCircle,
                    styles[`circle${index + 1}`]
                  )}
                >
                  <Image
                    className={styles.innerPhoto}
                    src={imageSrc}
                    alt={alt}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.yourInsightSection__rightSide}>
        {insightsArray.map(({ title, count, text, svgSrc }, index) => (
          <div className={styles.cardInsights} key={index}>
            <h3>{title}</h3>

            <div className={styles.cardInsights__counterWrapper}>
              <img
                src={svgSrc}
                alt="decorative"
                className={`${styles.cardInsights__svg} ${
                  styles[`svg${index}`]
                }`}
                aria-hidden="true"
              />
              <Counter
                targetNumber={count}
                titleFontSize="clamp(36px, 5vw, 80px)"
                titleWeight={500}
                titleColor="#000"
                titleSpacing="-0.02em"
                icon="+"
                iconFontSize="clamp(36px, 5vw, 80px)"
                iconColor="#396CF0"
                iconSpacing="-0.02em"
              />
            </div>

            <p>{text}</p>
          </div>
        ))}
      </div>

      <GsapAnim
        animation="fade-scale"
        markers={false}
        triggerStart="top 100%"
        targets={[`[data-anim="button"]`]}
      >
        <div data-anim="button" className={styles.buttonMobile}>
          <Button
            text="Explore ERC Solutions"
            textSize="14px"
            textColor="#fff"
            borderRadius="18px"
            bg="#396CF0"
            iconSrc="/icons/arrowUp.svg"
            iconPosition="right"
          />
        </div>
      </GsapAnim>

      <div className={styles.unionArrowMobile}>
        <svg
          width="763"
          height="179"
          viewBox="0 0 763 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="your-insight-line"
            d="M-12.5505 129.439L238.304 17.091C248.189 12.6638 258.892 21.5502 256.478 32.109C243.559 88.6043 228.754 166.94 242.294 163.691C262.035 158.955 462 -40.5 754.5 148.5"
            stroke="url(#paint0_linear_3666_30602)"
            strokeWidth="30"
            style={{
              strokeDashoffset: 0,
              strokeDasharray: "none",
            }}
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_3666_30602"
              x1="-14.2783"
              y1="101.421"
              x2="836.994"
              y2="48.9222"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.156961" stopColor="#EBFDB8"></stop>
              <stop offset="0.950233" stopColor="white"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
