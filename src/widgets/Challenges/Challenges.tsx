'use client';

import { useEffect, useRef } from 'react';
import styles from './Challenges.module.scss';
import clsx from 'clsx'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';
import { CircleIcon } from '@/shared/ui/CircleIcon';

const challenges = [
    {
        icon: "/icons/task.svg",
        title: "Ever Changing Rules",
        text: "Tax regulations are subject to frequent changes, making it crucial to stay-up-to-date with the latest updates to ensure you don’t miss out on valuable incentives.",
    },
    {
        icon: "/icons/clipboardText.svg",
        title: "The Fine Print",
        text: "Eligibility criteria for different incentives and credits can be intricate. Failing to meet these criteria might lead to missed opportunities or even unintentional non-compliance.",
    },
    {
        icon: "/icons/diagram.svg",
        title: "Compliance Matters",
        text: "Properly claiming incentives and credits demands strict adherance to regulations. Failing to comply can result in penalties or the loss of benefits.",
    },
];

gsap.registerPlugin(ScrollTrigger);

export const Challenges = ({ className }: { className?: string }) => {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const itemsSelector = `.${styles.challengesSection__cardBlock__item}`;
            const sectionSelector = `.${styles.challengesSection__cardBlock}`;

            gsap.set(itemsSelector, { opacity: 0 });

            ScrollTrigger.create({
                trigger: sectionSelector,
                start: "top-=100 80%",
                end: "+=200 bottom",
                pin: true,
                markers: false,
                onEnter: () => showCards(),
            });

            function showCards() {
                gsap.to(itemsSelector, {
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.in",
                });
            }
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
    const ctx = gsap.context(() => {
        if (!pathRef.current) return;

        const path = pathRef.current;
        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: `.${styles.challengesSection__cardBlock}`,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false,
            },
        });
    });

    return () => ctx.revert();
}, []);

    return (
        <section className={clsx(styles.challengesSection, className)}>
            <GsapAnim animation="fade"
                duration={1.0}
                ease="power3.out"
                triggerStart="top 100%"
                stagger={0.1}
                targets={[
                    `[data-anim="title"]`]}
            >
                <div data-anim="title" className={styles.challengesSection__title}>
                    <h1>Challenges Most Businesses Face with&nbsp;
                        <GradientText>Incentives & Credits</GradientText></h1>
                </div>
            </GsapAnim>

            <div className={styles.challengesSection__cardBlock}>
                {challenges.map(({ icon, title, text }, index) => (
                    <div key={index} className={styles.challengesSection__cardBlock__item}>
                        <div className={styles.challengesSection__cardBlock__item__title}>
                            {index === 0 && (
                                <div className={styles.challengesSection__cardBlock__item__title__vector}>
                                    <svg width="732" height="206" viewBox="0 0 732 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path ref={pathRef} d="M-39.9128 105.575L220.023 16.2251C230.266 12.7042 240.127 22.5164 236.773 32.8155C218.83 87.9212 197.045 164.609 210.822 162.591C230.909 159.648 447.989 -21.03 722.321 193.491" stroke="url(#paint0_linear_4144_43148)" strokeWidth="30" />
                                        <defs>
                                            <linearGradient id="paint0_linear_4144_43148" x1="-39.1159" y1="77.5154" x2="813.43" y2="101.73" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.156961" stopColor="#EBFDB8" />
                                                <stop offset="0.950233" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}

                            <CircleIcon
                                color="#E6F8AF"
                                iconSrc={icon}
                                size={48}
                                iconSize={24}
                                borderRadius="8.5px"
                            />
                            <h1>{title}</h1>
                        </div>

                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};