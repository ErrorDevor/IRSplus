'use client';

import styles from './OurMission.module.scss';
import clsx from 'clsx'
import Image from "next/image";
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { CircleIcon } from '@/shared/ui/CircleIcon';
import { GradientText } from '@/shared/ui/GradientText';
import { LabelBenefit } from '@/shared/ui/LabelBenefit';

const labelBenefitsData = [
    {
        iconSrc: "/icons/star.svg",
        title: "Expert Guadience",
        text: "On Demand",
        bg: "#E6F8AF",
        iconColor: "#fff",
    },
    {
        iconSrc: "/icons/receiptItem.svg",
        title: "Claim Your Credits",
        text: "Fully Compliant",
        bg: "#F9FAFD",
        iconColor: "#396CF0",
    },
    {
        iconSrc: "/icons/diagram.svg",
        title: "Maximize Benefits",
        text: "For your business",
        bg: "#F9FAFD",
        iconColor: "#E6F8AF",
    },
];

export const OurMission = ({ className }: { className?: string }) => {

    return (
        <section className={clsx(styles.OurMissionSection, className)}>
            <GsapAnim animation="fade"
                duration={2.2}
                ease="power3.out"
                stagger={0.2}
                triggerStart="top 90%"
                targets={[
                    `[data-anim="left"]`,
                    `[data-anim="image"]`,
                    `[data-anim="union"]`,
                    `[data-anim^="benefit-"]`
                ]}
            >
                <div className={styles.OurMissionSection__wrapper}>
                    <div data-anim="left" className={styles.OurMissionSection__wrapper__leftSide}>
                        <h1><CircleIcon
                            color="#E6F8AF"
                            iconSrc="/icons/flashOne.svg"
                            size={39}
                            iconSize={20}
                            borderRadius="6px"
                            inline={true}
                        />Learn how to navigate
                            the maze and <GradientText>increase cash flow</GradientText> with tax
                            incentives & credits
                        </h1>
                        <p>Federal, state, and local governments in the United States strategically employ tax credits and incentives as a means to achieve a variety of economic and societal goals. These initiatives are carefully designed to encourage specific behaviors, stimulate economic growth, and foster positive outcomes for both businesses and individuals. </p>
                        <p>Businesses that leverage these investments strategically, witness both tremendous savings and additional money that can be reinvested into the business</p>
                        <p><strong>At IRSplus, we help businesses make the most of the opportunities available to them in order to save money. As strategic partners and advisors, we help you apply and qualify for credits and incentives, turning a loss into a positive cash flow.</strong></p>
                    </div>
                    <div className={styles.OurMissionSection__wrapper__rightSide}>
                        <div className={styles.OurMissionSection__wrapper__rightSide__imageBlock}>
                            <div data-anim="image" className={styles.OurMissionSection__wrapper__rightSide__imageBlock__image}>
                                <Image className={styles.ourMissionImage}
                                    priority
                                    src="/images/OurMission/ourMission.webp" alt="OurMissionImage"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div data-anim="union" className={styles.OurMissionSection__wrapper__rightSide__imageBlock__union}>
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

                            {labelBenefitsData.map((item, index) => (
                                <div key={index} data-anim={`benefit-${index}`} className={styles[`rightSideLabelBenefit${index + 1}`]}>
                                    <LabelBenefit
                                        iconSrc={item.iconSrc}
                                        title={item.title}
                                        text={item.text}
                                        bg={item.bg}
                                        iconColor={item.iconColor}
                                        titleSize="18px"
                                        titleColor="#000"
                                        textSize="14px"
                                        textColor="#000"
                                        borderRadius="62px"
                                        iconSize={20}
                                        iconFrameSize={50}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </GsapAnim>
        </section>
    );
};