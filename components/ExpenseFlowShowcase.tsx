"use client";

import Image from "next/image";
import { useState } from "react";
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
    src: "/images/expense-flow/expense-breakdown.png",
    alt: "Expense Flow spending breakdown screen",
    label: "Spending breakdown",
  },
];

export default function ExpenseFlowShowcase() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const previousScreen = () => {
    setCurrentScreen((current) =>
      current === 0 ? screens.length - 1 : current - 1
    );
  };

  const nextScreen = () => {
    setCurrentScreen((current) =>
      current === screens.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.phone}>
        <Image
          src={screens[currentScreen].src}
          alt={screens[currentScreen].alt}
          fill
          sizes="(max-width: 700px) 230px, 300px"
          className={styles.screenshot}
        />
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
                onClick={() => setCurrentScreen(index)}
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