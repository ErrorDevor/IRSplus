'use client';

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from './Assurance.module.scss';
import clsx from 'clsx';
import classNames from "classnames";
import { GradientText } from '@/shared/ui/GradientText';
import Image from "next/image";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import SwiperCore from "swiper";
import { EffectCreative, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

gsap.registerPlugin(ScrollTrigger);

const txtItem = [
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

const imgItem = [
    '/images/Assurance/assuranceImg1.webp',
    '/images/Assurance/assuranceImg2.webp',
    '/images/Assurance/assuranceImg3.webp',
];

export const Assurance = ({ className }: { className?: string }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [swiperCore, setSwiperCore] = useState<SwiperCore | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = useCallback((swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    end: "+=400",
                    scrub: 1,
                    pin: false,
                    markers: false,
                },
            });

            tl.from(titleRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            }).from(textRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!swiperCore || !sliderRef.current) return;
        const numSlides = imgItem.length;
        const trigger = ScrollTrigger.create({
            trigger: sliderRef.current,
            start: 'top+=10% 20%',
            end: `+=${numSlides * 200}%`,
            scrub: 1,
            pin: true,
            markers: false,
            onUpdate: (self) => {
                const progress = self.progress;
                const slideIndex = Math.floor(progress * numSlides);

                if (swiperCore.activeIndex !== slideIndex) {
                    swiperCore.slideTo(slideIndex);
                }
            },
        });

        return () => {
            trigger.kill();
        };
    }, [swiperCore, imgItem.length]);

    return (
        <section className={clsx(styles.assuranceSection, className)}>
            <div ref={sectionRef} className={styles.assuranceSection__title}>
                <h1 ref={titleRef}>
                    The IRSplus <GradientText>Process</GradientText>
                </h1>
                <p ref={textRef}>
                    Understanding eligibility requirements and ensuring compliance is key
                    to reaping the rewards of tax incentives and credits. Here’s our process:
                </p>
            </div>

            <div ref={sliderRef} className={styles.sliderSection}>
                <div className={styles.paginationBlock}>
                    <div className={styles.dots}>
                        {txtItem.map((_, i) => (
                            <span
                                key={i}
                                className={classNames(styles.dot, { [styles.activeDot]: i === activeIndex })}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.textBlock}>
                    {txtItem.map((slide, i) => (
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
                    <div className={styles.imageInnerBlock}>
                        <Swiper
                            modules={[Mousewheel, EffectCreative]}
                            effect="creative"
                            speed={1000}
                            allowTouchMove={true}
                            onInit={(swiper) => {
                                setSwiperCore(swiper);
                                setActiveIndex(swiper.activeIndex);
                            }}
                            onSlideChange={handleSlideChange}
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
                            {imgItem.map((src, i) => (
                                <SwiperSlide key={i} className={styles.imagesItems}>
                                    <Image className={styles.img}
                                        src={src}
                                        alt=""
                                        priority
                                        fill
                                        sizes="(max-width: 724px) 100vw, 572px"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className={styles.sliderSectionWrapper}></div>
        </section>
    );
};
