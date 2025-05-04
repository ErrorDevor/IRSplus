'use client';

import styles from './TaxPartner.module.scss';
import clsx from 'clsx'
import Image from "next/image";
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { Button } from '@/shared/ui/Button';

export const TaxPartner = ({ className }: { className?: string }) => {
    return (
        <section className={clsx(styles.taxPartnerSection, className)}>
            <GsapAnim animation="fade"
                duration={2.2}
                ease="power3.out"
                stagger={0.2}
                triggerStart="top 90%"
                targets={[
                    `[data-anim="image"]`,
                    `[data-anim="overlay"]`,
                    `[data-anim="title"]`,
                    `[data-anim="text"]`,
                    `[data-anim="buttons"]`
                ]}
            >
                <div className={styles.taxPartnerSection__wrapper}>
                    <Image data-anim="image" src="/images/TaxPartner/partner.webp" alt="TaxPartnerImage"
                        priority
                        className={styles.taxPartnerSection__image} fill
                    />
                    <div data-anim="overlay" className={styles.taxPartnerSection__overlay}></div>
                    <div className={styles.taxPartnerSection__innerBlock}>
                        <div className={styles.taxPartnerSection__innerBlock__mobileText}>
                            <h1 data-anim="title">You Deserve a Tax Partner That Puts You
                                & Your Business First</h1>
                            <p data-anim="text">Discover how IRSplus Tax Firm can help your business maximize it&apos;s tax credits and achieve financial stability</p>
                        </div>
                        <div className={styles.taxPartnerSection__innerBlock__mainText}>
                            <h1 data-anim="title">Unlock Your Financial Advantages</h1>
                            <p data-anim="text">Don&apos;t let the maze of regulations hold you back — take advantage of expert assistance to unlock your financial advantages.</p>
                        </div>
                        <div data-anim="buttons" className={styles.taxPartnerSection__innerBlock__buttons}>
                            <Button text="Schedule a Discovery Call" textSize="14px" textColor="#000"
                                borderRadius="18px" bg="#fff" iconSrc="/icons/arrowUpDark.svg" iconPosition="right" href="https://irsplus.com/erc" />

                            <Button text="Call us Directly at (828) 342-3455" textSize="14px" textColor="#fff"
                                borderRadius="18px" bg="transparent" borderWidth="1.5px" borderColor="#fff" />
                        </div>
                    </div>
                </div>
            </GsapAnim>
        </section>
    );
};