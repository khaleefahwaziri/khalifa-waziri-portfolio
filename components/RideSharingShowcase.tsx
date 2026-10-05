"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./RideSharingShowcase.module.css";

const screens = [
  {
    src: "/images/ride-sharing/ride-dashboard.png",
    alt: "Ride-Sharing driver dashboard",
    label: "Driver dashboard",
    imageClass: "dashboard",
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

const REPEAT_COUNT = 7;

const repeatedScreens = Array.from(
  { length: REPEAT_COUNT },
  (_, groupIndex) =>
    screens.map((screen, screenIndex) => ({
      ...screen,
      screenIndex,
      key: `${groupIndex}-${screenIndex}`,
    }))
).flat();

const MIDDLE_GROUP = Math.floor(REPEAT_COUNT / 2);
const START_INDEX = MIDDLE_GROUP * screens.length;

export default function RideSharingShowcase() {
  const [trackIndex, setTrackIndex] = useState(START_INDEX);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
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

  const activeItem = repeatedScreens[trackIndex];
  const currentScreen = activeItem.screenIndex;

  const moveTo = (newIndex: number) => {
    if (isMoving) return;

    setTransitionEnabled(true);
    setIsMoving(true);
    setTrackIndex(newIndex);
  };

  const previousScreen = () => {
    moveTo(trackIndex - 1);
  };

  const nextScreen = () => {
    moveTo(trackIndex + 1);
  };

  const handleTransitionEnd = () => {
    setIsMoving(false);

    const lowerBoundary = screens.length * 2;
    const upperBoundary =
      repeatedScreens.length - screens.length * 2;

    if (
      trackIndex <= lowerBoundary ||
      trackIndex >= upperBoundary
    ) {
      const equivalentMiddleIndex =
        START_INDEX + currentScreen;

      setTransitionEnabled(false);
      setTrackIndex(equivalentMiddleIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  const selectScreen = (screenIndex: number) => {
    if (isMoving || screenIndex === currentScreen) return;

    const currentGroup = Math.floor(
      trackIndex / screens.length
    );

    const candidates = [
      (currentGroup - 1) * screens.length + screenIndex,
      currentGroup * screens.length + screenIndex,
      (currentGroup + 1) * screens.length + screenIndex,
    ].filter(
      (index) =>
        index >= 0 && index < repeatedScreens.length
    );

    const nearestIndex = candidates.reduce(
      (nearest, candidate) => {
        return Math.abs(candidate - trackIndex) <
          Math.abs(nearest - trackIndex)
          ? candidate
          : nearest;
      }
    );

    moveTo(nearestIndex);
  };

  return (
    <div
      ref={showcaseRef}
      className={`${styles.showcase} ${
        showHint ? styles.showHint : ""
      }`}
      role="region"
      aria-label="Ride-Sharing Platform screenshots"
    >
      <div className={styles.carousel}>
        <button
          type="button"
          onClick={previousScreen}
          aria-label="Previous Ride-Sharing screen"
          className={`${styles.arrow} ${styles.leftArrow}`}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className={styles.carouselViewport}>
          <div
            className={`${styles.track} ${
              transitionEnabled ? styles.trackAnimated : ""
            }`}
            style={
              {
                "--track-index": trackIndex,
              } as React.CSSProperties
            }
            onTransitionEnd={handleTransitionEnd}
          >
            {repeatedScreens.map((screen, index) => {
              const distance = Math.abs(index - trackIndex);
              const isActive = index === trackIndex;

              return (
                <div
                  key={screen.key}
                  className={`${styles.slide} ${
                    isActive
                      ? styles.activeSlide
                      : styles.sideSlide
                  } ${
                    distance > 2 ? styles.farSlide : ""
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className={styles.browser}>
                    <div className={styles.browserBar}>
                      <div
                        className={styles.browserDots}
                        aria-hidden="true"
                      >
                        <span />
                        <span />
                        <span />
                      </div>

                      <span>Ride-Sharing Platform</span>
                    </div>

                    <div className={styles.screen}>
                      <Image
                        src={screen.src}
                        alt={isActive ? screen.alt : ""}
                        fill
                        sizes="(max-width: 700px) 82vw, 560px"
                        className={`${styles.screenshot} ${
                          screen.imageClass === "dashboard"
                            ? styles.dashboardScreenshot
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={nextScreen}
          aria-label="Next Ride-Sharing screen"
          className={`${styles.arrow} ${styles.rightArrow}`}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className={styles.screenInformation}>
        <span aria-live="polite" aria-atomic="true">
          {screens[currentScreen].label} — screen{" "}
          {currentScreen + 1} of {screens.length}
        </span>

        <div
          className={styles.dots}
          aria-label="Choose Ride-Sharing screen"
        >
          {screens.map((screen, index) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => selectScreen(index)}
              aria-label={`Show ${screen.label}, screen ${
                index + 1
              } of ${screens.length}`}
              aria-current={
                currentScreen === index ? "true" : undefined
              }
              className={
                currentScreen === index
                  ? `${styles.dot} ${styles.activeDot}`
                  : styles.dot
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}