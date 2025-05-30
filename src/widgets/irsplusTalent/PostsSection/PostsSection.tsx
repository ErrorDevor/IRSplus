'use client';

import styles from './PostsSection.module.scss';
import clsx from 'clsx'
import Image from "next/image";
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { CircleIcon } from '@/shared/ui/CircleIcon';
import { GradientText } from '@/shared/ui/GradientText';
import { LabelBenefit } from '@/shared/ui/LabelBenefit';
import { Button } from '@/shared/ui/Button';

export const PostsSection = ({ className }: { className?: string }) => {
    return (
        <section className={clsx(styles.postsSection, className)}>
            <div className={styles.postsSection__leftSide}>
                <div className={styles.postsSection__leftSide__imageBlock}>
                    <GsapAnim
                        animation="fade-scale"
                        markers={false}
                        triggerStart="top 80%"
                        stagger={0.2}
                        targets={[`[data-anim="image"]`, `[data-anim="union"]`, `[data-anim="label"]`]}
                    >
                        <Image data-anim="image" className={styles.postsSection__leftSide__imageBlock__image}
                            priority
                            src="/images/Posts/postsImage.webp" alt="PostsImage"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <div data-anim="union" className={styles.postsSection__leftSide__imageBlock__union}>
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

                        <div data-anim="label" className={styles.postsSection__leftSide__imageBlock__labelBenefit}>
                            <LabelBenefit
                                text="Care about the success of our clients"
                                iconSrc="/icons/tickCircle.svg"
                                textSize="16px"
                                textColor="#01402F"
                                textWrap="normal"
                                borderRadius="75px"
                                maxWidthValue="254px"
                                bg="#E6F8AF"
                                iconColor="#fff"
                                iconSize={24}
                                iconFrameSize={49}
                            />
                        </div>
                    </GsapAnim>

                    <GsapAnim
                        animation="corner-left-up"
                        scale={0.6}
                        markers={false}
                        triggerStart="top 90%"
                        targets={[`[data-anim="cube"]`]}
                    >
                        <div data-anim="cube" className={clsx(styles.blockWithCubeWrapper, className)}>
                            <div className={styles.blockWithCubeWrapper__blockWithCube}>
                                <div className={styles.blockWithCubeWrapper__blockWithCube__bigCube}>
                                    <Image className={styles.blockWithCubeWrapper__blockWithCube__bigCube__image}
                                        priority
                                        src="/images/Posts/icon.png" alt="iconImage"
                                        width={52} height={50}
                                    />
                                    <p>Top Rated Tax Firm since 2017</p>
                                </div>

                                <div className={styles.blockWithCubeWrapper__blockWithCube__smallCube}></div>
                            </div>

                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ position: 'absolute', opacity: 0 }}
                            >
                                <path d="M0 0V30C0.00415993 8.25 9.45285 0 30 0H0Z" fill="black" />
                                <clipPath id="clipPath_flowAround" clipPathUnits="objectBoundingBox" transform="scale(0.0333333333333333)">
                                    <path d="M0 0V30C0.00415993 8.25 9.45285 0 30 0H0Z" />
                                </clipPath>
                            </svg>
                        </div>
                    </GsapAnim>
                </div>
            </div>

            <div className={styles.postsSection__rightSide}>
                <GsapAnim
                    animation="fade-scale"
                    markers={false}
                    triggerStart="top 100%"
                    stagger={0.2}
                    targets={[`[data-anim="h1"]`, `[data-anim="p"]`, `[data-anim="card"]`, `[data-anim="button"]`]}
                >
                    <h1 data-anim="h1">Your Ticket to <GradientText>Unprecedented</GradientText> Heights</h1>
                    <p data-anim="p">At IRSplus, we recognize that the prowess of a tax firm hinges on the caliber of its experts. That is why we have put together an elite team of industry-leading professionals that are ideally positioned to support U.S tax firms toward unparalleled success. </p>

                    <div data-anim="card" className={styles.postsSection__rightSide__card}>
                        <CircleIcon
                            color="#E6F8AF"
                            iconSrc="/icons/users.svg"
                            size={36}
                            iconSize={18}
                            borderRadius="6.43px"
                        />
                        <p>With IRSplusTalent, you gain access to a handpicked selection of the finest professionals, meticulously chosen to seamlessly integrate into the fabric of your U.S. business.</p>
                    </div>
                    <div data-anim="button" className={styles.postsSection__rightSide__button}>
                        <Button text="Get In Touch Today" textSize="14px" textColor="#fff"
                            borderRadius="18px" bg="#396CF0" iconSrc="/icons/arrowUp.svg"
                            iconPosition="right" href="https://irsplus.com/erc"
                        />
                    </div>
                </GsapAnim>
            </div>
        </section>
    );
};
