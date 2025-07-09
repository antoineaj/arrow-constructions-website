"use client";

import { useState, useEffect } from "react";
import styles from "./CookieConsent.module.scss";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    const timestamp = localStorage.getItem("cookie-consent-timestamp");

    // Check if consent is older than 6 months (compliance requirement)
    const sixMonthsAgo = Date.now() - 6 * 30 * 24 * 60 * 60 * 1000;
    const consentTimestamp = timestamp ? parseInt(timestamp) : 0;

    if (!consent || consentTimestamp < sixMonthsAgo) {
      setShowBanner(true);
    }

    setIsLoading(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-timestamp", Date.now().toString());
    setShowBanner(false);

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("cookiesAccepted"));
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-consent-timestamp", Date.now().toString());
    setShowBanner(false);

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("cookiesDeclined"));
  };

  const handleSettings = () => {
    // Could open a modal with detailed cookie settings
    alert(
      "Cookie settings would open here. For now, you can accept or decline all cookies."
    );
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.title}>We Value Your Privacy</h3>
            <p className={styles.description}>
              We use cookies to enhance your browsing experience, provide
              personalized content, and analyze our traffic. This includes
              cookies from Google Maps for location services. By clicking
              "Accept All", you consent to our use of cookies.{" "}
              <a href="/privacy" className={styles.privacyLink}>
                Learn more in our Privacy Policy
              </a>
            </p>
          </div>
          <div className={styles.actions}>
            <button
              onClick={handleDecline}
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              Decline
            </button>
            <button
              onClick={handleSettings}
              className={`${styles.button} ${styles.buttonTertiary}`}
            >
              Settings
            </button>
            <button
              onClick={handleAccept}
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
