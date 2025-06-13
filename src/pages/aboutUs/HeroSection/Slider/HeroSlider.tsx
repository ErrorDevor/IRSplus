"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./HeroSlider.module.scss";
import Image from "next/image";

const images = [
  "1.png", "2.png", "3.png", "4.png", "5.png",
  "6.png", "7.png", "8.png", "9.png", "10.png",
];

const allImages = [...images, ...images];

export const HeroSlider = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let x = 0;
    let lastTime = performance.now();
    const baseSpeed = 0.1;
    const slowFactor = 0.25; 
    const easing = 0.1;
    let currentSpeed = baseSpeed;

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const targetSpeed = hoveredRef.current ? baseSpeed * slowFactor : baseSpeed;
      currentSpeed += (targetSpeed - currentSpeed) * easing;

      x -= delta * currentSpeed;
      if (Math.abs(x) >= frame.scrollWidth / 2) x = 0;

      frame.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.heroSlider}>
      <div className={styles.carouselFrame} ref={frameRef}>
        {allImages.map((img, idx) => (
          <div
            key={idx}
            className={styles.imageWrapper}
            onMouseEnter={() => (hoveredRef.current = true)}
            onMouseLeave={() => (hoveredRef.current = false)}
          >
            <Image
              src={`/images/IRSplusAboutUs/HeroSection/Slide/${img}`}
              alt={`slide${idx}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.Image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
