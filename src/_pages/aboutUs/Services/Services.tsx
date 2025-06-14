"use client";

import styles from "./Services.module.scss";
import clsx from "clsx";
import { BackgroundText } from "@/shared/ui/BackgroundText";
import { BoxBorder } from "@/shared/ui/BoxBorder";
import { GsapAnim } from "@/shared/lib/Animations/Animations";

export const Services = ({ className }: { className?: string }) => {
  return (
    <section className={clsx(styles.servicesSection, className)}>
      <GsapAnim
        animation="fade-only"
        duration={1.0}
        ease="power3.out"
        triggerStart="top 80%"
        targets={[`[data-anim="title"]`]}
      >
        <div data-anim="title" className={styles.servicesSection__title}>
          <h1>
            We tailor our{" "}
            <BoxBorder
              fontSizeMinPx={20}
              fontSizeMaxPx={32}
              fontSizeVW={1.8}
              fontWeightMin={400}
              fontWeightMax={500}
              paddingMin={[10, 20]}
              paddingMax={[18, 36]}
              paddingVW={[1.2, 2.4]}
              borderMin={2}
              borderMax={3}
              borderVW={0.25}
            >
              services
            </BoxBorder>{" "}
            to your <BackgroundText>success</BackgroundText>&nbsp;and longevity
          </h1>
        </div>

        <div data-anim="title" className={styles.mobileTitle}>
          <h1>
            We tailor our{" "}<br />
            <BoxBorder
              fontSizeMinPx={20}
              fontSizeMaxPx={32}
              fontSizeVW={1.8}
              fontWeightMin={400}
              fontWeightMax={500}
              paddingMin={[10, 20]}
              paddingMax={[18, 36]}
              paddingVW={[1.2, 2.4]}
              borderMin={2}
              borderMax={3}
              borderVW={0.6}
            >
              services
            </BoxBorder>{" "}
            to your <br /><BackgroundText>success</BackgroundText>&nbsp;and longevity
          </h1>
        </div>

        <div className={styles.servicesSection__subtitle}>
          <p>
            What truly sets IRSplus Tax Firm apart is our unwavering dedication
            to our clients. We take the time to listen, understand your
            challenges, and develop personalized strategies that align with your
            goals. Your success is our top priority, and we are committed to
            supporting you every step of the way.
          </p>
        </div>
      </GsapAnim>
    </section>
  );
};
