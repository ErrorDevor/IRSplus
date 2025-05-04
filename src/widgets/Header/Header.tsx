'use client';

import styles from './Header.module.scss';
import clsx from 'clsx'
import Image from "next/image";
import linksNav from '../../data/linksNav.json';
import { Button } from '@/shared/ui/Button';

export const Header = ({ className }: { className?: string }) => {

    return (
        <header className={clsx(styles.headerSection, className)}>
            <div className={styles.headerSection__logo}>
                <div className={styles.burger} >
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                <div className={styles.headerSection__logo__logoImage}>
                    <Image
                        priority
                        src="/images/logo.png"
                        alt="Logo"
                        width={75}
                        height={30}
                    />
                </div>
                <div className={styles.headerSection__logo__phoneNumber}>
                    <p>+1 424 438 7382</p>
                </div>
            </div>

            <nav className={clsx(styles.nav, className)}>
                <ul className={styles.nav__menu}>
                    {linksNav.map(({ label, href }, index) => (
                        <li key={index} className={clsx(label === 'Home' && styles.active)}>
                            {href ? (
                                <a href={href}>{label}</a>
                            ) : (
                                <button className={styles.nav__menu__dropdownTrigger}>
                                    {label}
                                    <span className={styles.icon} aria-hidden="true" />
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.headerSection__buttons}>
                <div className={styles.headerSection__buttons__main}>
                    <Button height="50px" text="ERC" textSize="14px" textColor="#000"
                        borderRadius="18px" bg="#F3F5F8"
                        padding="19px 20px"
                        withShadow={true} shadowColor="rgba(49, 49, 49, 0.05)"
                        shadowOffsetX="0px" shadowOffsetY="4px" shadowBlur="50px"
                    />
                    <Button height="50px" text="SETC" textSize="14px" textColor="#000"
                        borderRadius="18px" bg="#F3F5F8"
                        padding="19px 20px"
                        withShadow={true} shadowColor="rgba(49, 49, 49, 0.05)"
                        shadowOffsetX="0px" shadowOffsetY="4px" shadowBlur="50px"
                    />
                </div>
                
                <div className={styles.headerSection__buttons__reg}>
                    <Button height="50px" text="Log in" textSize="14px" textColor="#000"
                        borderRadius="18px" bg="#fff"
                        padding="19px 20px"
                        gap="9px"
                        iconSrc="/icons/arrowDown.svg"
                        iconPosition="right" iconSize="18px"
                        withShadow={true} shadowColor="rgba(49, 49, 49, 0.05)"
                        shadowOffsetX="0px" shadowOffsetY="4px" shadowBlur="50px"
                    />
                    <Button height="50px" text="Contact us" textSize="14px" textColor="#fff"
                        borderRadius="18px" bg="#396CF0"
                        padding="19px 20px"
                        gap="9px"
                        iconSrc="/icons/arrowUp.svg"
                        iconPosition="right"
                        withShadow={true} shadowColor="rgba(49, 49, 49, 0.05)"
                        shadowOffsetX="0px" shadowOffsetY="4px" shadowBlur="50px"
                    />
                </div>
            </div>
        </header>
    );
};