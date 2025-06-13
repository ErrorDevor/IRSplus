"use client";

import styles from "./GivingBack.module.scss";
import clsx from "clsx";
import { GsapAnim } from "@/shared/lib/Animations/Animations";
import { CirclePhoto } from "@/shared/ui/CirclePhoto";
import { Button } from "@/shared/ui/Button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const GivingBack = ({ className }: { className?: string }) => {
  const isMobile = useIsMobile();
  return (
    <section className={styles.givingBackSection}>
      <div className={clsx(styles.mainWindow, className)}>
        <div className={styles.mainWindow__title}>
          <h1>Giving Back to the Planet & the People</h1>
          <p>
            We are planting a tree and providing a meal for every ERC employee
            our clients have.
          </p>
        </div>

        <div className={clsx(styles.smallWindow, className)}>
          <div className={styles.smallWindow__title}>
            <h4>our goal</h4>

            <div className={styles.smallWindow__title__subtitle}>
              <h1>10,000,000+</h1>
              <h2>Trees & Meals</h2>
            </div>
          </div>

          <GsapAnim
            animation="fade-scale"
            ease="power3.out"
            triggerStart="top 80%"
            targets={[`[data-anim="button"]`]}
          >
            <div data-anim="button" className={styles.button}>
              <Button
                text="Grow with us"
                textSize="14px"
                textColor="#fff"
                borderRadius="18px"
                bg="#396CF0"
                iconSrc="/icons/arrowUp.svg"
                iconPosition="right"
                iconSize="18px"
                href="https://irsplus.com/about-us"
              />
            </div>
          </GsapAnim>

          <div className={styles.circlePhoto4}>
            <CirclePhoto
              imageSrc="/images/IRSplusAboutUs/GivingBack/kids2.webp"
              size={isMobile ? 58 : 70}
            />
          </div>
        </div>

        <div className={styles.chessPlate}>
          <svg
            width="88"
            height="90"
            viewBox="0 0 88 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_7251_7144)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.34195 45.0391C1.04745 45.0391 -0.00195514 46.0885 -0.0019552 47.383L-0.00195598 65.2149C-0.00195603 66.5094 1.04745 67.5588 2.34195 67.5588L19.4239 67.5588C20.7184 67.5588 21.7678 68.6082 21.7678 69.9027L21.7678 86.9844C21.7678 88.2789 22.8172 89.3283 24.1117 89.3283L41.9436 89.3283C43.2381 89.3283 44.2875 88.2789 44.2875 86.9844L44.2875 69.9027C44.2875 68.6082 45.3369 67.5588 46.6314 67.5588L63.7113 67.5588C65.0058 67.5588 66.0552 66.5094 66.0552 65.2149L66.0552 47.3831C66.0552 46.0886 67.1046 45.0392 68.3991 45.0392L85.4826 45.0392C86.7771 45.0392 87.8265 43.9898 87.8265 42.6953L87.8265 24.8634C87.8265 23.5689 86.7771 22.5195 85.4826 22.5195L68.3991 22.5195C67.1046 22.5195 66.0552 21.4701 66.0552 20.1756L66.0552 2.34391C66.0552 1.04941 65.0058 2.84158e-06 63.7113 2.785e-06L45.8794 2.00554e-06C44.5849 1.94895e-06 43.5355 1.0494 43.5355 2.34391L43.5355 20.1756C43.5355 21.4701 42.4861 22.5195 41.1916 22.5195L24.8619 22.5195C23.5674 22.5195 22.518 21.4701 22.518 20.1756L22.518 2.34391C22.518 1.0494 21.4686 9.3851e-07 20.1741 8.81926e-07L2.34219 1.02469e-07C1.04768 4.58843e-08 -0.00172018 1.0494 -0.00172024 2.34391L-0.00172102 20.1758C-0.00172107 21.4703 1.04768 22.5197 2.34219 22.5197L19.4239 22.5197C20.7184 22.5197 21.7678 23.5691 21.7678 24.8636L21.7678 42.6952C21.7678 43.9897 20.7184 45.0391 19.4239 45.0391L2.34195 45.0391ZM24.8617 45.0392C23.5672 45.0392 22.5178 46.0886 22.5178 47.3831L22.5178 64.4647C22.5178 65.7592 23.5672 66.8086 24.8617 66.8086L41.1915 66.8086C42.4861 66.8086 43.5355 65.7592 43.5355 64.4647L43.5355 47.3831C43.5355 46.0886 42.4861 45.0392 41.1915 45.0392L24.8617 45.0392ZM65.3068 42.6952C65.3068 43.9897 64.2574 45.0391 62.9629 45.0391L46.6314 45.0391C45.3369 45.0391 44.2875 43.9897 44.2875 42.6952L44.2875 24.8636C44.2875 23.5691 45.3369 22.5197 46.6314 22.5197L62.9629 22.5197C64.2574 22.5197 65.3068 23.5691 65.3068 24.8636L65.3068 42.6952ZM69.9008 90.0803C68.6063 90.0803 67.5569 89.0309 67.5569 87.7364L67.5569 69.9045C67.5569 68.61 68.6063 67.5605 69.9008 67.5605L87.7327 67.5606C89.0272 67.5606 90.0766 68.61 90.0766 69.9045L90.0766 87.7364C90.0766 89.0309 89.0272 90.0803 87.7327 90.0803L69.9008 90.0803Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_7251_7144">
                <rect
                  width="90"
                  height="88"
                  fill="white"
                  transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={styles.circlePhoto1}>
          <CirclePhoto
            imageSrc="/images/IRSplusAboutUs/GivingBack/tree2.webp"
            size={isMobile ? 47 : 70}
            backgroundPosition="top"
          />
        </div>

        <div className={styles.circlePhoto2}>
          <CirclePhoto
            imageSrc="/images/IRSplusAboutUs/GivingBack/kids.webp"
            size={110}
          />
        </div>

        <div className={styles.circlePhoto3}>
          <CirclePhoto
            imageSrc="/images/IRSplusAboutUs/GivingBack/tree3.webp"
            size={isMobile ? 47 : 80}
          />
        </div>

        <div className={styles.circlePhoto5}>
          <CirclePhoto
            imageSrc="/images/IRSplusAboutUs/GivingBack/tree.webp"
            size={110}
          />
        </div>

        <div className={styles.circlePhoto6}>
          <CirclePhoto
            imageSrc="/images/IRSplusAboutUs/GivingBack/fam.webp"
            size={isMobile ? 58 : 80}
          />
        </div>
      </div>
    </section>
  );
};
