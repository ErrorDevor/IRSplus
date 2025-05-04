"use client";

import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  href?: string;
  textSize?: string;
  textColor?: string;

  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;

  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;

  bg?: string;

  padding?: string;
  gap?: string;

  withShadow?: boolean;
  shadowColor?: string;
  shadowOffsetX?: string;
  shadowOffsetY?: string;
  shadowBlur?: string;

  iconSrc?: string;
  iconPosition?: "left" | "right";
  iconSize?: string;

  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  href,
  textSize = "16px",
  textColor = "#fff",

  width = "auto",
  height = "auto",
  minWidth,
  maxWidth,

  borderColor = "transparent",
  borderWidth = "1px",
  borderRadius = "8px",

  bg = "#0070f3",

  padding = "19px 28px",
  gap = "12px",

  withShadow = false,
  shadowColor = "rgba(0, 0, 0, 0.2)",
  shadowOffsetX = "0px",
  shadowOffsetY = "4px",
  shadowBlur = "8px",

  iconSrc,
  iconPosition = "right",
  iconSize = "10px",

  onClick,
}) => {
  const style = {
    fontSize: textSize,
    color: textColor,
    width,
    height,
    minWidth,
    maxWidth,
    borderColor,
    borderWidth,
    borderStyle: "solid",
    borderRadius,
    background: bg,
    padding,
    gap,
    boxShadow: withShadow
      ? `${shadowOffsetX} ${shadowOffsetY} ${shadowBlur} ${shadowColor}`
      : "none",
  };

  const iconStyle = {
    width: iconSize,
    height: iconSize,
  };

  const content = (
    <>
      {iconSrc && iconPosition === "left" && (
        <img src={iconSrc} alt="icon" className={styles.icon} style={iconStyle} />
      )}
      <span>{text}</span>
      {iconSrc && iconPosition === "right" && (
        <img src={iconSrc} alt="icon" className={styles.icon} style={iconStyle} />
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/");

    return isInternal ? (
      <Link href={href} passHref>
        <a className={styles.button} style={style}>
          {content}
        </a>
      </Link>
    ) : (
      <a
        href={href}
        className={styles.button}
        style={style}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button className={styles.button} onClick={onClick} style={style}>
      {content}
    </button>
  );
};
