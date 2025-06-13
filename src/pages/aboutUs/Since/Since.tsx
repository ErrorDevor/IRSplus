"use client";

import { useEffect, useRef } from "react";
import styles from "./Since.module.scss";
import clsx from "clsx";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Since = ({ className }: { className?: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const title = titleRef.current;
    const text = textRef.current;

    if (!wrapper || !section || !title || !text) return;

    gsap.killTweensOf([title, text]);

    const titleSplit = new SplitText(title, { type: "words, chars" });
    const titleChars = titleSplit.chars;

    const textSplit = new SplitText(text, {
      type: "words, chars",
      mask: "chars",
    });
    const textChars = textSplit.chars;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: section,
        anticipatePin: 1,
        markers: false,
      },
    });

    tl.fromTo(
      titleChars,
      {
        opacity: 0.4,
        autoAlpha: 0.4,
      },
      {
        opacity: 1,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      }
    );

    tl.from(textChars, {
      duration: 0.4,
      opacity: 0,
      stagger: {
        from: "random",
        amount: 0.4,
      },
      ease: "power3.out",
    });

    ScrollTrigger.refresh(true);

    return () => {
      titleSplit.revert();
      textSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className={clsx(styles.pinWrapper, className)}>
      <section ref={sectionRef} className={styles.sinceSection}>
        <div className={styles.text}>
          <h1 ref={titleRef}>
            Since 2017, clients have{" "}
            <span className={styles.underlineAccent}>chosen us</span> for our
            insightful guidance in helping them forge pathways{" "}
            <span className={styles.coloredText}>to success</span>, whatever
            challenges they’re facing
          </h1>

          <p ref={textRef}>
            Our specialty financial and accounting tax firm is led by a team of
            passionate professionals who are committed to improving performance,
            results, and goals for our clients. We are dedicated to helping
            companies benefit from government incentive programs that are
            available to them.
          </p>
        </div>
      </section>
    </div>
  );
};
