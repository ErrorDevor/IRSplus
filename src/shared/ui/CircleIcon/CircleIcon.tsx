import React from "react";
import styles from "./CircleIcon.module.scss";

interface CircleIconProps {
  color?: string;
  background?: string;
  iconSrc: string;
  alt?: string;
  size?: number;
  iconSize?: number;
  borderRadius?: string | number;
  border?: number;
  borderColor?: string;
  inline?: boolean;
  scale?: number;
  marginBot?: number;
}

export const CircleIcon: React.FC<CircleIconProps> = ({
  color,
  background,
  iconSrc,
  alt = "icon",
  size = 40,
  iconSize = 18,
  borderRadius = "50%",
  border = 0,
  borderColor = "#fff",
  inline = false,
  scale = 1,
  marginBot,
}) => {
  const WrapperTag = inline ? "span" : "div";
  const parsedBorderRadius =
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

  return (
    <WrapperTag
      className={`${styles.circleIconFrame} ${inline ? styles.inline : ""}`}
      style={{
        background: background ? background : color,
        width: size,
        height: size,
        border: border > 0 ? `${border}px solid ${borderColor}` : "none",
        borderRadius: parsedBorderRadius,
        marginBottom: marginBot,
        transform: `scale(${scale})`,
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
