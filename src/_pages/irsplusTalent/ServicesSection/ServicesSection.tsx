'use client';

import { useRef, useEffect } from 'react';
import styles from './ServicesSection.module.scss';
import clsx from 'clsx'
import Image from "next/image";
import { GsapAnim } from '@/shared/lib/Animations/Animations';
import { GradientText } from '@/shared/ui/GradientText';
import { Tag } from '@/shared/ui/Tag';
import { CircleIcon } from '@/shared/ui/CircleIcon';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsArray = [
    {
        icon: "/icons/tickCircle.svg",
        title: "Tax Expertise",
        subtitle: "If your taxes are in order, everyone is happy.",
        text: "Our tax specialists possess a prefound grasp of the intricacies of U.S. tax codes. We offer strategeic planning and forge pathways for optimized financial strategies all while keeping you compliant with evolving tax regulations.",
    },
    {
        icon: "/icons/diagram.svg",
        title: "Strategic Advisory",
        subtitle: "The right strategy will allow you to move faster.",
        text: "Elevate your decision-making prowess with our advisory experts. Their knowledge is based on a strong understanding of U.S. tax detailsandcangive your firm the advantage you need to succeed in a changing market.",
    },
    {
        icon: "/icons/documentText.svg",
        title: "Audit & Assurance",
        subtitle: "Your reputation is everything. We safeguard it!",
        text: "Our meticulous audit and assurance services protect your firm's financial integrity so you can be compliant with all U.S. standards. Through a meticulous approach we enhance transparency and foster stakeholder confidence.",
    },
    {
        icon: "/icons/profile.svg",
        title: "Private Client Services",
        subtitle: "Taking care of you so you can take care of your clients.",
        text: "Your high-networth clientele deserve tailored solutions. Our private client specialists curate discreet and comprehensive strategies to safeguard and amplify their wealth within unique frameworks of U.S. regulations.",
    },
];

const teamImageArray = [
    {
        imageSrc: "/images/TeamPhoto/img1.webp",
        alt: "Team Photo Member 1"
    },
    {
        imageSrc: "/images/TeamPhoto/img2.webp",
        alt: "Team Photo Member 2"
    },
    {
        imageSrc: "/images/TeamPhoto/img3.webp",
        alt: "Team Photo Member 3"
    }
];

export const ServicesSection = ({ className }: { className?: string }) => {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    
    useEffect(() => {
        const cards = cardsRef.current;

        ScrollTrigger.batch(cards, {
            start: 'top 80%',
            onEnter: batch => {
                gsap.fromTo(
                    batch,
                    { opacity: 0, x: 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power2.out',
                    }
                );
            },
            onLeave: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    x: 50,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.in',
                });
            },
            onEnterBack: batch => {
                gsap.fromTo(
                    batch,
                    { opacity: 0, x: 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power2.out',
                    }
                );
            },
            onLeaveBack: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    x: 50,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.in',
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        const circles = gsap.utils.toArray<HTMLDivElement>('.outerCircle');
    
        ScrollTrigger.batch(circles, {
            start: 'top 80%',
            onEnter: batch => {
                gsap.fromTo(
                    batch,
                    {
                        opacity: 0,
                        x: -50,
                        rotation: -180,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotation: 0,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.2,
                    }
                );
            },
            onLeave: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    x: -50,
                    rotation: -180,
                    duration: 0.8,
                    ease: 'power3.in',
                    stagger: 0.1,
                });
            },
            onEnterBack: batch => {
                gsap.fromTo(
                    batch,
                    {
                        opacity: 0,
                        x: -50,
                        rotation: -180,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotation: 0,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.2,
                    }
                );
            },
            onLeaveBack: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    x: -50,
                    rotation: -180,
                    duration: 0.8,
                    ease: 'power3.in',
                    stagger: 0.1,
                });
            },
        });
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    return (
        <div className={styles.servicesSectionWrapper}>
            <section className={clsx(styles.servicesSection, className)}>
                <div className={styles.servicesSection__upTitle}>
                    <GsapAnim
                        animation="fade-scale"
                        markers={false}
                        triggerStart="top 80%"
                        targets={[`[data-anim="title"]`]}
                    >
                        <div data-anim="title" className={styles.servicesSection__upTitle__tagsTitle}>
                            <div className={styles.servicesSection__upTitle__tagsTitle__tags}>
                                <CircleIcon
                                    color="#fff"
                                    iconSrc="/icons/flashOne.svg"
                                    size={47}
                                    iconSize={20}
                                    borderRadius="50px"
                                />
                                <Tag text="services" colorBg="transparent" />
                            </div>

                            <h1>What <GradientText>IRSplus Talent</GradientText> Does</h1>
                        </div>
                    </GsapAnim>

                    <GsapAnim
                        animation="fade-scale"
                        markers={false}
                        triggerStart="top 80%"
                        targets={[`[data-anim="team"]`]}
                    >
                        <div data-anim="team" className={styles.servicesSection__upTitle__teamBlock}>
                            <div className={styles.servicesSection__upTitle__teamBlock__teamPhotoBlock}>
                                <h3>Team of experts</h3>

                                <div className={styles.servicesSection__upTitle__teamBlock__teamPhotoBlock__teamPhoto}>
                                    {teamImageArray.map(({ imageSrc, alt }, index) => (
                                        <div key={index} className={clsx('outerCircle', styles.outerCircle, styles[`circle${index + 1}`])}>
                                            <Image className={styles.innerPhoto}
                                                src={imageSrc}
                                                alt={alt}
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h4>IRSplusTALENT spans a spectrum of critical areas, ensuring we have the perfect fit for your US Tax Firm</h4>
                        </div>
                    </GsapAnim>
                </div>

                <div className={styles.servicesSection__dnCards}>
                    {[0, 1].map(row => (
                        <div key={row} className={styles.servicesSection__dnCards__row}>
                            {cardsArray.slice(row * 2, row * 2 + 2).map(({ icon, title, subtitle, text }, i) => (
                                <div
                                    key={i + row * 2}
                                    ref={(el) => {
                                        if (el) cardsRef.current[i + row * 2] = el;
                                    }}

                                    className={styles.servicesSection__dnCards__item}
                                >
                                    <CircleIcon
                                        color="#E6F8AF"
                                        iconSrc={icon}
                                        size={50}
                                        iconSize={24}
                                        borderRadius="8.5px"
                                    />
                                    <div className={styles.servicesSection__dnCards__item__text}>
                                        <h1>{title}</h1>
                                        <h2>{subtitle}</h2>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
