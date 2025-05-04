'use client';

import styles from './Here.module.scss';
import clsx from 'clsx'
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';
import { Button } from '@/shared/ui/Button';
import { MarqueeItem } from '@/shared/ui/Marquee';

const marqueeItems = [
    { iconSrc: "/icons/coin.svg", text: "Qualifications Process" },
    { iconSrc: "/icons/coin.svg", text: "Calculations" },
    { iconSrc: "/icons/coin.svg", text: "Filing the ERC" },
    { iconSrc: "/icons/users.svg", text: "Audit Protection in Writing" },
    { iconSrc: "/icons/coin.svg", text: "Get field within 48 hours" },
    { iconSrc: "/icons/coin.svg", text: "Data security & customer care" },
];

export const Here = ({ className }: { className?: string }) => {

    return (
        <section className={clsx(styles.hereSection, className)}>
            <GsapAnim animation="fade"
                duration={1.8}
                ease="power3.out"
                triggerStart="top 100%"
                stagger={0.2}
                targets={[
                    `[data-anim="title"]`,
                    `[data-anim="title1"]`,
                    `[data-anim="text"]`,
                    `[data-anim="win"]`,
                    `[data-anim="marquee"]`
                ]}
            >
                <div className={styles.hereSection__textBlock}>
                    <h1 data-anim="title">Understanding</h1>
                    <h1 data-anim="title1">the Tax <GradientText>Landscape</GradientText></h1>
                    <p data-anim="text" data-opacity="0.7">Tax regulations often feel like a complex maze, especially when it comes to incentives and credits. While the complexity can feel troublesome, the reward is very much worth it in this case. That is why a trusted partner, with a solid understanding of tax codes and their implications is a must. </p>
                </div>

                <div data-anim="win" className={styles.hereSection__window}>
                    <div className={styles.hereSection__window__wrapper}>
                        <h3>IRSplus offers a wide range of services</h3>
                        <p>We help business owners shed light on the incentives that are available and help them qualify.</p>
                        <div className={styles.hereSection__window__wrapper__circle}>
                        </div>

                    </div>
                    <GsapAnim animation="fade"
                        duration={2.0}
                        ease="power2.out"
                        triggerStart="top 100%"
                        targets={[
                            `[data-anim="button"]`
                        ]}
                    >
                        <div data-anim="button" className={styles.button}>
                            <Button text="Talk to Specialist" textSize="14px" textColor="#396CF0"
                                borderRadius="18px" bg="#fff" iconSrc="/icons/messages.svg"
                                iconPosition="left" iconSize="18px" />
                        </div>
                    </GsapAnim>
                </div>

                <div data-anim="marquee" data-opacity="0.1" className={styles.marqueeBackground}>
                    <MarqueeItem items={marqueeItems} />
                </div>
            </GsapAnim>
        </section>
    );
};