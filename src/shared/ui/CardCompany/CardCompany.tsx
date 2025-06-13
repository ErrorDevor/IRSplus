import React from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "./CardCompany.module.scss";
import { CircleIcon } from '@/shared/ui/CircleIcon';

interface ReusableCardCompanyProps {
    backgroundColor?: string;
    borderRadius?: number;
    minWidth?: number;
    minHeight?: number;
    title: string;
    titleFontSize?: number;
    description: string;
    descriptionFontSize?: number;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    circleIconProps: {
        color: string;
        iconSrc: string;
        alt?: string;
        size?: number;
        iconSize?: number;
        borderRadius?: string;
        border?: number;
        borderColor?: string;
        inline?: boolean;
    };
    className?: string;
}

export const CardCompany: React.FC<ReusableCardCompanyProps> = ({
    backgroundColor = "#e5edf9",
    borderRadius = 24,
    minWidth = 163,
    minHeight = 177,
    title,
    titleFontSize = 28,
    description,
    descriptionFontSize = 16,
    imageSrc,
    imageWidth,
    imageHeight,
    circleIconProps,
    className,
}) => {
    return (
        <div
            className={clsx(styles.cardCompany, className)}
            style={{
                backgroundColor: backgroundColor,
                borderRadius: `${borderRadius}px`,
                minWidth: `${minWidth}px`,
                minHeight: `${minHeight}px`,
            }}
        >
            <div className={styles.cardCompany__text}>
                <h1 style={{ fontSize: `${titleFontSize}px` }}>{title}</h1>
                <p style={{ fontSize: `${descriptionFontSize}px` }}>{description}</p>
            </div>
            <div className={styles.cardCompany__dn}>
                <CircleIcon {...circleIconProps} />
                <div className={styles.cardCompany__dn__iconWithLogo}>
                    <div className={styles.cardCompany__dn__iconWithLogo__inner}>
                        <Image
                            className={styles.cardCompany__dn__image}
                            priority
                            src={imageSrc}
                            alt="Company Logo"
                            width={imageWidth}
                            height={imageHeight}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
