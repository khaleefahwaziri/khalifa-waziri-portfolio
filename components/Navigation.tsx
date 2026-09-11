"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Currently", href: "#currently" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Main navigation">
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Khalifa Waziri
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div className={styles.desktopLinks}>
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        {menuOpen && (
          <div className={styles.mobileMenu} id="mobile-navigation">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}