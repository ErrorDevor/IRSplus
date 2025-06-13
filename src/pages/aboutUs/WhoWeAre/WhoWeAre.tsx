"use client";

import styles from "./WhoWeAre.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { CircleIcon } from "@/shared/ui/CircleIcon";
import { Tag } from "@/shared/ui/Tag";

export const WhoWeAre = ({ className }: { className?: string }) => {
  return (
    <section className={clsx(styles.whoWeAreSection, className)}>
      <div className={styles.whoWeAreSection__wrapper}>
        <Image
          src="/images/IRSplusAboutUs/WhoWeAre/WhoWeAreImage.webp"
          alt="WhoWeAreImage"
          priority
          className={styles.whoWeAreSection__image}
          fill
        />
        <div
          data-anim="overlay"
          className={styles.whoWeAreSection__overlay}
        ></div>

        <div className={clsx(styles.innerBlock, className)}>
          <div className={styles.innerBlock__tagBlock}>
            <CircleIcon
              color="#fff"
              iconSrc="/icons/flashOne.svg"
              size={47}
              iconSize={20}
              borderRadius="50px"
            />
            <Tag
              text="who we are"
              colorBg="transparent"
              colorText="#fff"
              colorBorder="rgba(255, 255, 255, 0.5)"
            />
          </div>

          <div className={styles.innerBlock__textBlock}>
            <h1>
              The Nation's <span className={styles.coloredText}>Top</span>{" "}
              ERC Firm{" "}
              <span className={styles.underlineAccent}>At Your Service</span>
            </h1>

            <div className={styles.innerBlock__textBlock__subtitle}>
              <h4>
                IRSplus is the country’s leading expert in Employee Retention
                Credit. Our firm specializes in making your ERC 100% Risk Free
                Guaranteeing your ERC, while also strategically maximizing your
                ERC amount for small and medium sized businesses.
              </h4>
              <div className={styles.innerBlock__textBlock__subtitle__text}>
                <p>
                  We handle all the hard stuff, letting you focus on getting
                  back to doing what you do best, while we do what we do best.
                  Built on the core values of commitment to the customer,
                  continuous improvement, and integrity, we are here to take all
                  the guesswork out of maximizing your ERC. We provide the most
                  advanced, value-for-money ERC assessment to small business
                  owners across the United States.
                </p>
                <p>
                  <strong>
                    Get in touch with us now, file fast, and receive ERC money
                    for up to 6 quarters. Depending on your qualifications and
                    applicable government orders.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.textBlockMobile, className)}>
        <h4>
          IRSplus is the country’s leading expert in Employee Retention Credit.
          Our firm specializes in making your ERC 100% Risk Free Guaranteeing
          your ERC, while also strategically maximizing your ERC amount for
          small and medium sized businesses.
        </h4>

        <div className={styles.textBlockMobile__text}>
          <p>
            We handle all the hard stuff, letting you focus on getting back to
            doing what you do best, while we do what we do best. Built on the
            core values of commitment to the customer, continuous improvement,
            and integrity, we are here to take all the guesswork out of
            maximizing your ERC. We provide the most advanced, value-for-money
            ERC assessment to small business owners across the United States.
          </p>
          <p>
            <strong>
              Get in touch with us now, file fast, and receive ERC money for up
              to 6 quarters. Depending on your qualifications and applicable
              government orders.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};
