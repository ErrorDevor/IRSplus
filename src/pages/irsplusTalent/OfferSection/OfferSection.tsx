'use client';

import { useEffect, useRef } from 'react';
import styles from './OfferSection.module.scss';
import clsx from 'clsx'
import Image from "next/image";
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';
import { LabelBenefit } from '@/shared/ui/LabelBenefit';
import { Button } from '@/shared/ui/Button';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const OfferSection = ({ className }: { className?: string }) => {
    const pathRef = useRef<SVGPathElement | null>(null);

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
                duration: 0.2,
                scrollTrigger: {
                    trigger: `.${styles.offerSection__cardsBlock__cardsRightBlock}`,
                    start: "top center",
                    end: "bottom center",             
                    scrub: 1,
                    markers: false,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={clsx(styles.offerSection, className)}>
            <GsapAnim
                animation="fade-only"
                markers={false}
                triggerStart="top 80%"
                targets={[`[data-anim="title"]`]}
            >
                <h1 data-anim="title">What <GradientText>We Offer</GradientText></h1>
            </GsapAnim>

            <div className={styles.offerSection__cardsBlock}>
                <GsapAnim
                    animation="slide-bottom"
                    markers={false}
                    triggerStart="top 80%"
                    targets={[`[data-anim="card-left"]`]}
                >
                    <div data-anim="card-left" className={styles.offerSection__cardsBlock__cardLeft}>
                        <div className={styles.offerSection__cardsBlock__cardLeft__title}>
                            <h2>IRSplusTalent is about teamwork and synergy</h2>
                            <p>With the right team by your side, you will be ready for any challenge, equipped to seize opportunities, and empowered to achieve your goals. Let us be your partner in success.</p>
                        </div>

                        <div className={styles.offerSection__cardsBlock__cardLeft__imageBlock}>
                            <Image className={styles.offerSection__cardsBlock__cardLeft__imageBlock__image}
                                priority
                                src="/images/IRSplusTalent/Offer/mockup.webp" alt="OfferImage"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            <div className={styles.union}>
                                <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.0964 4.96918C26.0964 2.62982 24.1999 0.733398 21.8606 0.733398H4.91743C2.57807 0.733398 0.681641 2.62982 0.681641 4.96918V21.9123C0.681641 24.2517 2.57806 26.1481 4.91742 26.1481H21.8606C24.1999 26.1481 26.0964 24.2517 26.0964 21.9123V4.96918ZM26.0964 54.1039C26.0964 51.7646 24.1999 49.8681 21.8606 49.8681H4.91743C2.57807 49.8681 0.681641 51.7646 0.681641 54.1039V71.0471C0.681641 73.3864 2.57806 75.2828 4.91742 75.2828H21.8606C24.1999 75.2828 26.0964 73.3864 26.0964 71.0471V54.1039ZM26.0968 29.5366C26.0968 27.1972 27.9932 25.3008 30.3325 25.3008H47.275C49.6143 25.3008 51.5107 23.4043 51.5107 21.065V4.96918C51.5107 2.62982 53.4072 0.733398 55.7465 0.733398H72.6897C75.029 0.733398 76.9255 2.62982 76.9255 4.96918V21.065C76.9255 23.4043 78.8219 25.3008 81.1612 25.3008H97.2582C99.5975 25.3008 101.494 27.1972 101.494 29.5365V46.4797C101.494 48.819 99.5975 50.7155 97.2582 50.7155H81.1612C78.8219 50.7155 76.9255 52.6119 76.9255 54.9513V71.0471C76.9255 73.3865 75.029 75.2829 72.6897 75.2829H55.7472C53.4078 75.2829 51.5114 77.1793 51.5114 79.5187V95.6164C51.5114 97.9558 49.615 99.8522 47.2756 99.8522H30.3325C27.9931 99.8522 26.0967 97.9558 26.0967 95.6164V78.6733C26.0967 76.3339 27.9931 74.4375 30.3325 74.4375H47.275C49.6143 74.4375 51.5107 72.5411 51.5107 70.2017V54.9513C51.5107 52.6119 49.6143 50.7155 47.275 50.7155H30.3326C27.9932 50.7155 26.0968 48.8191 26.0968 46.4797V29.5366ZM51.5115 30.3839C51.5115 28.0445 53.4079 26.1481 55.7473 26.1481H71.8435C74.1828 26.1481 76.0792 28.0445 76.0792 30.3839V45.6324C76.0792 47.9717 74.1828 49.8682 71.8435 49.8682H55.7473C53.4079 49.8682 51.5115 47.9717 51.5115 45.6324V30.3839ZM102.342 81.2133C102.342 78.874 100.446 76.9775 98.1067 76.9775H81.1635C78.8242 76.9775 76.9277 78.874 76.9277 81.2133V98.1565C76.9277 100.496 78.8242 102.392 81.1635 102.392H98.1067C100.446 102.392 102.342 100.496 102.342 98.1565V81.2133Z" fill="#D0F16F" />
                                </svg>
                            </div>
                        </div>

                        <GsapAnim
                            animation="fade"
                            markers={false}
                            triggerStart="top 80%"
                            targets={[`[data-anim="card-left-benefit"]`]}
                        >
                            <div data-anim="card-left-benefit" className={styles.cardLeftLabelBenefit}>
                                <LabelBenefit
                                    text="Audit Protection"
                                    iconSrc="/icons/lock.svg"
                                    textSize="20px"
                                    textColor="#000"
                                    textWrap="normal"
                                    borderRadius="62px"
                                    bg="#F9FAFD"
                                    iconColor="#396CF0"
                                    iconSize={24}
                                    iconFrameSize={49}
                                />
                            </div>
                        </GsapAnim>
                    </div>
                </GsapAnim>

                <div className={styles.offerSection__cardsBlock__cardsRightBlock}>
                    <GsapAnim
                        animation="slide-bottom"
                        markers={false}
                        triggerStart="top 80%"
                        targets={[`[data-anim="card-up"]`]}
                    >
                        <div data-anim="card-up" className={styles.offerSection__cardsBlock__cardsRightBlock__upCard}>
                            <div className={styles.offerSection__cardsBlock__cardsRightBlock__upCard__imageBlock} />
                            <div>
                                <h3>We Care for</h3>
                                <h3>Your Firm</h3>
                            </div>

                            <p>When you partner with IRSplus, you are choosing a network of steadfast support and a dedicated team to your excellence.</p>

                            <GsapAnim
                                animation="fade"
                                markers={false}
                                triggerStart="top 60%"
                                targets={[`[data-anim="card-up-benefit"]`]}
                            >
                                <div data-anim="card-up-benefit" className={styles.cardUpLabelBenefit}>
                                    <LabelBenefit
                                        text="100% Guaranteed"
                                        iconSrc="/icons/shield.svg"
                                        textSize="20px"
                                        textColor="#000"
                                        textWrap="normal"
                                        borderRadius="62px"
                                        bg="#E6F8AF"
                                        iconColor="#fff"
                                        iconSize={24}
                                        iconFrameSize={49}
                                    />
                                </div>
                            </GsapAnim>
                        </div>
                    </GsapAnim>

                    <GsapAnim
                        animation="slide-bottom"
                        markers={false}
                        triggerStart="top 90%"
                        targets={[`[data-anim="card-dn"]`, `[data-anim="button"]`]}
                    >
                        <div data-anim="card-dn" className={styles.offerSection__cardsBlock__cardsRightBlock__dnCard}>
                            <h3>Get started with America&apos;s</h3>
                            <h3>Top Rated ERC Tax Firm Today</h3>

                            <GsapAnim
                                animation="fade"
                                markers={false}
                                triggerStart="top-=200px 80%"
                                targets={[`[data-anim="button"]`]}
                            >
                                <div data-anim="button" className={styles.offerSection__cardsBlock__cardsRightBlock__dnCard__button}>
                                    <Button text="Contact us" textSize="14px" textColor="#396CF0"
                                        borderRadius="18px" bg="#fff" iconSrc="/icons/arrowUpBlue.svg"
                                        iconPosition="right"
                                    />
                                </div>
                            </GsapAnim>

                            <div className={styles.vector}>
                                <svg width="100%" height="100%" viewBox="0 0 409 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path ref={pathRef} d="M549.944 62.9537L358.8 12.0457C351.268 10.0396 344.689 17.5854 347.62 24.8079C363.306 63.4522 382.848 117.394 372.856 116.646C358.286 115.556 193.257 -3.09339 7.24796 164.866" stroke="url(#paint0_linear_4149_28591)" strokeWidth="21.5896" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4149_28591" x1="547.943" y1="42.8518" x2="-62.826" y2="103.633" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.203042" stopColor="#EBFDB8" />
                                            <stop offset="0.950233" stopColor="#88A6F6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </GsapAnim>
                </div>
            </div>
        </section >
    );
};
