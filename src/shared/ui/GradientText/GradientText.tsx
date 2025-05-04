import { ReactNode } from 'react';
import styles from './GradientText.module.scss';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return <span className={`${styles.gradientText} ${className}`}>{children}</span>;
};
