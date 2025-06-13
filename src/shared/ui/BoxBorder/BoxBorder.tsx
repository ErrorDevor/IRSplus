import React, { useMemo } from "react";
import styles from "./BoxBorder.module.scss";

interface BoxBorderProps {
    children: React.ReactNode;
    fontMinPx?: number; 
    fontMaxPx?: number; 
}

export const BoxBorder: React.FC<BoxBorderProps> = ({
    children,
    fontMinPx = 20, 
    fontMaxPx = 28,
}) => {
    const fontSize = useMemo(() => {
        const baseFontSize = 16; 
        const minRem = fontMinPx / baseFontSize;
        const maxRem = fontMaxPx / baseFontSize;
        const minVw = 320;
        const maxVw = 1520;
        const slope = ((fontMaxPx - fontMinPx) / (maxVw - minVw)) * 100;

        return `clamp(${minRem}rem, ${minRem}rem + ${slope}vw, ${maxRem}rem)`;
    }, [fontMinPx, fontMaxPx]);

    return (
        <div className={styles.boxBorder}>
            <p style={{ fontSize }}>{children}</p>
        </div>
    );
};
