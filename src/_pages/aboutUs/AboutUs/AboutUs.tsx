"use client";

import styles from "./AboutUs.module.scss";
import clsx from "clsx";
import { CircleIcon } from "@/shared/ui/CircleIcon";
import { Tag } from "@/shared/ui/Tag";
import { BackgroundText } from "@/shared/ui/BackgroundText";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const AboutUs = ({ className }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <section className={clsx(styles.aboutUsSection, className)}>
      <div className={styles.aboutUsSection__leftFrame}>
        <CircleIcon
          color="#F7F9FC"
          iconSrc="/icons/shape.svg"
          size={47}
          iconSize={20}
          borderRadius="50px"
        />
        <Tag text="about us" colorBg="transparent" />
      </div>

      <div className={styles.aboutUsSection__rightFrame}>
        <h1>
          IRSplus has created a foundation that has nurtured&nbsp;
          <BackgroundText>growth</BackgroundText>&nbsp;and&nbsp;
          <CircleIcon
            color="#E6F8AF"
            iconSrc="/icons/coin.svg"
            size={isMobile ? 23 : 44}
            iconSize={isMobile ? 11 : 22}
            borderRadius={isMobile ? 4 : 8}
            inline={true}        
          />
          success for many years
        </h1>

        <p>
          Our mission is to Help File Every Qualified Business & Individual in
          the United States to Receive their Tax Credit Refund Incentives
        </p>
      </div>
    </section>
  );
};
