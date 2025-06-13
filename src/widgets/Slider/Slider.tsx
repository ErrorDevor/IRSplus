'use client';

import styles from './Slider.module.scss';
import clsx from 'clsx'
import Image from "next/image";

export const Slider = ({ className }: { className?: string }) => {
    return (
        <section className={clsx(styles.sliderSection, className)}>
           <div className={styles.carouselWrapper}>
                <div className={styles.carouselFrame}>
                    <Image src="/images/Slider/NFF.png" alt="NFF" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/FA.png" alt="FA" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/FMSC.png" alt="FMSC" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/Unicef.png" alt="Unicef" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/OTP.png" alt="OTP" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/Rise.png" alt="Rise" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/WCK.png" alt="WCK" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/WFPUSA.png" alt="WFPUSA" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/AAH.png" alt="AAH" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/NFF.png" alt="NFF" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/FA.png" alt="FA" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/FMSC.png" alt="FMSC" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/Unicef.png" alt="Unicef" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/OTP.png" alt="OTP" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/Rise.png" alt="Rise" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/WCK.png" alt="WCK" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/WFPUSA.png" alt="WFPUSA" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                    <Image src="/images/Slider/AAH.png" alt="AAH" width={160} height={76} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.Image} />
                </div>
            </div>
        </section >
    );
};