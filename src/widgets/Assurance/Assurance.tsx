'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Assurance.module.scss';
import clsx from 'clsx';
import classNames from "classnames";
import Image from "next/image";
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';

const slides = [
    {
        title: "Thorough Assessment",
        text: "After our initial consultation, we carefully assess your eligibility for each incentive or credit. Different incentives have specific criteria that you need to meet and be checked for.",
        imageSrc: "/images/Assurance/assuranceImg1.webp",
    },
    {
        title: "Documentation",
        text: "Proper documentation is essential to backup your claims. Our tax professionals will assist in compiling the necessary documentation needed.",
        imageSrc: "/images/Assurance/assuranceImg2.webp",
    },
    {
        title: "Claiming Process",
        text: "Understanding the correct way to claim incentives is vital. We take the lead of the process, reducing the chance of any mistakes occuring.",
        imageSrc: "/images/Assurance/assuranceImg3.webp",
    }
];

export const Assurance = ({ className }: { className?: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollBlocked = useRef(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const sectionFullyVisible = useRef(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleWheel = (e: WheelEvent) => {
            if (!sectionFullyVisible.current) return;
            if (scrollBlocked.current) return;

            e.preventDefault();

            const isScrollDown = e.deltaY > 0;

            if (isScrollDown) {
                if (activeIndex < slides.length - 1) {
                    setActiveIndex((prev) => prev + 1);
                    blockScrollTemporarily();
                } else {
                    unlockPageScroll();
                }
            } else {
                if (activeIndex > 0) {
                    setActiveIndex((prev) => prev - 1);
                    blockScrollTemporarily();
                } else {
                    unlockPageScroll();
                }
            }
        };

        const blockScrollTemporarily = () => {
            scrollBlocked.current = true;
            setTimeout(() => {
                scrollBlocked.current = false;
            }, 1000);
        };

        const lockPageScroll = () => {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        };

        const unlockPageScroll = () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                sectionFullyVisible.current = entry.intersectionRatio === 1;

                if (sectionFullyVisible.current) {
                    window.addEventListener('wheel', handleWheel, { passive: false });
                    if (activeIndex > 0 && activeIndex < slides.length - 1) {
                        lockPageScroll();
                    }
                } else {
                    window.removeEventListener('wheel', handleWheel);
                    unlockPageScroll();
                }
            },
            {
                root: null,
                threshold: 1.0,
            }
        );

        observer.observe(slider);

        return () => {
            observer.disconnect();
            window.removeEventListener('wheel', handleWheel);
            unlockPageScroll();
        };
    }, [activeIndex]);

    return (
        <section className={clsx(styles.assuranceSection, className)}>
            <GsapAnim
                animation="fade"
                duration={1.0}
                ease="power3.out"
                stagger={0.1}
                once={true}
                reverseOnLeave={false}
                triggerStart="top 100%"
                targets={['[data-anim="h1"]', '[data-anim="p"]']}
            >
                <div className={styles.assuranceSection__title}>
                    <h1 data-anim="h1">
                        The IRSplus <GradientText>Process</GradientText>
                    </h1>
                    <p data-anim="p" data-opacity="0.8">
                        Understanding eligibility requirements and ensuring compliance is key to reaping the rewards of tax incentives and credits. Here’s our process:
                    </p>
                </div>
            </GsapAnim>

            <div ref={sliderRef} className={styles.assuranceSection__slider}>
                <div className={styles.assuranceSection__slider__dotScroll}>
                    <div className={styles.dots}>
                        {slides.map((_, i) => (
                            <span
                                key={i}
                                className={classNames(styles.dot, { [styles.activeDot]: i === activeIndex })}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.assuranceSection__slider__text}>
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={classNames(styles.textItem, {
                                [styles.activeText]: i === activeIndex,
                            })}
                        >
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.assuranceSection__slider__image}>
                    {slides.map((slide, i) => {
                        const isActive = i === activeIndex;
                        const level = (i - activeIndex + slides.length) % slides.length;

                        return (
                            <div
                                key={i}
                                className={classNames(styles.imageWrapper, {
                                    [styles.activeImage]: isActive,
                                    [styles.inactiveImage]: !isActive,
                                    [styles.level1]: level === 1,
                                    [styles.level2]: level === 2,
                                })}
                            >
                                <Image
                                    className={styles.assuranceSection__slider__image__pic}
                                    priority
                                    src={slide.imageSrc}
                                    alt={`AssuranceImage${i + 1}`}
                                    fill
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
