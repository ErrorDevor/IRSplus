"use client";

import React, { useEffect, useRef } from "react";
import styles from "./YourCredits.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { gsap } from "gsap";
import { GsapAnim } from "@/shared/lib/Animations/Animations";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { BackgroundText } from "@/shared/ui/BackgroundText";
import { Button } from "@/shared/ui/Button";
import { LabelBenefit } from "@/shared/ui/LabelBenefit";

const labelData = [
  {
    text: "ERC",
    iconSrc: "/icons/coin.svg",
  },
  {
    text: "SETC",
    iconSrc: "/icons/coin.svg",
  },
  {
    text: "Research & Development",
    iconSrc: "/icons/presentionChart.svg",
  },
  {
    text: "Hiring Incentives",
    iconSrc: "/icons/users.svg",
  },
  {
    text: "Work Opportunity Tax Credits",
    iconSrc: "/icons/global.svg",
  },
  {
    text: "Section 179D Deduction",
    iconSrc: "/icons/map.svg",
  },
  {
    text: "Cost Segregation",
    iconSrc: "/icons/tag.svg",
  },
  {
    text: "Section 199A Deduction",
    iconSrc: "/icons/routing.svg",
  },
  {
    text: "Energy Investment Credits",
    iconSrc: "/icons/flash.svg",
  },
];

type LabelData = {
  text: string;
  iconSrc: string;
};

