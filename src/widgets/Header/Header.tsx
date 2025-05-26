'use client';

import { useEffect, useRef, useState } from "react";
import styles from './Header.module.scss';
import clsx from 'clsx'
import Image from "next/image";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/shared/ui/Button';
import { CircleIcon } from '@/shared/ui/CircleIcon';

import linksNav from '../../data/linksNav.json';
import linkIndustries from '@/data/linkIndastries.json';
import linkPractice from '@/data/linkPractice.json';
import { SimpleDropdown } from './Main/SimpleDropdown';
import { MegaDropdown } from './Main/MegaDropdown';

gsap.registerPlugin(ScrollTrigger);

export const Header = ({ className }: { className?: string }) => {
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const buttonMainRef = useRef<HTMLDivElement>(null);
    const buttonRegRef = useRef<HTMLDivElement>(null);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [openedDropdown, setOpenedDropdown] = useState<string | null>(null);
    const dropdownLabels = ['Refer n’ Earn', 'Practice Areas', 'Industries'];
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeDropdownLabel, setActiveDropdownLabel] = useState<string | null>(null);
    const toggleDropdown = (label: string) => {
        setActiveDropdown(prev => (prev === label ? null : label));
    };

    useEffect(() => {
        if (isBurgerOpen && menuRef.current) {
            gsap.fromTo(
                menuRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
        }
    }, [isBurgerOpen]);

    const closeMenuWithAnimation = () => {
        if (menuRef.current) {
            gsap.to(menuRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                    setTimeout(() => {
                        setIsBurgerOpen(false);
                    }, 400);
                }
            });
        }
    };

    const handleBurgerClick = () => {
        if (isBurgerOpen) {
            closeMenuWithAnimation();
        } else {
            setIsBurgerOpen(true);
        }
    };

    useEffect(() => {
        const body = document.body;

        if (isBurgerOpen) {
            body.classList.add('lock-scroll');
        } else {
            body.classList.remove('lock-scroll');
        }

        return () => {
            body.classList.remove('lock-scroll');
        };
    }, [isBurgerOpen]);

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

    /* Something Went Wrong...*/

    return (
        <header className={clsx(styles.headerSection, className)}>
            <div className={styles.headerOverlay} />

            <div className={styles.headerSection__leftSide}>
                <div ref={logoRef} className={styles.headerSection__leftSide__logo}>
                    <div className={styles.burgerWrapper}>
                        <div
                            className={clsx(styles.burger, isBurgerOpen && styles.open)}
                            onClick={handleBurgerClick}
                        >
                            <span className={styles.line}></span>
                            <span className={styles.line}></span>
                        </div>
                        {isBurgerOpen && (
                            <div ref={menuRef} className={styles.burgerMenu}>
                                <div className={styles.burgerMenuScroll}>
                                    <ul className={styles.burgerMenuNav}>
                                        {linksNav.map(({ label, href, links }, index) => {
                                            const isDropdown = ['Refer n’ Earn', 'Practice Areas', 'Industries'].includes(label);
                                            const isActive = activeDropdown === label;
                                            const isActivePage = label === 'Incentives & Credits';

                                            return (
                                                <li key={index} className={clsx(isActivePage && styles.active)} onMouseEnter={() => setActiveDropdownLabel(label)}
                                                    onMouseLeave={() => setActiveDropdownLabel(null)}>
                                                    {isDropdown ? (
                                                        <>
                                                            <div
                                                                onClick={() => toggleDropdown(label)}
                                                                className={clsx(styles.menuItem, isActive && styles.active)}
                                                            >
                                                                <a>{label}</a>
                                                            </div>

                                                            <div
                                                                className={clsx(
                                                                    label === 'Refer n’ Earn' ? styles.simpleDropdownWrapperBurger : styles.customDropdownWrapperBurger,
                                                                    isActive && styles.visible
                                                                )}
                                                            >
                                                                {label === 'Refer n’ Earn' && links?.map((link, subIndex) => (
                                                                    <a key={subIndex} href={link.href} className={styles.link}>
                                                                        {link.label}
                                                                    </a>
                                                                ))}

                                                                {label === 'Practice Areas' && (
                                                                    <div className={`${styles.dropdownContent} ${activeDropdownLabel === 'Practice Areas' ? styles.dropdownOpen : ''}`}>
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
                                                                )}

                                                                {label === 'Industries' && (
                                                                    <div className={`${styles.dropdownContent} ${activeDropdownLabel === 'Industries' ? styles.dropdownOpen : ''}`}>
                                                                        {linkIndustries.map(({ label, href, icon }, index) => (
                                                                            <a key={index} href={href} className={styles.linkItem}>
                                                                                <img src={icon} alt="" className={styles.linkItemIcon} />
                                                                                <span>{label}</span>
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <a href={href} className={styles.menuItem}>{label}</a>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className={styles.burgerMenuEndBlock}>
                                        <a className={styles.endItemCall} href="tel:+18882108870">
                                            <CircleIcon
                                                color="#E6F8AF"
                                                iconSrc="/icons/nav/call.svg"
                                                size={40}
                                                iconSize={24}
                                                borderRadius="100px"
                                            />
                                            <p>+1 888 210 8870</p>
                                        </a>

                                        <div className={styles.endItemBlock}>
                                            <a className={styles.endItem} href="https://irsplus.com/clientlogin">
                                                <CircleIcon
                                                    color="#F7F9FC"
                                                    iconSrc="/icons/nav/logout.svg"
                                                    size={40}
                                                    iconSize={24}
                                                    borderRadius="100px"
                                                />
                                                <p>Client Login</p>
                                            </a>

                                            <a className={styles.endItem} href="https://setc.irsplus.com/affiliate/login/">
                                                <CircleIcon
                                                    color="#F7F9FC"
                                                    iconSrc="/icons/nav/logout.svg"
                                                    size={40}
                                                    iconSize={24}
                                                    borderRadius="100px"
                                                />
                                                <p>Affiliate Login</p>
                                            </a>
                                        </div>

                                        <Button height="50px" text="Contact us" textSize="14px" textColor="#fff"
                                            borderRadius="18px" bg="#396CF0"
                                            padding="19px 20px"
                                            gap="9px"
                                            iconSrc="/icons/arrowUp.svg"
                                            iconPosition="right"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
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
                                                    onClose={() => {
                                                        if (openedDropdown === label) {
                                                            setOpenedDropdown(null);
                                                        }
                                                    }}
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
                        withDropdown
                        dropdownLinks={[
                            { label: "Client Login", href: "https://irsplus.com/clientlogin" },
                            { label: "Affiliate Login", href: "https://setc.irsplus.com/affiliate/login/" },
                        ]}
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