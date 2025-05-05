'use client';

import styles from './Challenges.module.scss';
import clsx from 'clsx'
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';
import { CircleIcon } from '@/shared/ui/CircleIcon';

const challenges = [
    {
        icon: "/icons/task.svg",
        title: "Ever Changing Rules",
        text: "Tax regulations are subject to frequent changes, making it crucial to stay-up-to-date with the latest updates to ensure you don’t miss out on valuable incentives.",
    },
    {
        icon: "/icons/clipboardText.svg",
        title: "The Fine Print",
        text: "Eligibility criteria for different incentives and credits can be intricate. Failing to meet these criteria might lead to missed opportunities or even unintentional non-compliance.",
    },
    {
        icon: "/icons/diagram.svg",
        title: "Compliance Matters",
        text: "Properly claiming incentives and credits demands strict adherance to regulations. Failing to comply can result in penalties or the loss of benefits.",
    },
];

export const Challenges = ({ className }: { className?: string }) => {
    return (
        <section className={clsx(styles.challengesSection, className)}>
            <GsapAnim animation="fade"
                duration={2.2}
                ease="power3.out"
                triggerStart="top 100%"
                stagger={0.4}
                targets={[
                    `[data-anim="title"]`,
                    `[data-anim^="item-"]`
                ]}
            >
                <div data-anim="title" className={styles.challengesSection__title}>
                    <h1>Challenges Most Businesses Face with&nbsp;
                        <GradientText>Incentives & Credits</GradientText></h1>
                </div>

                <div className={styles.challengesSection__cardBlock}>
                    {challenges.map(({ icon, title, text }, index) => (
                        <div key={index} data-anim={`item-${index}`} className={styles.challengesSection__cardBlock__item}>
                            <div className={styles.challengesSection__cardBlock__item__title}><CircleIcon
                                color="#E6F8AF"
                                iconSrc={icon}
                                size={48}
                                iconSize={24}
                                borderRadius="8.5px"
                            />
                                <h1>{title}</h1>
                            </div>

                            <p>{text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.backgroundImage}>
                    <svg width="100%" viewBox="0 0 732 206" preserveAspectRatio="none" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M-39.9128 105.575L220.023 16.2251C230.266 12.7042 240.127 
                    22.5164 236.773 32.8155C218.83 87.9212 197.045 164.609 210.822 
                    162.591C230.909 159.648 447.989 -21.03 722.321 193.491"
                            stroke="url(#paint0_linear_4144_43148)" strokeWidth="30" />
                        <defs>
                            <linearGradient id="paint0_linear_4144_43148" x1="-39.1159" y1="77.5154" x2="813.43" y2="101.73" gradientUnits="userSpaceOnUse">
                                <stop offset="0.156961" stopColor="#EBFDB8" />
                                <stop offset="0.950233" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </GsapAnim>
        </section>
    );
};