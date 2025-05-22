'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './MegaDropdown.module.scss';
import clsx from 'clsx';
import linkIndustries from '@/data/linkIndastries.json';
import linkPractice from '@/data/linkPractice.json';
import { CircleIcon } from '@/shared/ui/CircleIcon';

type MegaDropdownProps = {
    isActive: boolean;
    className?: string;
    type: 'practice' | 'industries';
    onClose?: () => void;
};

export const MegaDropdown = ({ isActive, className, type, onClose }: MegaDropdownProps) => {
    const [shouldRender, setShouldRender] = useState(isActive);
    const [isVisible, setIsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsVisible(false);
            }
        };

        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            setShouldRender(true);
            const timeout = setTimeout(() => setIsVisible(true), 20);
            return () => clearTimeout(timeout);
        } else {
            setIsVisible(false);
        }
    }, [isActive]);

    const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName === 'opacity' && !isVisible) {
            setShouldRender(false);
            onClose?.();
        }
    };

    if (!shouldRender) return null;

    return (
        <div ref={dropdownRef} className={`${styles.megaDropdown} ${isVisible ? styles.active : ''}`}
            onTransitionEnd={onTransitionEnd}
        >
            <div className={styles.linksBlock}>
                {type === 'practice' && (
                    <div className={styles.linksPracticeBlock}>
                        <a className={styles.linkIcon} href="https://irsplus.com/practice-areas">
                            <h1>PRACTICE AREAS</h1>
                            <div className={styles.icon}></div>
                        </a>

                        <div className={styles.linksContainer}>
                            <div className={styles.scrollBlurTop} />

                            <div className={styles.linksScrollContainer}>
                                {linkPractice.map((section, i) => (
                                    <div key={i} className={styles.linkSection}>
                                        <div className={styles.sectionHeader}>
                                            <img src={section.titleIcon} alt="" className={styles.sectionIcon} />
                                            <h3>{section.title}</h3>
                                        </div>

                                        <div className={styles.sectionLinks}>
                                            {section.links.map((link, idx) => (
                                                <a key={idx} href={link.href} className={styles.linkItem}>
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.scrollBlurBottom} />
                        </div>
                    </div>
                )}

                {type === 'industries' && (
                    <div className={styles.linksIndustriesBlock}>
                        <a className={styles.linkIcon} href="https://irsplus.com/industries">
                            <h1>INDUSTRIES WE SERVE</h1>
                            <div className={styles.icon}></div>
                        </a>

                        <div className={styles.linksContainer}>
                            <div className={styles.scrollBlurTop} />

                            <div className={styles.linksScrollContainer}>
                                {linkIndustries.map(({ label, href, icon }, index) => (
                                    <a key={index} href={href} className={styles.linkItem}>
                                        <img src={icon} alt="" className={styles.linkItemIcon} />
                                        <span>{label}</span>
                                    </a>
                                ))}
                            </div>

                            <div className={styles.scrollBlurBottom} />
                        </div>
                    </div>
                )}
            </div>

            <div className={clsx(styles.rightBlock, className)}>
                <div className={styles.rightBlock__up}>
                    <h1>COMPANY</h1>
                    <div className={styles.rightBlock__up__cards}>
                        <a className={styles.cards} href="https://irsplus.com/about-us">
                            <CircleIcon
                                color="#E6F8AF"
                                iconSrc="/icons/nav/flashOne.svg"
                                size={40}
                                iconSize={20}
                                borderRadius="6px"
                            />

                            <div className={styles.cardsText}>
                                <h3>About us</h3>
                                <p>Learn about our story and our mission statement</p>
                            </div>
                        </a>

                        <a className={styles.cards} href="https://irsplus.com/incentives-and-credits">
                            <CircleIcon
                                color="#E6F8AF"
                                iconSrc="/icons/nav/message.svg"
                                size={40}
                                iconSize={20}
                                borderRadius="6px"
                            />

                            <div className={styles.cardsText}>
                                <h3>Incentives & Credits</h3>
                                <p>Navigate the maze of tax incentives</p>
                            </div>
                        </a>

                        <a className={styles.cards} href="https://irsplus.com/irsplus-talent">
                            <CircleIcon
                                color="#E6F8AF"
                                iconSrc="/icons/nav/users.svg"
                                size={40}
                                iconSize={20}
                                borderRadius="6px"
                            />

                            <div className={styles.cardsText}>
                                <div className={styles.infoLabelBlock}>
                                    <h3>IRSplusTalent</h3>
                                    <div className={styles.infoLabel}>
                                        <p>New!</p>
                                    </div>
                                </div>

                                <p>Gain access to our hand-picked selection of the finest professionals</p>
                            </div>
                        </a>

                        <a className={styles.cards} href="https://irsplus.com/erc">
                            <CircleIcon
                                color="#E6F8AF"
                                iconSrc="/icons/nav/folder.svg"
                                size={40}
                                iconSize={18}
                                borderRadius="6px"
                            />

                            <div className={styles.cardsText}>
                                <h3>ERC Resource Center</h3>
                                <p>Get started with us for Employee Retention Credit</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={styles.rightBlock__mid}>
                    <h1>RESOURCES</h1>
                </div>

                <div className={styles.rightBlock__dn}>
                    <a className={styles.linkIcon} href="https://irsplus.com/blog">
                        <h1>Go to Guidance</h1>
                        <div className={styles.icon}></div>
                    </a>
                </div>
            </div>
        </div>
    );
};
