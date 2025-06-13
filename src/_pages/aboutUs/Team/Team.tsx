"use client";

import { useEffect, useRef } from "react";
import styles from "./Team.module.scss";
import clsx from "clsx";
import { CardCompany } from "@/shared/ui/CardCompany";
import { CirclePhoto } from "@/shared/ui/CirclePhoto";
import { GsapAnim } from "@/shared/lib/Animations/Animations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Team = ({ className }: { className?: string }) => {
  const maskRef = useRef<SVGPathElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const path = maskRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!path || !title || !subtitle) return;

    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.set([subtitle], {
      opacity: 0,
      y: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // gsap.to(title, {
            //   opacity: 1,
            //   y: 0,
            //   duration: 1,
            //   ease: "power2.out",
            // });

            gsap.to(subtitle, {
              opacity: 0.9,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
            });

            gsap.to(path, {
              strokeDashoffset: 0,
              delay: 2,
              duration: 7,
              ease: "power2.out",
              repeat: -1,
            });
          } else {
            gsap.to([subtitle], {
              opacity: 0,
              y: 0,
              duration: 0.8,
              ease: "power2.in",
            });

            gsap.to(path, {
              strokeDashoffset: pathLength,
              duration: 1,
              ease: "power2.inOut",
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(subtitle);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={clsx(styles.teamSection, className)}>
      <GsapAnim
        animation="fade"
        duration={1.0}
        ease="power3.out"
        stagger={0.1}
        triggerStart="top 80%"
        targets={[
          `[data-anim="agent1"]`,
          `[data-anim="agent2"]`,
          `[data-anim="agent3"]`,
          `[data-anim="agent4"]`,
          `[data-anim="agent5"]`,
          `[data-anim="agent6"]`,
        ]}
      >
        <div
          className={styles.teamSection__circleAgentBlock}
          data-anim="agent1"
        >
          <div className={styles.teamSection__circleAgentBlock__circleAgent1} />

          <div className={styles.teamSection__circleAgentBlock__message}>
            <h4>AGENT</h4>
            <p>Hi James!</p>
            <p>How can I help you?</p>

            <svg
              className={styles.teamSection__circleAgentBlock__message__part}
              width="23"
              height="37"
              viewBox="0 0 23 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0002 37C23.0002 37 3.50283 37 2.00024 37C0.500312 37 0.000279748 34 2.00024 33.5C6.00021 31 10.5002 27 10.5002 27L10.7024 26.5615C17.6826 19.7864 22.2296 10.5214 22.9084 0.197266L23.0002 0V37Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>

        <div data-anim="agent2" className={styles.teamSection__circleAgent2}>
          <CirclePhoto
            imageSrc="/images/TeamPhoto/l2.webp"
            size={70}
            backgroundSize="150%"
            backgroundPosition="-20px -20px"
          />
        </div>

        <div data-anim="agent3" className={styles.teamSection__circleAgent3}>
          <CirclePhoto
            imageSrc="/images/TeamPhoto/l3.webp"
            size={80}
            backgroundPosition="0 -8px"
          />
        </div>

        <div data-anim="agent5" className={styles.teamSection__circleAgent5}>
          <CirclePhoto
            imageSrc="/images/TeamPhoto/l5.webp"
            size={70}
            backgroundPosition="top"
          />
        </div>

        <div data-anim="agent6" className={styles.teamSection__circleAgent6}>
          <CirclePhoto
            imageSrc="/images/TeamPhoto/img1.webp"
            size={80}
            backgroundPosition="-54px center"
            backgroundSize="200%"
          />
        </div>

        <div
          data-anim="agent4"
          className={styles.teamSection__circleAgentBlock4}
        >
          <div className={styles.teamSection__circleAgentBlock4__message}>
            <h4>AGENT</h4>
            <p>Hi James!</p>
            <p>How can I help you?</p>

            <svg
              className={styles.teamSection__circleAgentBlock4__message__part}
              width="23"
              height="37"
              viewBox="0 0 23 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0002 37C23.0002 37 3.50283 37 2.00024 37C0.500312 37 0.000279748 34 2.00024 33.5C6.00021 31 10.5002 27 10.5002 27L10.7024 26.5615C17.6826 19.7864 22.2296 10.5214 22.9084 0.197266L23.0002 0V37Z"
                fill="#fff"
              />
            </svg>
          </div>

          <div
            className={styles.teamSection__circleAgentBlock4__circleAgent4}
          />
        </div>
      </GsapAnim>

      <div className={styles.teamSection__inner}>
        <div ref={titleRef} className={styles.teamSection__inner__title}>
          <h1>We are your trusted team of ERC specialists</h1>

          <p>
            Our team of professionals is built on the foundation of risk
            management, compliance, and finance for our clients. It’s not just
            about following the rules, but about understanding them and knowing
            how to use these rules when they change.
          </p>
        </div>

        <div className={styles.teamSection__inner__dnBlock}>
          <GsapAnim
            animation="fade"
            ease="power3.out"
            triggerStart="top 90%"
            targets={[`[data-anim="cards"]`]}
          >
            <div
              data-anim="cards"
              className={styles.teamSection__inner__dnBlock__cards}
            >
              <CardCompany
                backgroundColor="#e5edf9"
                borderRadius={24}
                minWidth={163}
                minHeight={177}
                title="AA+"
                titleFontSize={28}
                description="S&P Rating"
                descriptionFontSize={16}
                imageSrc="/images/IRSplusAboutUs/TeamSection/comanyCard1.png"
                imageWidth={82}
                imageHeight={24}
                circleIconProps={{
                  color: "linear-gradient(to right, #7A9CF5, #A4BDFE)",
                  iconSrc: "/icons/shieldLight.svg",
                  size: 43,
                  iconSize: 21,
                  borderRadius: "100px",
                }}
              />

              <CardCompany
                backgroundColor="#e5edf9"
                borderRadius={24}
                minWidth={163}
                minHeight={177}
                title="A++"
                titleFontSize={28}
                description="A.M. Best Rating"
                descriptionFontSize={16}
                imageSrc="/images/IRSplusAboutUs/TeamSection/comanyCard2.png"
                imageWidth={82}
                imageHeight={24}
                circleIconProps={{
                  color: "linear-gradient(to right, #7A9CF5, #A4BDFE)",
                  iconSrc: "/icons/starLight.svg",
                  size: 43,
                  iconSize: 21,
                  borderRadius: "100px",
                }}
              />
            </div>
          </GsapAnim>

          <div
            ref={subtitleRef}
            className={styles.teamSection__inner__dnBlock__subtitle}
          >
            <div className={styles.svgArrow}>
              <svg
                width="51"
                height="34"
                viewBox="0 0 51 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="clip-arrow-path_v789lo5915">
                    <path d="M1.33669 27.3703C2.03731 27.6502 2.78419 27.7943 3.46169 28.1421C9.35495 31.3161 15.542 31.2892 21.7383 29.899C23.8718 29.4211 26.0324 28.3073 27.7867 26.9393C32.8439 23.106 36.7974 18.2841 39.4205 12.4714C40.1798 10.7978 40.6231 8.93907 40.795 6.98667C40.3842 7.41416 39.9279 7.8639 39.5394 8.33707C38.397 9.68864 37.2771 11.0859 36.0445 12.3684C35.5196 12.9083 34.7465 13.2866 33.9965 13.597C33.7237 13.7305 33.1132 13.5196 32.9336 13.2678C32.7541 13.016 32.7811 12.3801 32.9861 12.2231C36.2705 9.14402 38.5182 5.21346 41.0588 1.53587C41.9514 0.249884 42.8139 0.0542934 43.9631 1.02054C46.7795 3.43558 48.9576 6.38937 50.4982 9.76831C50.5429 9.85966 50.4281 10.0857 50.2893 10.4933C47.1145 10.8013 46.5026 7.47742 44.0439 5.79321C43.9938 6.49711 43.9899 7.06515 43.8958 7.56408C41.6302 17.4479 35.8684 24.9096 27.7164 30.597C26.5094 31.4707 25.0094 32.0915 23.5334 32.5307C18.1063 34.1106 12.6214 34.1902 7.21677 32.4756C5.4756 31.9122 3.87396 30.8277 2.31703 29.8345C1.685 29.4644 1.30504 28.6879 0.855694 28.1152C1.01602 27.8669 1.17635 27.6186 1.33669 27.3703Z" />
                  </clipPath>
                </defs>
                <path
                  ref={maskRef}
                  clipPath="url(#clip-arrow-path_v789lo5915)"
                  d="M1.33669 27.3703C2.03731 27.6502 2.78419 27.7943 
                                3.46169 28.1421C9.35495 31.3161 15.542 31.2892 21.7383 29.899C23.8718 29.4211 26.0324 28.3073 27.7867 
                                26.9393C32.8439 23.106 36.7974 18.2841 39.4205 12.4714C40.1798 10.7978 40.6231 8.93907 40.795 6.98667C40.3842 
                                7.41416 39.9279 7.8639 39.5394 8.33707C38.397 9.68864 37.2771 11.0859 36.0445 12.3684C35.5196 12.9083 34.7465 
                                13.2866 33.9965 13.597C33.7237 13.7305 33.1132 13.5196 32.9336 13.2678C32.7541 13.016 32.7811 12.3801 32.9861 
                                12.2231C36.2705 9.14402 38.5182 5.21346 41.0588 1.53587C41.9514 0.249884 42.8139 0.0542934 43.9631 1.02054C46.7795 
                                3.43558 48.9576 6.38937 50.4982 9.76831C50.5429 9.85966 50.4281 10.0857 50.2893 10.4933C47.1145 10.8013 46.5026 
                                7.47742 44.0439 5.79321C43.9938 6.49711 43.9899 7.06515 43.8958 7.56408C41.6302 17.4479 35.8684 24.9096 27.7164 
                                30.597C26.5094 31.4707 25.0094 32.0915 23.5334 32.5307C18.1063 34.1106 12.6214 34.1902 7.21677 32.4756C5.4756 
                                31.9122 3.87396 30.8277 2.31703 29.8345C1.685 29.4644 1.30504 28.6879 0.855694 28.1152C1.01602 27.8669 1.17635 
                                27.6186 1.33669 27.3703Z"
                  stroke="#396CF0"
                  strokeWidth={6}
                  strokeMiterlimit={100}
                  fill="none"
                />
              </svg>
            </div>
            <p>Professional Liability Errors & Omissions Insurance</p>
          </div>
        </div>
      </div>
    </section>
  );
};
