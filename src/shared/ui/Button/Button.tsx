"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";
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

  withShadow = true,

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
  } as React.CSSProperties;

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

  const buttonClass = cn(styles.button, {
    [styles.withShadow]: withShadow,
  });

  if (href) {
    const isInternal = href.startsWith("/");

    return isInternal ? (
      <Link href={href} passHref legacyBehavior>
        <a className={buttonClass} style={style}>
          {content}
        </a>
      </Link>
    ) : (
      <a
        href={href}
        className={buttonClass}
        style={style}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} style={style}>
      {content}
    </button>
  );
};
