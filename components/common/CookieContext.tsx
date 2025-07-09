"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookieContextType {
  cookiesAccepted: boolean;
  showBanner: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
  resetConsent: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}

interface CookieProviderProps {
  children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check existing consent
    const consent = localStorage.getItem('cookie-consent');
    const timestamp = localStorage.getItem('cookie-consent-timestamp');
    
    // Check if consent is older than 6 months
    const sixMonthsAgo = Date.now() - (6 * 30 * 24 * 60 * 60 * 1000);
    const consentTimestamp = timestamp ? parseInt(timestamp) : 0;
    
    if (!consent || consentTimestamp < sixMonthsAgo) {
      setShowBanner(true);
      setCookiesAccepted(false);
    } else {
      setCookiesAccepted(consent === 'accepted');
      setShowBanner(false);
    }
    
    setIsLoading(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
    setCookiesAccepted(true);
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
    setCookiesAccepted(false);
    setShowBanner(false);
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-timestamp');
    localStorage.removeItem('maps-consent');
    setCookiesAccepted(false);
    setShowBanner(true);
  };

  if (isLoading) {
    return <>{children}</>;
  }

  return (
    <CookieContext.Provider value={{
      cookiesAccepted,
      showBanner,
      acceptCookies,
      declineCookies,
      resetConsent
    }}>
      {children}
    </CookieContext.Provider>
  );
}
