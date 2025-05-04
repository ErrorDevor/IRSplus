import React from "react";
import styles from "./Tag.module.scss";

interface TagProps {
    text: string;
    colorBg: string;
}


export const Tag = ({ text, colorBg }: TagProps) => {
    return ( <div className={styles.TagFrame} style={{ backgroundColor: colorBg }}>
        <h2>{text}</h2>
    </div>);
  };