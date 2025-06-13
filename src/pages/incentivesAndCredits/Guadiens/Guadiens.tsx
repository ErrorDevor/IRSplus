'use client';

import styles from './Guadiens.module.scss';
import clsx from 'clsx'
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { Tag } from '@/shared/ui/Tag';
import { GradientText } from '@/shared/ui/GradientText';
import { CircleIcon } from '@/shared/ui/CircleIcon';
import { Button } from '@/shared/ui/Button';
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const Guadiens = ({ className }: { className?: string }) => {
    const isMobile = useIsMobile();

    return (
        <section className={clsx(styles.guadiensSection, className)}>
            <div className={styles.guadiensSection__wrapper}>
                <div className={styles.guadiensSection__wrapper__leftSide}>
                    <GsapAnim
                        animation="fade"
                        duration={1.0}
                        ease="power3.out"
                        stagger={0.1}
                        triggerStart="top 100%"
                        targets={[
                            `[data-anim="tag"]`,
                            `[data-anim="h1"]`,
                            `[data-anim="p"]`
                        ]}>
                        <div data-anim="tag" className={styles.guadiensSection__wrapper__leftSide__tags}>
                            <CircleIcon
                                color="#fff"
                                iconSrc="/icons/likeShapes.svg"
                                size={47}
                                iconSize={20}
                                borderRadius="50px"
                            />
                            <Tag text="Professional Guidance" colorBg="transparent" />
                        </div>

                        <div className={styles.guadiensSection__wrapper__leftSide__title}>
                            <h1 data-anim="h1">What Are the&nbsp;<GradientText>Benefits?</GradientText></h1>
                            <p data-anim="p" data-opacity="0.7">Given the intricate nature of tax regulations, seeking professional guidance is a wise move:</p>
                        </div>
                    </GsapAnim>

                    <GsapAnim
                        animation="slide-left"
                        duration={1.2}
                        ease="power2.out"
                        triggerStart="top 90%"
                        targets='[data-anim="buttonFrame"]'
                    >
                        <div data-anim="buttonFrame" className={styles.guadiensSection__wrapper__leftSide__buttonFrame}>
                            <h4>Get started with America&apos;s&nbsp;
                                <span className={styles.coloredText}>Top Rated ERC Tax Firm
                                </span>&nbsp;Today
                            </h4>
                            <Button text="Contact us" textSize="14px" textColor="#fff"
                                borderRadius="18px" bg="#396CF0" iconSrc="/icons/arrowUp.svg"
                                iconPosition="right"
                            />
                        </div>
                    </GsapAnim>
                </div>

                <div className={styles.guadiensSection__wrapper__rightSide}>
                    <div data-anim="circle" className={styles.centerCircle} />

                    <div className={styles.guadiensSection__wrapper__rightSide__upItem}>

                        <div className={styles.squareItems1}>
                            <GsapAnim
                                animation="fade"
                                duration={1.0}
                                ease="power2.out"
                                triggerStart="top 80%"
                                targets='[data-anim="item1"]'
                            >
                                <div data-anim="item1" className={styles.cardsItem}>
                                    <div className={styles.cardsItemTitle}>
                                        <CircleIcon
                                            color="#396CF0"
                                            iconSrc="/icons/profile2user.svg"
                                            size={isMobile ? 36 : 61}
                                            iconSize={isMobile ? 16 : 24}
                                            borderRadius="50px"
                                        />
                                        <h1>Tax Experts</h1>
                                    </div>

                                    <div className={styles.cardsItemTitleMobile}>
                                        <CircleIcon
                                            color="#396CF0"
                                            iconSrc="/icons/profile2user.svg"
                                            size={isMobile ? 36 : 61}
                                            iconSize={isMobile ? 16 : 24}
                                            borderRadius="50px"
                                        />
                                        <h1>Tax Experts</h1>
                                    </div>

                                    <p>We specialize in decoding complex regulations. This saves time,and money and helps prevent missed opportunities.</p>
                                </div>

                                <div className={styles.cardUnion}>
                                    <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M31.0327 5.17212C31.0327 2.31564 28.7171 0 25.8606 
                        0H5.17212C2.31564 0 0 2.31563 0 5.17212V25.8606C0 28.7171 2.31563 31.0327 5.17212 31.0327H25.8606C28.7171 31.0327 
                        31.0327 28.7171 31.0327 25.8606V5.17212ZM31.0327 65.1682C31.0327 62.3117 28.7171 59.9961 25.8606 59.9961H5.17212C2.31564 
                        59.9961 0 62.3117 0 65.1682V85.8567C0 88.7132 2.31563 91.0288 5.17212 91.0288H25.8606C28.7171 91.0288 31.0327 88.7132 
                        31.0327 85.8567V65.1682ZM31.0332 35.1702C31.0332 32.3137 33.3488 29.998 36.2053 29.998H56.8923C59.7488 29.998 62.0645 
                        27.6824 62.0645 24.8259V5.17212C62.0645 2.31564 64.3801 0 67.2366 0H87.925C90.7815 0 93.0972 2.31564 93.0972 
                        5.17212V24.8259C93.0972 27.6824 95.4128 29.998 98.2693 29.998H117.925C120.782 29.998 123.097 32.3137 123.097 
                        35.1702V55.8586C123.097 58.7151 120.782 61.0307 117.925 61.0307H98.2693C95.4128 61.0307 93.0972 63.3464 93.0972 
                        66.2029V85.8567C93.0972 88.7132 90.7815 91.0288 87.925 91.0288H67.238C64.3815 91.0288 62.0659 93.3444 62.0659 
                        96.2009V115.857C62.0659 118.713 59.7503 121.029 56.8938 121.029H36.2053C33.3488 121.029 31.0332 118.713 31.0332 
                        115.857V95.1682C31.0332 92.3117 33.3488 89.9961 36.2053 89.9961H56.8923C59.7488 89.9961 62.0645 87.6805 62.0645 
                        84.824V66.2029C62.0645 63.3464 59.7488 61.0307 56.8923 61.0307H36.2053C33.3488 61.0307 31.0332 58.7151 31.0332 
                        55.8586V35.1702ZM62.0659 36.2048C62.0659 33.3483 64.3815 31.0327 67.238 31.0327H86.8923C89.7488 31.0327 92.0645 
                        33.3483 92.0645 36.2048V54.824C92.0645 57.6805 89.7488 59.9961 86.8923 59.9961H67.238C64.3815 59.9961 62.0659 
                        57.6805 62.0659 54.824V36.2048ZM124.132 98.2698C124.132 95.4133 121.817 93.0977 118.96 93.0977H98.2717C95.4152 
                        93.0977 93.0996 95.4133 93.0996 98.2698V118.958C93.0996 121.815 95.4152 124.13 98.2717 124.13H118.96C121.817 
                        124.13 124.132 121.815 124.132 118.958V98.2698Z" fill="#2459DF" />
                                    </svg>
                                </div>
                            </GsapAnim>
                        </div>

                        <div className={styles.squareItems2}>
                            <GsapAnim animation="corner-right-up" duration={1.0} ease="power2.out" triggerStart="top 80%" targets='[data-anim="item2"]'>
                                <div data-anim="item2" className={styles.cardsImagePlaceholder}>
                                    <div className={styles.cardsImagePlaceholder__image}></div>
                                    <div className={styles.cardsImagePlaceholder__border}></div>
                                </div>
                            </GsapAnim>
                        </div>
                    </div>

                    <div className={styles.guadiensSection__wrapper__rightSide__dnItem}>

                        <div className={styles.squareItems3}>
                            <GsapAnim
                                animation="corner-left-dn"
                                duration={1.1}
                                ease="power2.out"
                                triggerStart="top 100%"
                                targets='[data-anim="item3"]'
                            >
                                <div data-anim="item3" className={clsx(styles.cardsItem, styles.cardsItemOther)}>
                                    <div className={styles.cardsItemTitle}>
                                        <CircleIcon
                                            color="#fff"
                                            iconSrc="/icons/oldPhone.svg"
                                            size={isMobile ? 36 : 61}
                                            iconSize={isMobile ? 16 : 24}
                                            borderRadius="50px"
                                        />
                                        <h1>Reducing Risks</h1>
                                    </div>

                                    <div className={styles.cardsItemTitleMobile}>
                                        <CircleIcon
                                            color="#fff"
                                            iconSrc="/icons/oldPhone.svg"
                                            size={isMobile ? 36 : 61}
                                            iconSize={isMobile ? 16 : 24}
                                            borderRadius="50px"
                                        />
                                        <h1>Reducing Risks</h1>
                                    </div>
                                    <p className={styles.cardsItemTextMobile}>The rapid adoption of cloud-based accounting benefits everyone. Businesses gain efficiency, accuracy, and flexibility, while accounting firms provide more streamlined services</p>
                                    <p className={styles.cardsItemText}>We ensure compliance with regulations, minimizing the risk of errors that could lead to penalties or missed benefits.</p>
                                </div>
                            </GsapAnim>
                        </div>

                        <div className={styles.squareItems4}>
                            <GsapAnim
                                animation="fade"
                                duration={1.0}
                                ease="power2.out"
                                triggerStart="top 90%"
                                targets='[data-anim="item1"]'
                            >
                                <div data-anim="item4" className={styles.cardsItem}>
                                    <div className={styles.cardsItemTitle}>
                                        <CircleIcon
                                            color="#396CF0"
                                            iconSrc="/icons/starWhite.svg"
                                            size={isMobile ? 36 : 61}
                                            iconSize={isMobile ? 16 : 24}
                                            borderRadius="50px"
                                        />
                                        <h1>Maximizing Benefits</h1>
                                    </div>

                                    <div className={styles.cardsItemTitleMobile}>
                                        <CircleIcon
                                            color="#396CF0"
                                            iconSrc="/icons/starWhite.svg"
                                            size={isMobile ? 36 : 61}
                                            iconSize={isMobile ? 16 : 24}
                                            borderRadius="50px"
                                        />
                                        <h1>Maximizing Benefits</h1>
                                    </div>

                                    <p>Every cent counts. Our tax professionals can help identify the incentives and credits you qualify for, ensuring you don&apos;t overlook your potential savings.</p>
                                </div>
                                <div className={styles.cardCircle}></div>
                            </GsapAnim>
                        </div>
                    </div>
                </div>
            </div>

            <GsapAnim
                animation="slide-left"
                duration={1.2}
                ease="power2.out"
                triggerStart="top 90%"
                targets={[`[data-anim="buttonFrame"]`]}
            >
                <div data-anim="buttonFrame" className={styles.buttonFrameMobile}>
                    <h4>Get started with America&apos;s&nbsp;
                        <span className={styles.coloredText}>Top Rated ERC Tax Firm
                        </span>&nbsp;Today
                    </h4>
                    <Button text="Contact us" textSize="14px" textColor="#fff"
                        borderRadius="18px" bg="#396CF0" iconSrc="/icons/arrowUp.svg"
                        iconPosition="right"
                    />
                </div>
            </GsapAnim>
        </section>
    );
};