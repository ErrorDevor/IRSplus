'use client';

import { useEffect, useRef, useState } from "react";
import styles from './Header.module.scss';
import clsx from 'clsx'
import Image from "next/image";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/shared/ui/Button';

import linksNav from '../../data/linksNav.json';
import { SimpleDropdown } from './Main/SimpleDropdown';
import { MegaDropdown } from './Main/MegaDropdown';

gsap.registerPlugin(ScrollTrigger);

export const Header = ({ className }: { className?: string }) => {
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const buttonMainRef = useRef<HTMLDivElement>(null);
    const buttonRegRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });

            tl.to(logoRef.current, {
                opacity: 1,
            })
                .to(navRef.current, {
                    opacity: 1,
                }, "-=0.4")

                .to(buttonMainRef.current, {
                    opacity: 1,
                }, "-=0.4")
                .to(buttonRegRef.current, {
                    opacity: 1,
                }, "-=0.4");
        });

        return () => ctx.revert();
    }, []);

    const [openedDropdown, setOpenedDropdown] = useState<string | null>(null);
    const dropdownLabels = ['Refer n’ Earn', 'Practice Areas', 'Industries'];

    return (
        <header className={clsx(styles.headerSection, className)}>
            <div className={styles.headerOverlay} />

            <div className={styles.headerSection__leftSide}>
                <div ref={logoRef} className={styles.headerSection__leftSide__logo}>
                    <div className={styles.burger} >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                    <div className={styles.headerSection__leftSide__logo__logoImage}>
                        <Image
                            priority
                            src="/images/logo.png"
                            alt="Logo"
                            width={75}
                            height={30}
                        />
                    </div>
                    <div className={styles.headerSection__leftSide__logo__phoneNumber}>
                        <p>+1 424 438 7382</p>
                    </div>
                </div>

                <nav ref={navRef} className={clsx(styles.nav, className)}>
                    <ul className={styles.nav__menu}>
                        {linksNav.map(({ label, href, links }, index) => (
                            <li
                                key={index}
                                className={clsx(
                                    label === 'Incentives & Credits' && styles.active,
                                    dropdownLabels.includes(label) && openedDropdown === label && styles.active
                                )}
                            >
                                {href ? (
                                    <a href={href}>{label}</a>
                                ) : dropdownLabels.includes(label) ? (
                                    <>
                                        <button
                                            className={clsx(
                                                styles.nav__menu__dropdownTrigger,
                                                openedDropdown === label && styles.open
                                            )}
                                            onClick={() =>
                                                setOpenedDropdown(prev => (prev === label ? null : label))
                                            }
                                        >
                                            {label}
                                            <span className={styles.icon} aria-hidden="true" />
                                        </button>

                                        {label === 'Refer n’ Earn' && links && (
                                            <div className={styles.simpleDropdownWrapper}>
                                                <SimpleDropdown
                                                    links={links}
                                                    isActive={openedDropdown === label}
                                                    onClose={() => setOpenedDropdown(null)}
                                                />
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <button className={styles.nav__menu__dropdownTrigger}>
                                        {label}
                                        <span className={styles.icon} aria-hidden="true" />
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {['Practice Areas', 'Industries'].includes(openedDropdown ?? '') && (
                        <div className={styles.dropdownWrapper} key={openedDropdown}>
                            <MegaDropdown
                                isActive={true}
                                type={openedDropdown === 'Practice Areas' ? 'practice' : 'industries'}
                                onClose={() => setOpenedDropdown(null)}
                            />
                        </div>
                    )}
                </nav>
            </div>

            <div className={styles.headerSection__buttons}>
                <div ref={buttonMainRef} className={styles.headerSection__buttons__main}>
                    <Button height="50px" text="ERC" textSize="14px" textColor="#000"
                        borderRadius="18px" bg="#F3F5F8"
                        padding="19px 20px" href="https://irsplus.com/erc"
                    />
                    <Button height="50px" text="SETC" textSize="14px" textColor="#000"
                        borderRadius="18px" bg="#F3F5F8"
                        padding="19px 20px" href="https://irsplus.com/setc"
                    />
                </div>

                <div ref={buttonRegRef} className={styles.headerSection__buttons__reg}>
                    <Button height="50px" text="Log in" textSize="14px" textColor="#000"
                        borderRadius="18px" bg="#fff"
                        padding="19px 20px"
                        gap="9px"
                        iconSrc="/icons/arrowDown.svg"
                        iconPosition="right" iconSize="18px"
                    />
                    <Button height="50px" text="Contact us" textSize="14px" textColor="#fff"
                        borderRadius="18px" bg="#396CF0"
                        padding="19px 20px"
                        gap="9px"
                        iconSrc="/icons/arrowUp.svg"
                        iconPosition="right"
                    />
                </div>
            </div>
        </header>
    );
};