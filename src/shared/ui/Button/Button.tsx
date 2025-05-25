"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Button.module.scss";

interface DropdownLink {
  label: string;
  href: string;
}

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

  withDropdown?: boolean;
  dropdownLinks?: DropdownLink[];
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

  withDropdown = false,
  dropdownLinks = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    transform: withDropdown && isOpen ? "rotate(90deg)" : undefined,
    transition: "transform 0.6s ease",
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

  return (
    <div className={styles.wrapper} ref={buttonRef}>
      {href ? (
        <Link href={href} className={buttonClass} style={style}>
          {content}
        </Link>
      ) : (
        <button
          className={buttonClass}
          onClick={withDropdown ? toggleDropdown : onClick}
          style={style}
        >
          {content}
        </button>
      )}

      {withDropdown && dropdownLinks.length > 0 && (
        <div className={cn(styles.dropdownButton, { [styles.open]: isOpen })}>
          {dropdownLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.dropdownLink}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
