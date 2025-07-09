import styles from './privacy.module.scss';

export const metadata = {
  title: "Privacy Policy | Arrow Constructions",
  description: "Learn about how Arrow Constructions collects, uses, and protects your personal information and cookies."
};

export default function PrivacyPage() {
  return (
    <main className={styles.privacyPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Cookie Policy</h2>
            <p>
              Arrow Constructions uses cookies to enhance your browsing experience and provide 
              personalized services. This policy explains what cookies are, how we use them, 
              and your choices regarding cookies.
            </p>
            
            <h3>What Are Cookies</h3>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us recognize your device and store information about your preferences.
            </p>

            <h3>Types of Cookies We Use</h3>
            <div className={styles.cookieTypes}>
              <div className={styles.cookieType}>
                <h4>Essential Cookies</h4>
                <p>
                  These cookies are necessary for the website to function properly. They enable 
                  basic features like page navigation and access to secure areas.
                </p>
              </div>
              
              <div className={styles.cookieType}>
                <h4>Google Maps Cookies</h4>
                <p>
                  When you choose to view our interactive map, Google Maps may set cookies to 
                  provide location services and remember your map preferences.
                </p>
              </div>
              
              <div className={styles.cookieType}>
                <h4>Preference Cookies</h4>
                <p>
                  These cookies remember your choices and preferences to provide a more 
                  personalized experience on future visits.
                </p>
              </div>
            </div>

            <h3>Your Cookie Choices</h3>
            <p>
              You can control cookies through our cookie consent banner that appears when you 
              first visit our site. You can:
            </p>
            <ul>
              <li>Accept all cookies</li>
              <li>Decline non-essential cookies</li>
              <li>Manage your preferences through your browser settings</li>
            </ul>

            <h3>Third-Party Services</h3>
            <p>
              Our website may include content from third-party services such as Google Maps. 
              These services may set their own cookies. We recommend reviewing their privacy 
              policies for more information about their cookie practices.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Fill out our contact form</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Interact with our website</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us through our contact form or email.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
