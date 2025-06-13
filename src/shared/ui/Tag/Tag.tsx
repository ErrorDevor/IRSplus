import React from "react";
import styles from "./Tag.module.scss";

interface TagProps {
  text: string;
  colorBg: string;
  colorText?: string;
  colorBorder?: string;
}

export const Tag: React.FC<TagProps> = ({
  text,
  colorBg,
  colorText = "#000",      
  colorBorder = "rgba(0, 0, 0, 0.1)", 
}) => {
  return (
    <div
      className={styles.TagFrame}
      style={{
        backgroundColor: colorBg,
        borderColor: colorBorder,
      }}
    >
      <h2 style={{ color: colorText }}>{text}</h2>
    </div>
  );
};
