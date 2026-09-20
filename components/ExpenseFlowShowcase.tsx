"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ExpenseFlowShowcase.module.css";

const screens = [
  {
    src: "/images/expense-flow/expense-home.png",
    alt: "Expense Flow dashboard",
    label: "Dashboard",
  },
  {
    src: "/images/expense-flow/expense-add.png",
    alt: "Expense Flow screen for adding a new expense",
    label: "Add expense",
  },
  {
    src: "/images/expense-flow/expense-detail.png",
    alt: "Expense Flow expense detail screen",
    label: "Expense detail",
  },
  {
    src: "/images/expense-flow/expense-breakdown.png",
    alt: "Expense Flow spending breakdown screen",
    label: "Spending breakdown",
  },
  {
    src: "/images/expense-flow/expense-delete.png",
    alt: "Expense Flow expense deletion confirmation screen",
    label: "Delete expense",
  },
];

export default function ExpenseFlowShowcase() {
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
      <div className={styles.phone}>
        <div
          key={currentScreen}
          className={`${styles.slide} ${
            direction === "left" ? styles.slideFromRight : styles.slideFromLeft
          }`}
        >
          <Image
            src={screens[currentScreen].src}
            alt={screens[currentScreen].alt}
            fill
            sizes="(max-width: 700px) 220px, 270px"
            className={styles.screenshot}
            priority={currentScreen === 0}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={previousScreen}
          aria-label="Previous Expense Flow screen"
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
          aria-label="Next Expense Flow screen"
          className={styles.arrow}
        >
          →
        </button>
      </div>
    </div>
  );
}