import React, { useMemo } from "react";
import styles from "./BoxBorder.module.scss";
import clsx from "clsx";

interface BoxBorderProps {
  children: React.ReactNode;
  fontSizeMinPx?: number;
  fontSizeMaxPx?: number;
  fontSizeVW?: number;

  fontWeightMin?: number;
  fontWeightMax?: number;

  paddingMin?: [number, number];
  paddingMax?: [number, number];
  paddingVW?: [number, number];

  borderMin?: number;
  borderMax?: number;
  borderVW?: number;

  className?: string;
}

export const BoxBorder: React.FC<BoxBorderProps> = ({
  children,
  fontSizeMinPx = 20,
  fontSizeMaxPx = 32,
  fontSizeVW = 1.5,

  fontWeightMin = 400,
  fontWeightMax = 500,

  paddingMin = [10, 20],
  paddingMax = [18, 36],
  paddingVW = [1.2, 2.4],

  borderMin = 2,
  borderMax = 3,
  borderVW = 0.2,

  className,
}) => {
  const styleVars = useMemo(() => {
    return {
      "--font-size": `clamp(${fontSizeMinPx}px, ${fontSizeVW}vw, ${fontSizeMaxPx}px)`,
      "--font-weight": `clamp(${fontWeightMin}, 1vw * 100, ${fontWeightMax})`,
      "--padding-block": `clamp(${paddingMin[0]}px, ${paddingVW[0]}vw, ${paddingMax[0]}px)`,
      "--padding-inline": `clamp(${paddingMin[1]}px, ${paddingVW[1]}vw, ${paddingMax[1]}px)`,
      "--border-size": `clamp(${borderMin}px, ${borderVW}vw, ${borderMax}px)`,
    } as React.CSSProperties;
  }, [
    fontSizeMinPx,
    fontSizeMaxPx,
    fontSizeVW,
    fontWeightMin,
    fontWeightMax,
    paddingMin,
    paddingMax,
    paddingVW,
    borderMin,
    borderMax,
    borderVW,
  ]);

  return (
    <div className={clsx(styles.boxBorder, className)} style={styleVars}>
      <p>{children}</p>
    </div>
  );
};
