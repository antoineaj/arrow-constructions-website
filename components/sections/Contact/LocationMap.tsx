"use client";

import { useState, useEffect } from "react";
import styles from "./LocationMap.module.scss";

export default function LocationMap() {
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored consent
    const consent = localStorage.getItem('cookie-consent');
    const mapsConsent = localStorage.getItem('maps-consent');
    
    if (consent === 'accepted' || mapsConsent === 'accepted') {
      setShowMap(true);
    }
    setIsLoading(false);

    // Listen for cookie acceptance events
    const handleCookiesAccepted = () => {
      setShowMap(true);
    };

    window.addEventListener('cookiesAccepted', handleCookiesAccepted);
    
    return () => {
      window.removeEventListener('cookiesAccepted', handleCookiesAccepted);
    };
  }, []);

  const handleLoadMap = () => {
    setShowMap(true);
    // Store consent for maps specifically
    localStorage.setItem('maps-consent', 'accepted');
  };

  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Find Us</h2>
          <p className={styles.subtitle}>
            Located in the heart of Lebanon for easy access
          </p>
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.mapWrapper}>
            {isLoading ? (
              <div className={styles.mapPlaceholder}>
                <div className={styles.placeholderContent}>
                  <div className={styles.locationIcon}>⏳</div>
                  <h3 className={styles.placeholderTitle}>Loading...</h3>
                  <p className={styles.placeholderText}>
                    Checking cookie preferences...
                  </p>
                </div>
              </div>
            ) : showMap ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3310.881644904508!2d35.587745675710764!3d33.91844557320769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU1JzA2LjQiTiAzNcKwMzUnMjUuMiJF!5e0!3m2!1sen!2slb!4v1751633162104!5m2!1sen!2slb"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arrow Constructions Location"
              />
            ) : (
              <div className={styles.mapPlaceholder}>
                <div className={styles.placeholderContent}>
                  <div className={styles.locationIcon}>📍</div>
                  <h3 className={styles.placeholderTitle}>Interactive Map</h3>
                  <p className={styles.placeholderText}>
                    To view our location on Google Maps, please accept cookies. 
                    This will load Google Maps which uses cookies to provide location services.
                  </p>
                  <div className={styles.addressInfo}>
                    <h4>Our Address:</h4>
                    <p>Lebanon<br />
                    Coordinates: 33°55'06.4"N 35°35'25.2"E</p>
                  </div>
                  <button 
                    onClick={handleLoadMap}
                    className={styles.loadMapButton}
                  >
                    Load Interactive Map
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
