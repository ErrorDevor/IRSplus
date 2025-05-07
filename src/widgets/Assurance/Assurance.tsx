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
    const sectionRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);
    const wasCentered = useRef(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
    
        const handleScroll = () => {
            if (!sectionRef.current || wasCentered.current) return;
    
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            const isInView = rect.top < windowHeight && rect.bottom > 0;
    
            if (isInView) {
                if (timeoutId) clearTimeout(timeoutId);
    
                timeoutId = setTimeout(() => {
                    if (wasCentered.current || !sectionRef.current) return;
    
                    wasCentered.current = true;
    
                    window.scrollTo({
                        top: window.scrollY + rect.top - windowHeight / 2 + rect.height / 2,
                        behavior: 'smooth',
                    });
                }, 300);
            }
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!sectionRef.current) return;
    
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const isCentered = Math.abs(sectionCenter - viewportCenter) < 50;
    
            if (!isCentered) return;
    
            const delta = e.deltaY;
            const isLast = activeIndex === slides.length - 1;
            const isFirst = activeIndex === 0;
    
            if ((isFirst && delta < 0) || (isLast && delta > 0)) {
                return;
            }
    
            e.preventDefault();
    
            if (isScrolling.current) return;
            isScrolling.current = true;
    
            if (delta > 0 && activeIndex < slides.length - 1) {
                setActiveIndex((prev) => prev + 1);
            } else if (delta < 0 && activeIndex > 0) {
                setActiveIndex((prev) => prev - 1);
            }
    
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };
    
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [activeIndex]);

    useEffect(() => {
        let touchStartY = 0;
        let touchEndY = 0;
    
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
    
        const handleTouchEnd = () => {
            const deltaY = touchStartY - touchEndY;
            const rect = sectionRef.current?.getBoundingClientRect();
            const sectionCenter = rect ? rect.top + rect.height / 2 : 0;
            const viewportCenter = window.innerHeight / 2;
            const isCentered = Math.abs(sectionCenter - viewportCenter) < 50;
    
            if (!isCentered || isScrolling.current) return;
    
            const isLast = activeIndex === slides.length - 1;
            const isFirst = activeIndex === 0;
    
            if (deltaY > 40 && !isLast) {
                setActiveIndex((prev) => prev + 1);
                isScrolling.current = true;
            } else if (deltaY < -40 && !isFirst) {
                setActiveIndex((prev) => prev - 1);
                isScrolling.current = true;
            }
    
            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        };
    
        const handleTouchMove = (e: TouchEvent) => {
            touchEndY = e.changedTouches[0].clientY;
        };
    
        const node = sectionRef.current;
        if (!node) return;
    
        node.addEventListener('touchstart', handleTouchStart, { passive: true });
        node.addEventListener('touchmove', handleTouchMove, { passive: true });
        node.addEventListener('touchend', handleTouchEnd, { passive: true });
    
        return () => {
            node.removeEventListener('touchstart', handleTouchStart);
            node.removeEventListener('touchmove', handleTouchMove);
            node.removeEventListener('touchend', handleTouchEnd);
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

            <div ref={sectionRef} className={styles.assuranceSection__slider}>
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
