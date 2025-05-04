import React from "react";
import styles from "./MarqueeItem.module.scss";
import { CircleIcon } from '@/shared/ui/CircleIcon';

interface MarqueeItems {
  iconSrc: string;
  text: string;
}

interface MarqueeTextProps {
  items: MarqueeItems[];
}

export const MarqueeItem: React.FC<MarqueeTextProps> = ({ items }) => {
  const repeatedItems = [...items, ...items];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContent}>
        {repeatedItems.map((item, index) => (
          <div key={index} className={styles.marqueeItem}>
            <CircleIcon
              color="#E6F8AF"
              iconSrc={item.iconSrc}
              size={56}
              iconSize={28}
              borderRadius="10px"
              inline
            />
            <h1>{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
