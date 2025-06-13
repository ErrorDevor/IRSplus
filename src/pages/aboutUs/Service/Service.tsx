"use client";

import styles from "./Service.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { GsapAnim } from "@/shared/lib/Animations/Animations";
import { CircleIcon } from "@/shared/ui/CircleIcon";
import { BackgroundText } from "@/shared/ui/BackgroundText";
import { LabelBenefit } from "@/shared/ui/LabelBenefit";

export const Service = ({ className }: { className?: string }) => {
  return (
    <section className={clsx(styles.serviceSection, className)}>
      <div className={styles.serviceSection__leftSide}>
        <div className={styles.serviceSection__leftSide__imageBlock}>
          <GsapAnim
            animation="fade-scale"
            markers={false}
            triggerStart="top 80%"
            stagger={0.2}
            targets={[
              `[data-anim="image"]`,
              `[data-anim="union"]`,
              `[data-anim="label"]`,
            ]}
          >
            <Image
              data-anim="image"
              className={styles.serviceSection__leftSide__imageBlock__image}
              priority
              src="/images/IRSplusTalent/Posts/postsImage.webp"
              alt="ServiceImage"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div
              data-anim="union"
              className={styles.serviceSection__leftSide__imageBlock__union}
            >
              <svg
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.439 5.18384C31.439 2.32735 29.1233 0.0117188 26.2668 0.0117188H5.57837C2.72189 0.0117188 0.40625 2.32735 0.40625 5.18383V25.8723C0.40625 28.7288 2.72189 31.0444 5.57837 31.0444H26.2654C29.1219 31.0444 31.4375 33.3601 31.4375 36.2165V54.8364C31.4375 57.6929 29.1219 60.0086 26.2654 60.0086H5.57837C2.72189 60.0086 0.40625 62.3242 0.40625 65.1807V85.8691C0.40625 88.7256 2.72189 91.0413 5.57837 91.0413H26.2654C29.1219 91.0413 31.4375 93.3569 31.4375 96.2134V115.867C31.4375 118.724 33.7531 121.04 36.6096 121.04H57.2981C60.1546 121.04 62.4702 118.724 62.4702 115.867V96.2136C62.4702 93.3571 64.7858 91.0415 67.6423 91.0415H88.3293C91.1858 91.0415 93.5014 88.7259 93.5014 85.8694V66.2146C93.5014 63.3581 95.8171 61.0425 98.6736 61.0425H118.329C121.186 61.0425 123.501 58.7268 123.501 55.8703V35.1819C123.501 32.3254 121.186 30.0098 118.329 30.0098H98.6736C95.8171 30.0098 93.5014 27.6941 93.5014 24.8376V5.18384C93.5014 2.32735 91.1858 0.0117188 88.3293 0.0117188H67.6409C64.7844 0.0117188 62.4688 2.32735 62.4688 5.18384V24.8376C62.4688 27.6941 60.1531 30.0098 57.2966 30.0098H36.6111C33.7546 30.0098 31.439 27.6941 31.439 24.8376V5.18384ZM87.2966 31.0444C90.1531 31.0444 92.4688 33.3601 92.4688 36.2165V54.8367C92.4688 57.6932 90.1531 60.0088 87.2966 60.0088H67.6423C64.7858 60.0088 62.4702 57.6931 62.4702 54.8367V36.2165C62.4702 33.3601 64.7858 31.0444 67.6423 31.0444H87.2966ZM62.4688 66.2146C62.4688 63.3581 60.1531 61.0425 57.2966 61.0425H36.6111C33.7546 61.0425 31.439 63.3581 31.439 66.2146V84.8347C31.439 87.6912 33.7546 90.0068 36.6111 90.0068H57.2966C60.1531 90.0068 62.4688 87.6912 62.4688 84.8347V66.2146ZM124.541 98.2815C124.541 95.425 122.225 93.1094 119.368 93.1094H98.6799C95.8234 93.1094 93.5078 95.425 93.5078 98.2815V118.97C93.5078 121.826 95.8234 124.142 98.6799 124.142H119.368C122.225 124.142 124.541 121.826 124.541 118.97V98.2815Z"
                  fill="#F6F5F5"
                />
              </svg>
            </div>

            <div
              data-anim="label"
              className={
                styles.serviceSection__leftSide__imageBlock__labelBenefit
              }
            >
              <LabelBenefit
                text="Care about the success of our clients"
                iconSrc="/icons/tickCircle.svg"
                textSize="16px"
                titleWeight={600}
                textColor="#01402F"
                textWrap="normal"
                borderRadius="75px"
                maxWidthValue="254px"
                bg="#E6F8AF"
                iconColor="#fff"
                iconSize={24}
                iconFrameSize={49}
              />
            </div>
          </GsapAnim>

          <GsapAnim
            animation="corner-left-up"
            scale={0.6}
            markers={false}
            triggerStart="top 90%"
            targets={[`[data-anim="cube"]`]}
          >
            <div
              data-anim="cube"
              className={clsx(styles.blockWithCubeWrapper, className)}
            >
              <div className={styles.blockWithCubeWrapper__blockWithCube}>
                <div
                  className={
                    styles.blockWithCubeWrapper__blockWithCube__bigCube
                  }
                >
                  <Image
                    className={
                      styles.blockWithCubeWrapper__blockWithCube__bigCube__image
                    }
                    priority
                    src="/images/IRSplusTalent/Posts/icon.png"
                    alt="iconImage"
                    width={52}
                    height={50}
                  />
                  <p>Top Rated Tax Firm since 2017</p>
                </div>

                <div
                  className={
                    styles.blockWithCubeWrapper__blockWithCube__smallCube
                  }
                ></div>
              </div>

              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", opacity: 0 }}
              >
                <path
                  d="M0 0V30C0.00415993 8.25 9.45285 0 30 0H0Z"
                  fill="black"
                />
                <clipPath
                  id="clipPath_flowAround"
                  clipPathUnits="objectBoundingBox"
                  transform="scale(0.0333333333333333)"
                >
                  <path d="M0 0V30C0.00415993 8.25 9.45285 0 30 0H0Z" />
                </clipPath>
              </svg>
            </div>
          </GsapAnim>
        </div>
      </div>

      <div className={styles.serviceSection__rightSide}>
        <GsapAnim
          animation="fade-scale"
          markers={false}
          triggerStart="top 100%"
          stagger={0.2}
          targets={[
            `[data-anim="h1"]`,
            `[data-anim="p"]`,
            `[data-anim="card"]`,
            `[data-anim="button"]`,
          ]}
        >
          <h1 data-anim="h1">
            We service a <BackgroundText>wide range of clients,</BackgroundText>&nbsp;
            including entrepreneurial start-ups, SMBs, investment banks, and
            some of the most affluent and high net worth individuals
          </h1>

          <div
            data-anim="card"
            className={styles.serviceSection__rightSide__card}
          >
            <CircleIcon
              color="#E6F8AF"
              iconSrc="/icons/users.svg"
              size={36}
              iconSize={18}
              borderRadius="6.43px"
            />
            <p>
              However, we are much more than just a tax firm. We care about the
              success of our clients and strive to provide compassionate and
              honest service in everything we do.
            </p>
          </div>

          <p data-anim="p" data-opacity="0.7">
            We offer a complete spectrum of financial, tax and accounting,
            assurance and advisory services. Our industry-focused practices
            offer deep insight and specialized services to privately held and
            publicly registered companies, and nonprofit and social sector
            organizations. The Firm also provides a full complement of
            marketing, technology, wealth management, and virtual accounting
            staffing services. 
          </p>
        </GsapAnim>
      </div>
    </section>
  );
};
