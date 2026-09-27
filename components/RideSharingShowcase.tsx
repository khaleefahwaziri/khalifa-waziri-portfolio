"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./RideSharingShowcase.module.css";

const screens = [
  {
    src: "/images/ride-sharing/ride-dashboard.png",
    alt: "Ride-Sharing driver dashboard",
    label: "Driver dashboard",
  },
  {
    src: "/images/ride-sharing/ride-post.png",
    alt: "Ride-Sharing ride posting screen",
    label: "Post a ride",
  },
  {
    src: "/images/ride-sharing/ride-listings.png",
    alt: "Ride-Sharing ride listings screen",
    label: "Ride listings",
  },
  {
    src: "/images/ride-sharing/myvehicles.png",
    alt: "Ride-Sharing vehicle management screen",
    label: "My vehicles",
  },
  {
    src: "/images/ride-sharing/newdriverregistration.png",
    alt: "Ride-Sharing new driver registration screen",
    label: "Driver registration",
  },
];

export default function RideSharingShowcase() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [showHint, setShowHint] = useState(false);

  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showcase = showcaseRef.current;

    if (!showcase) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHint(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(showcase);

    return () => observer.disconnect();
  }, []);

  const previousScreen = () => {
    setDirection("right");

    setCurrentScreen((current) =>
      current === 0 ? screens.length - 1 : current - 1
    );
  };

  const nextScreen = () => {
    setDirection("left");

    setCurrentScreen((current) =>
      current === screens.length - 1 ? 0 : current + 1
    );
  };

  const selectScreen = (index: number) => {
    if (index === currentScreen) return;

    setDirection(index > currentScreen ? "left" : "right");
    setCurrentScreen(index);
  };

  return (
    <div
      ref={showcaseRef}
      className={`${styles.showcase} ${showHint ? styles.showHint : ""}`}
    >
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <div className={styles.browserDots} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <span>Ride-Sharing Platform</span>
        </div>

        <div className={styles.screen}>
          <div
            key={currentScreen}
            className={`${styles.slide} ${
              direction === "left"
                ? styles.slideFromRight
                : styles.slideFromLeft
            }`}
          >
            <Image
              src={screens[currentScreen].src}
              alt={screens[currentScreen].alt}
              fill
              sizes="(max-width: 700px) 92vw, 700px"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={previousScreen}
          aria-label="Previous Ride-Sharing screen"
          className={styles.arrow}
        >
          ←
        </button>

        <div className={styles.screenInformation}>
          <span>{screens[currentScreen].label}</span>

          <div className={styles.dots}>
            {screens.map((screen, index) => (
              <button
                key={screen.src}
                type="button"
                onClick={() => selectScreen(index)}
                aria-label={`Show ${screen.label}`}
                aria-current={currentScreen === index ? "true" : undefined}
                className={
                  currentScreen === index
                    ? `${styles.dot} ${styles.activeDot}`
                    : styles.dot
                }
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={nextScreen}
          aria-label="Next Ride-Sharing screen"
          className={styles.arrow}
        >
          →
        </button>
      </div>
    </div>
  );
}