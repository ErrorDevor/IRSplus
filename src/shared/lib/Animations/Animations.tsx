'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from 'classnames';

gsap.registerPlugin(ScrollTrigger);

const useAnim = true;

type AnimationType =
  | 'fade'
  | 'fade-only'
  | 'scale-only'
  | 'fade-scale'
  | 'slide-left'
  | 'slide-right'
  | 'slide-top'
  | 'slide-bottom'
  | 'corner-right-up'
  | 'corner-right-dn'
  | 'corner-left-up'
  | 'corner-left-dn';

type FromVars = {
  opacity: number;
  x?: number;
  y?: number;
  scale?: number;
};

interface GsapAnimProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  ease?: string;
  stagger?: number;
  triggerStart?: string;
  end?: string;
  className?: string;
  targets?: string | string[];
  reverseOnLeave?: boolean;
  delay?: number;
  once?: boolean;
  x?: number;
  y?: number;
  scale?: number;
  markers?: boolean;
}

export const GsapAnim = ({
  children,
  animation = 'fade',
  duration = 1,
  ease = 'power3.out',
  stagger = 0,
  triggerStart = 'top 90%',
  end = 'bottom top',
  className,
  targets,
  reverseOnLeave = true,
  delay,
  once = false,
  x,
  y,
  scale,
  markers,
}: GsapAnimProps) => {
  const el = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!el.current || !targets) return;

    const fromVars: FromVars = { opacity: 0 };

    switch (animation) {
      case 'fade':
        fromVars.scale = 0.95;
        break;
      case 'fade-only':
        break;
      case 'scale-only':
        fromVars.opacity = 1;
        fromVars.scale = 0.8;
        break;
      case 'fade-scale':
        fromVars.opacity = 0;
        fromVars.scale = 0.8;
        break;
      case 'slide-left':
        fromVars.x = -100;
        fromVars.scale = 0.95;
        break;
      case 'slide-right':
        fromVars.x = 100;
        fromVars.scale = 0.95;
        break;
      case 'slide-top':
        fromVars.y = -100;
        fromVars.scale = 0.95;
        break;
      case 'slide-bottom':
        fromVars.y = 100;
        fromVars.scale = 0.95;
        break;
      case 'corner-right-up':
        fromVars.x = 100;
        fromVars.y = -100;
        break;
      case 'corner-right-dn':
        fromVars.x = 100;
        fromVars.y = 100;
        break;
      case 'corner-left-up':
        fromVars.x = -100;
        fromVars.y = -100;
        break;
      case 'corner-left-dn':
        fromVars.x = -100;
        fromVars.y = 100;
        break;
    }
    
    if (x !== undefined) fromVars.x = x;
    if (y !== undefined) fromVars.y = y;
    if (scale !== undefined) fromVars.scale = scale;

    const targetsArray = Array.isArray(targets) ? targets : [targets];
    const elements = targetsArray
      .map(selector => Array.from(el.current!.querySelectorAll(selector)))
      .flat()
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (!elements.length) return;

    if (!useAnim) {
      elements.forEach(el => {
        const customOpacity = el.getAttribute('data-opacity');
        el.style.opacity = customOpacity ?? '1';
        el.style.transform = 'none';
      });
      return;
    }

    const triggers: ScrollTrigger[] = [];

    elements.forEach((element, index) => {
      const customOpacity = element.getAttribute('data-opacity');
      const toOpacity = customOpacity ? parseFloat(customOpacity) : 1;
      const wasAnimated = element.getAttribute('data-animated') === 'true';

      if (once && wasAnimated) {
        element.style.opacity = `${toOpacity}`;
        element.style.transform = 'none';
        return;
      }

      gsap.set(element, fromVars);

      const anim = gsap.to(element, {
        opacity: toOpacity,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        ease,
        delay: (delay ?? 0) + stagger * index,
        paused: true,
        onComplete: () => {
          element.setAttribute('data-animated', 'true');
          element.style.opacity = `${toOpacity}`;
          element.style.transform = 'none';
        },
      });

      const trigger = ScrollTrigger.create({
        trigger: element,
        start: triggerStart,
        end,
        once: once || !reverseOnLeave,
        onEnter: () => anim.play(),
        onLeave: () => {
          if (!once && reverseOnLeave) anim.reverse();
        },
        onEnterBack: () => {
          if (!once) anim.play();
        },
        onLeaveBack: () => {
          if (!once && reverseOnLeave) anim.reverse();
        },
        markers,
      });

      triggers.push(trigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [animation, duration, ease, triggerStart, end, targets, stagger, reverseOnLeave, once, delay, x, y, scale, markers]);

  return (
    <div ref={el} className={cn(className)} style={{ display: 'contents' }}>
      {children}
    </div>
  );
};
