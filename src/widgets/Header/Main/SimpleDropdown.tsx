'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './SimpleDropdown.module.scss';

interface LinkItem {
  label: string;
  href: string;
}

interface Props {
  links: LinkItem[];
  isActive?: boolean;
  onClose?: () => void;
}

export const SimpleDropdown = ({ links, isActive = false, onClose }: Props) => {
  const [shouldRender, setShouldRender] = useState(isActive);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false); 
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      const timeout = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timeout);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === 'opacity' && !isVisible) {
      setShouldRender(false);
      onClose?.(); 
    }
  };

  if (!shouldRender) return null;

  return (
    <div ref={dropdownRef}
      className={`${styles.dropdown} ${isVisible ? styles.active : ''}`}
      onTransitionEnd={onTransitionEnd}
    >
      {links.map((link, idx) => (
        <a key={idx} href={link.href} className={styles.link}>
          {link.label}
        </a>
      ))}
    </div>
  );
};