export const YourCredits = ({ className }: { className?: string }) => {
  const isMobile = useMediaQuery("(max-width: 1480px)");
  const chunkPattern = isMobile ? [3, 2, 2, 2] : [3, 2, 3, 1];
  const tagsBlockRef = useRef<HTMLDivElement | null>(null);

  const labelChunks: LabelData[][] = [];
  let currentIndex = 0;

  const LabelBenefitWrapper = ({
    label,
    index,
  }: {
    label: LabelData;
    index: number;
  }) => (
    <div
      className={`${styles.cardWrapper} ${styles.appearItem} ${
        styles[`labelBenefit${index}`]
      }`}
    >
      <LabelBenefit
        text={label.text}
        iconSrc={label.iconSrc}
        textSize="14px"
        textColor="#000"
        borderRadius="75px"
        bg="#fff"
        iconColor="#EBFDB8"
        iconSize={16}
        iconFrameSize={40}
      />
    </div>
  );

  chunkPattern.forEach((size) => {
    labelChunks.push(labelData.slice(currentIndex, currentIndex + size));
    currentIndex += size;
  });

  useEffect(() => {
    if (!tagsBlockRef.current) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray("[data-row]");

      gsap.set(rows, { opacity: 0, scale: 0.9 });

      gsap.to(rows, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: tagsBlockRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, tagsBlockRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={clsx(styles.yourCreditsSection, className)}>
      <div className={styles.yourCreditsSection__leftSide}>
        <div className={styles.yourCreditsSection__leftSide__imageBlock}>
          <GsapAnim
            animation="fade-scale"
            markers={false}
            triggerStart="top 80%"
            targets={[`[data-anim="image"]`]}
          >
            <div
              data-anim="image"
              className={styles.yourCreditsSection__leftSide__imageBlock__image}
            >
              <Image
                src="/images/IRSplusAboutUs/YourCredits/img1.webp"
                alt="YourCreditsImage"
                width={318}
                height={488}
                style={{ objectFit: "cover", objectPosition: "-125px" }}
              />
            </div>
          </GsapAnim>

          <GsapAnim
            animation="fade-scale"
            markers={false}
            triggerStart="top 80%"
            targets={[`[data-anim="union"]`]}
          >
            <div
              data-anim="union"
              className={styles.yourCreditsSection__leftSide__imageBlock__union}
            >
              <svg
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.0327 5.17212C31.0327 2.31564 28.7171 0 25.8606 
                        0H5.17212C2.31564 0 0 2.31563 0 5.17212V25.8606C0 28.7171 2.31563 31.0327 5.17212 31.0327H25.8606C28.7171 31.0327 
                        31.0327 28.7171 31.0327 25.8606V5.17212ZM31.0327 65.1682C31.0327 62.3117 28.7171 59.9961 25.8606 59.9961H5.17212C2.31564 
                        59.9961 0 62.3117 0 65.1682V85.8567C0 88.7132 2.31563 91.0288 5.17212 91.0288H25.8606C28.7171 91.0288 31.0327 88.7132 
                        31.0327 85.8567V65.1682ZM31.0332 35.1702C31.0332 32.3137 33.3488 29.998 36.2053 29.998H56.8923C59.7488 29.998 62.0645 
                        27.6824 62.0645 24.8259V5.17212C62.0645 2.31564 64.3801 0 67.2366 0H87.925C90.7815 0 93.0972 2.31564 93.0972 
                        5.17212V24.8259C93.0972 27.6824 95.4128 29.998 98.2693 29.998H117.925C120.782 29.998 123.097 32.3137 123.097 
                        35.1702V55.8586C123.097 58.7151 120.782 61.0307 117.925 61.0307H98.2693C95.4128 61.0307 93.0972 63.3464 93.0972 
                        66.2029V85.8567C93.0972 88.7132 90.7815 91.0288 87.925 91.0288H67.238C64.3815 91.0288 62.0659 93.3444 62.0659 
                        96.2009V115.857C62.0659 118.713 59.7503 121.029 56.8938 121.029H36.2053C33.3488 121.029 31.0332 118.713 31.0332 
                        115.857V95.1682C31.0332 92.3117 33.3488 89.9961 36.2053 89.9961H56.8923C59.7488 89.9961 62.0645 87.6805 62.0645 
                        84.824V66.2029C62.0645 63.3464 59.7488 61.0307 56.8923 61.0307H36.2053C33.3488 61.0307 31.0332 58.7151 31.0332 
                        55.8586V35.1702ZM62.0659 36.2048C62.0659 33.3483 64.3815 31.0327 67.238 31.0327H86.8923C89.7488 31.0327 92.0645 
                        33.3483 92.0645 36.2048V54.824C92.0645 57.6805 89.7488 59.9961 86.8923 59.9961H67.238C64.3815 59.9961 62.0659 
                        57.6805 62.0659 54.824V36.2048ZM124.132 98.2698C124.132 95.4133 121.817 93.0977 118.96 93.0977H98.2717C95.4152 
                        93.0977 93.0996 95.4133 93.0996 98.2698V118.958C93.0996 121.815 95.4152 124.13 98.2717 124.13H118.96C121.817 
                        124.13 124.132 121.815 124.132 118.958V98.2698Z"
                  fill="#2459DF"
                />
              </svg>
            </div>
          </GsapAnim>

          <div
            ref={tagsBlockRef}
            className={styles.yourCreditsSection__leftSide__tagsBlock}
          >
            {labelChunks.map((row, rowIndex) => (
              <div key={rowIndex} data-row className={styles.tagRow}>
                {row.map((label, index) => (
                  <LabelBenefitWrapper
                    key={index + rowIndex * 10}
                    index={index + rowIndex * 10}
                    label={label}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.yourCreditsSection__rightSide}>
        <GsapAnim
          animation="fade-scale"
          markers={false}
          triggerStart="top 80%"
          targets={[`[data-anim="text"]`]}
        >
          <div
            data-anim="text"
            className={styles.yourCreditsSection__rightSide__title}
          >
            <h1>
              We Specialize in Helping You
              <BackgroundText>Take Advantage</BackgroundText>of Government
              Incentives
            </h1>
            <p>
              Most business owners are unaware of the treasure trove within
              their reach. Our credits and Incentives services are here to
              unveil the potential you didn’t even know existed. We cover a
              diverse spectrum of credits, including ERC, SETC, R&D Tax credits,
              Energy Investment Tax Credits, WOTC Tax Credits, Cost Segregation,
              Section 179D Tax Deduction, Section 199A Deduction, Hiring
              Credits, and Incentives.
            </p>
          </div>
        </GsapAnim>

        <GsapAnim
          animation="fade-scale"
          markers={false}
          triggerStart="top 100%"
          targets={[`[data-anim="button"]`]}
        >
          <div data-anim="button" className={styles.button}>
            <Button
              text="Incentives & Credits"
              textSize="14px"
              textColor="#fff"
              borderRadius="18px"
              bg="#396CF0"
              iconSrc="/icons/arrowUp.svg"
              iconPosition="right"
            />
          </div>
        </GsapAnim>
      </div>
    </section>
  );
};
