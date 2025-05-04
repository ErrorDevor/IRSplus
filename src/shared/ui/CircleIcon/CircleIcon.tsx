import React from "react";
import styles from "./CircleIcon.module.scss";

interface CircleIconProps {
    color: string;
    iconSrc: string;
    alt?: string;
    size?: number;
    iconSize?: number;
    borderRadius?: string;
    border?: number;
    borderColor?: string;
    inline?: boolean;
}

export const CircleIcon: React.FC<CircleIconProps> = ({
    color,
    iconSrc,
    alt = "icon",
    size = 40,
    iconSize = 18,
    borderRadius = "50%",
    border = 0,
    borderColor = "#fff",
    inline = false,
  }) => {
    const WrapperTag = inline ? "span" : "div";
  
    return (
      <WrapperTag
        className={`${styles.circleIconFrame} ${inline ? styles.inline : ""}`}
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          border: border > 0 ? `${border}px solid ${borderColor}` : "none",
          borderRadius: borderRadius,
        }}
      >
        <img
          src={iconSrc}
          alt={alt}
          style={{
            width: iconSize,
            height: iconSize,
          }}
        />
      </WrapperTag>
    );
  };

