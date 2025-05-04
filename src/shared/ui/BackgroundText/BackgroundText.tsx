import { ReactNode } from 'react';
import styles from './BackgroundText.module.scss';

interface BackgroundTextProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundText = ({ children, className = '' }: BackgroundTextProps) => {
  return <span className={`${styles.backgroundText} ${className}`}>{children}</span>;
};
