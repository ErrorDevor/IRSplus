"use client";

import React from "react";
import styles from "./LabelBenefit.module.scss";
import { CircleIcon } from "@/shared/ui/CircleIcon";

interface LabelBenefitProps {
  // Texts
  title?: string;
  text: string;

  // Text styles
  titleSize?: string;
  titleColor?: string;
  titleWeight?: number | string;

  textSize?: string;
  textColor?: string;
  fontWeight?: number | string;

  // Background & border
  bg?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;

  // CircleIcon props
  iconColor: string;
  iconSrc: string;
  iconAlt?: string;
  iconSize?: number;
  iconFrameSize?: number;
  iconBorder?: number;
  iconBorderColor?: string;
}

export const LabelBenefit: React.FC<LabelBenefitProps> = ({
  title,
  text,

  titleSize = "12px",
  titleColor = "#888",
  titleWeight = 600,

  textSize = "14px",
  textColor = "#000",
  fontWeight = 500,

  bg = "#fff",
  borderColor = "transparent",
  borderWidth = "1px",
  borderRadius = "12px",

  iconColor,
  iconSrc,
  iconAlt = "icon",
  iconSize = 18,
  iconFrameSize = 40,
  iconBorder = 0,
  iconBorderColor = "#fff",
}) => {
  return (
    <div
      className={styles.labelBenefit}
      style={{
        backgroundColor: bg,
        border: `${borderWidth} solid ${borderColor}`,
        borderRadius: borderRadius,
      }}
    >
      <CircleIcon
        color={iconColor}
        iconSrc={iconSrc}
        alt={iconAlt}
        iconSize={iconSize}
        size={iconFrameSize}
        border={iconBorder}
        borderColor={iconBorderColor}
      />
      <div className={styles.textContainer}>
        {title && (
          <span
            className={styles.labelTitle}
            style={{
              fontSize: titleSize,
              color: titleColor,
              fontWeight: titleWeight,
            }}
          >
            {title}
          </span>
        )}
        <span
          className={styles.labelText}
          style={{
            fontSize: textSize,
            color: textColor,
            fontWeight: fontWeight,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
