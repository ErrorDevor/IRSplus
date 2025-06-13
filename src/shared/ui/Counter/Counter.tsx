import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  targetNumber: string;
  titleFontSize?: string;
  titleWeight?: number;
  titleColor?: string;
  titleSpacing?: string;
  icon?: string;
  iconFontSize?: string;
  iconColor?: string;
  iconSpacing?: string;
}

export const Counter: React.FC<CounterProps> = ({
  targetNumber,
  titleFontSize = "clamp(36px, 5vw, 80px)",
  titleWeight = 500,
  titleColor = "#000",
  titleSpacing = "-0.02em",
  icon = "+",
  iconFontSize = "clamp(36px, 5vw, 80px)",
  iconColor = "#396CF0",
  iconSpacing = "-0.02em",
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const counterObj = useRef({ val: 0 });
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const match = targetNumber.match(/^([\d,\.]+)([^\d]*)$/);
    if (!match) return;

    const rawNum = match[1].replace(/,/g, "");
    const suffix = match[2] || "";
    const number = parseFloat(rawNum);

    const updateText = () => {
      if (textRef.current) {
        const formatted = Math.floor(counterObj.current.val).toLocaleString("en-US");
        textRef.current.textContent = formatted + suffix;
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 98%",
      markers: false,
      onEnter: () => {
        tweenRef.current?.kill();
        tweenRef.current = gsap.to(counterObj.current, {
          val: number,
          duration: 1,
          ease: "power2.out",
          onUpdate: updateText,
        });
      },
      onLeaveBack: () => {
        tweenRef.current?.kill();
        tweenRef.current = gsap.to(counterObj.current, {
          val: 0,
          duration: 1,
          ease: "power2.in",
          onUpdate: updateText,
        });
      },
    });

    return () => {
      trigger.kill();
      tweenRef.current?.kill();
    };
  }, [targetNumber]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span
        ref={textRef}
        style={{
          fontSize: titleFontSize,
          fontWeight: titleWeight,
          color: titleColor,
          letterSpacing: titleSpacing,
          zIndex: 1,
        }}
      />
      <span
        style={{
          fontSize: iconFontSize,
          fontWeight: titleWeight,
          color: iconColor,
          letterSpacing: iconSpacing,
          zIndex: 1,
        }}
      >
        {icon}
      </span>
    </div>
  );
};
