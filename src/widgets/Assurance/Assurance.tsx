'use client';

import React, { useEffect, useRef, useState } from "react";
import styles from './Assurance.module.scss';
import clsx from 'clsx';
import classNames from "classnames";
import { GradientText } from '@/shared/ui/GradientText';
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

const slides = [
    {
        title: "Thorough Assessment",
        text: "After our initial consultation, we carefully assess your eligibility for each incentive or credit. Different incentives have specific criteria that you need to meet and be checked for.",
    },
    {
        title: "Documentation",
        text: "Proper documentation is essential to backup your claims. Our tax professionals will assist in compiling the necessary documentation needed.",
    },
    {
        title: "Claiming Process",
        text: "Understanding the correct way to claim incentives is vital. We take the lead of the process, reducing the chance of any mistakes occuring.",
    }
];

const TOTAL_SLIDES = 3;
let scrolling = false;

export const Assurance = ({ className }: { className?: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperCore, setSwiperCore] = useState<SwiperCore | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !swiperCore) return;

        const handleScroll = (e: WheelEvent) => {
            e.preventDefault();
            if (scrolling) return;
            scrolling = true;

            if (e.deltaY > 0) {
                if (swiperCore.activeIndex < TOTAL_SLIDES - 1) {
                    swiperCore.slideNext();
                }
            } else {
                if (swiperCore.activeIndex > 0) {
                    swiperCore.slidePrev();
                }
            }

            setTimeout(() => (scrolling = false), 1000);
        };

        container.addEventListener("wheel", handleScroll, { passive: false });
        return () => container.removeEventListener("wheel", handleScroll);
    }, [swiperCore]);

    return (
        <section className={clsx(styles.assuranceSection, className)}>
            <GsapAnim
                animation="fade"
                duration={1.0}
                ease="power3.in"
                stagger={0.1}
                once={true}
                reverseOnLeave={true}
                triggerStart="top 100%"
                targets={['[data-anim="h1"]', '[data-anim="p"]', '[data-anim="slider"]']}
            >
                <div className={styles.assuranceSection__title}>
                    <h1 data-anim="h1">
                        The IRSplus <GradientText>Process</GradientText>
                    </h1>
                    <p data-anim="p" data-opacity="0.8">
                    Understanding eligibility requirements and ensuring compliance is key to reaping the rewards of tax incentives and credits. Here’s our process:
                    </p>
                </div>

                <div ref={containerRef} data-anim="slider" className={clsx(styles.sliderSection, className)}>
                    <div className={styles.sliderSection__paginationBlock}>
                        <div className={styles.dots}>
                            {slides.map((_, i) => (
                                <span
                                    key={i}
                                    className={classNames(styles.dot, { [styles.activeDot]: i === activeIndex })}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.sliderSection__textBlock}>
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

                    <div className={styles.imageBlock}>
                        <Swiper
                            modules={[EffectCreative]}
                            effect="creative"
                            speed={1000}
                            allowTouchMove={true}
                            onInit={setSwiperCore}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            creativeEffect={{
                                limitProgress: 3,
                                prev: {
                                    shadow: true,
                                    translate: [0, "-10%", -100],
                                    opacity: 1,
                                },
                                next: {
                                    translate: [0, "10%", 100],
                                    opacity: 0,
                                },
                                perspective: true,
                            }}
                        >
                            <SwiperSlide className={styles.slideItem}>
                                <Image className={styles.img}
                                    src="/images/Assurance/assuranceImg1.webp"
                                    alt=""
                                    priority
                                    fill
                                    sizes="(max-width: 980px) 100vw, 724px"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slideItem}>
                                <Image className={styles.img}
                                    src="/images/Assurance/assuranceImg2.webp"
                                    alt=""
                                    priority
                                    fill
                                    sizes="(max-width: 980px) 100vw, 724px"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slideItem}>
                                <Image className={styles.img}
                                    src="/images/Assurance/assuranceImg3.webp"
                                    alt=""
                                    priority
                                    fill
                                    sizes="(max-width: 980px) 100vw, 724px"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </GsapAnim>
        </section>
    );
};
