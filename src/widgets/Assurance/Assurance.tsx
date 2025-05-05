'use client';

import React, { useState } from 'react';
import styles from './Assurance.module.scss';
import clsx from 'clsx'
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
    const [activeIndex] = useState(0);

    return (
        <section className={clsx(styles.assuranceSection, className)}>
            <GsapAnim
                animation="fade"
                duration={2.2}
                ease="power3.out"
                stagger={0.4}
                triggerStart="top 100%"
                targets={[
                    `[data-anim="h1"]`,
                    `[data-anim="p"]`
                ]}>

                <div className={styles.assuranceSection__title}>
                    <h1 data-anim="h1">The IRSplus <GradientText>Process</GradientText></h1>
                    <p data-anim="p" data-opacity="0.8">Understanding eligibility requirements and ensuring compliance
                        is key to reaping the rewards of tax incentives and credits.
                        Here’s our process:</p>
                </div>

                <div className={clsx(styles.slider, className)}>
                    <div className={styles.slider__dotScroll}>
                        <div className={styles.dots}>
                            {slides.map((_, i) => (
                                <span
                                    key={i}
                                    className={classNames(styles.dot, { [styles.activeDot]: i === activeIndex })}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.slider__text}>
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

                    <div className={styles.slider__image}>
                        {slides.map((slide, i) => {
                            const isActive = i === activeIndex;
                            const level =
                                (i - activeIndex + slides.length) % slides.length;

                            return (
                                <div
                                    key={i}
                                    className={classNames(
                                        styles.imageWrapper,
                                        {
                                            [styles.activeImage]: isActive,
                                            [styles.inactiveImage]: !isActive,
                                            [styles.level1]: level === 1,
                                            [styles.level2]: level === 2,
                                        }
                                    )}
                                >
                                    <Image
                                        className={styles.slider__image__pic}
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
            </GsapAnim>
        </section >
    );
};
