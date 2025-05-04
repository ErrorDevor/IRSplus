import { FC } from 'react';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import linkGroups from '../../data/linkGroups.json';
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { Button } from '@/shared/ui/Button';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
    const column1 = linkGroups.slice(0, 2);
    const column2 = linkGroups.slice(2, 3);
    const column3 = linkGroups.slice(3, 8);
    const column4 = linkGroups.slice(8);
    const columns = [column1, column2, column3, column4];

    return (
        <footer className={clsx(styles.footer, className)}>
            <GsapAnim animation="slide-left"
                duration={1.0}
                ease="power3.out"
                stagger={0.2}
                triggerStart="top 90%"
                targets={[
                    `[data-anim="logo"]`,
                    `[data-anim="text"]`,
                    `[data-anim="button"]`,
                    `[data-anim="links"]`
                ]}
            >
                <div className={styles.footer__leftSide}>
                    <div className={styles.footer__leftSide__top}>
                        <div data-anim="logo" className={styles.logo}>
                            <img src="/images/logoBig.svg" />
                        </div>

                        <p data-anim="text" data-opacity="0.8">Navigating ERC Compliance has never been easier</p>

                        <div data-anim="button" className={styles.button}>
                            <Button text="Contact us" textSize="14px" textColor="#fff"
                                borderRadius="18px" bg="#396CF0" iconSrc="/icons/arrowUp.svg" iconPosition="right" />
                        </div>

                        <div data-anim="links" className={styles.footer__leftSide__links}>
                            <a className={styles.link} href="https://irsplus.com/erc">ERC Resource Center</a>
                            <a className={styles.link} href="https://irsplus.com/setc">SETC</a>
                        </div>
                    </div>

                    <div className={styles.footer__leftSide__bottom}>
                        ©2025. All rights reserved.
                    </div>
                </div>
            </GsapAnim>
            <div className={styles.footer__rightSide}>
                {columns.map((columnGroups, colIndex) => (
                    <div key={colIndex} className={styles.footer__column}>
                        {columnGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className={styles.footer__group}>
                                <h4 className={styles.footer__columnTitle}>{group.title}</h4>
                                <ul className={styles.footer__links}>
                                    {group.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </footer>
    );
};
