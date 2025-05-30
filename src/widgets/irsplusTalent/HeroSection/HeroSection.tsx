'use client';

import { useEffect, useRef } from "react";
import styles from './HeroSection.module.scss';
import clsx from 'clsx'
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = ({ className }: { className?: string }) => {
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

        gsap.set([title, subtitle], {
            opacity: 0,
            y: 40,
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.to(title, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power2.out",
                        });

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
                        gsap.to([title, subtitle], {
                            opacity: 0,
                            y: 40,
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
        <section className={clsx(styles.heroSection, className)}>
            <GsapAnim
                animation="fade"
                duration={1.0}
                ease="power3.out"
                stagger={0.1}
                triggerStart="top 80%"
                targets={[`[data-anim="circle"]`, `[data-anim="agent1"]`, `[data-anim="agent2"]`, `[data-anim="agent3"]`, `[data-anim="agent4"]`, `[data-anim="agent5"]`]}
            >
                <div data-anim="circle" className={styles.heroSection__rainbowCircleBlock}>
                    <svg width="1726" height="1726" viewBox="0 0 1726 1726" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="863" cy="863" r="862" stroke="url(#paint0_linear_1198_14537)" strokeWidth="2"></circle><path d="M1571 832.5C1571 1218.98 1250.28 1534 852.5 1534C454.723 1534 134 1218.98 134 832.5C134 446.022 454.723 131 852.5 131C1250.28 131 1571 446.022 1571 832.5Z" stroke="url(#paint1_linear_1198_14537)" strokeOpacity="0.6" strokeWidth="90"></path><defs><linearGradient id="paint0_linear_1198_14537" x1="863" y1="-5.20109e-08" x2="863.873" y2="1421.46" gradientUnits="userSpaceOnUse"><stop stopColor="#EBFDB8"></stop><stop offset="1" stopColor="#DBF3BD" stopOpacity="0"></stop></linearGradient><linearGradient id="paint1_linear_1198_14537" x1="852.5" y1="86" x2="885.265" y2="942.379" gradientUnits="userSpaceOnUse"><stop stopColor="#EBFDB8"></stop><stop offset="1" stopColor="#DBF3BD" stopOpacity="0"></stop></linearGradient></defs></svg>
                </div>

                <div data-anim="agent1" className={styles.heroSection__circleAgentBlock}>
                    <div className={styles.heroSection__circleAgentBlock__circleAgent1} />

                    <div className={styles.heroSection__circleAgentBlock__message}>
                        <h4>AGENT</h4>
                        <p>Hi James!</p>
                        <p>How can I help you?</p>
                    </div>
                </div>
                <div data-anim="agent2" className={styles.heroSection__circleAgent2} />
                <div data-anim="agent3" className={styles.heroSection__circleAgent3} />
                <div data-anim="agent5" className={styles.heroSection__circleAgent5} />

                <div data-anim="agent4" className={styles.heroSection__circleAgentBlock4}>
                    <div className={styles.heroSection__circleAgentBlock__message}>
                        <h4>AGENT</h4>
                        <p>Hi James!</p>
                        <p>How can I help you?</p>
                    </div>

                    <div className={styles.heroSection__circleAgentBlock4__circleAgent4} />
                </div>
            </GsapAnim>

            <div className={styles.heroSection__inner}>
                <div ref={titleRef} className={styles.heroSection__inner__title}>
                    <h1>IRSplusTALENT</h1>

                    <div ref={subtitleRef} className={styles.heroSection__inner__title__subtitle}>
                        <p>Welcome to <span className={styles.heroSection__inner__title__subtitle__coloredText}>IRSplusTALENT:</span> Your Ticket</p>

                        <div className={styles.heroSection__inner__title__subtitle__subtitle2}>
                            <p>to Unprecedented Heights</p>
                            
                            <div className={styles.svgArrow}>
                                <svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <clipPath id="clip-arrow-path_v789lo5915">
                                            <path d="M1.33669 27.3703C2.03731 27.6502 2.78419 27.7943 3.46169 28.1421C9.35495 31.3161 15.542 31.2892 21.7383 29.899C23.8718 29.4211 26.0324 28.3073 27.7867 26.9393C32.8439 23.106 36.7974 18.2841 39.4205 12.4714C40.1798 10.7978 40.6231 8.93907 40.795 6.98667C40.3842 7.41416 39.9279 7.8639 39.5394 8.33707C38.397 9.68864 37.2771 11.0859 36.0445 12.3684C35.5196 12.9083 34.7465 13.2866 33.9965 13.597C33.7237 13.7305 33.1132 13.5196 32.9336 13.2678C32.7541 13.016 32.7811 12.3801 32.9861 12.2231C36.2705 9.14402 38.5182 5.21346 41.0588 1.53587C41.9514 0.249884 42.8139 0.0542934 43.9631 1.02054C46.7795 3.43558 48.9576 6.38937 50.4982 9.76831C50.5429 9.85966 50.4281 10.0857 50.2893 10.4933C47.1145 10.8013 46.5026 7.47742 44.0439 5.79321C43.9938 6.49711 43.9899 7.06515 43.8958 7.56408C41.6302 17.4479 35.8684 24.9096 27.7164 30.597C26.5094 31.4707 25.0094 32.0915 23.5334 32.5307C18.1063 34.1106 12.6214 34.1902 7.21677 32.4756C5.4756 31.9122 3.87396 30.8277 2.31703 29.8345C1.685 29.4644 1.30504 28.6879 0.855694 28.1152C1.01602 27.8669 1.17635 27.6186 1.33669 27.3703Z" />
                                        </clipPath>
                                    </defs>
                                    <path ref={maskRef}
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
                                        fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
