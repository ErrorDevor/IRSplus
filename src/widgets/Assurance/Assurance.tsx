'use client';

import styles from './Assurance.module.scss';
import clsx from 'clsx'
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';
// import { CircleIcon } from '@/shared/ui/CircleIcon';
// import { Tag } from '@/shared/ui/Tag';

export const Assurance = ({ className }: { className?: string }) => {

    return (
        <section className={clsx(styles.assuranceSection, className)}>
            <GsapAnim
                animation="fade"
                duration={2.2}
                ease="power3.out"
                stagger={0.4}
                triggerStart="top 100%"
                targets={[
                    // `[data-anim="tag"]`,
                    `[data-anim="h1"]`,
                    `[data-anim="p"]`,
                    `[data-anim="slider"]`
                ]}>
                {/* <div data-anim="tag" className={styles.assuranceSection__tags}>
                    <CircleIcon
                        color="#fefefe"
                        iconSrc="/icons/likeShapes.svg"
                        size={47}
                        iconSize={20}
                        borderRadius="50px"
                    />
                    <Tag text="Assurance" colorBg="transparent" />
                </div> */}

                <div className={styles.assuranceSection__title}>
                    <h1 data-anim="h1">The IRSplus <GradientText>Process</GradientText></h1>
                    <p data-anim="p" data-opciyu="0.8">Understanding eligibility requirements and ensuring compliance
                        is key to reaping the rewards of tax incentives and credits.
                        Here’s our process:</p>
                </div>

                <div data-anim="slider" className={styles.assuranceSection__slider}>
                    <h1>Coming Soon...</h1>
                </div>
            </GsapAnim>
        </section >
    );
};
