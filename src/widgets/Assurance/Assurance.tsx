'use client';

import styles from './Assurance.module.scss';
import clsx from 'clsx'
import { GradientText } from '@/shared/ui/GradientText';

export const Assurance = ({ className }: { className?: string }) => {

    return (
        <section className={clsx(styles.assuranceSection, className)}>
            <div className={styles.assuranceSection__title}>
                <h1>The IRSplus <GradientText>Process</GradientText></h1>
                <p>Understanding eligibility requirements and ensuring compliance
                    is key to reaping the rewards of tax incentives and credits.
                    Here’s our process:</p>
            </div>

            <div className={styles.assuranceSection__slider}>
                <h1>Coming Soon...</h1>
            </div>
        </section >
    );
};
