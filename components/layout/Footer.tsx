import React from "react";
import Link from "next/link"; // For navigation links
import styles from "./Footer.module.scss";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Social media icons and contact icons

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Arrow Constructions</h3>
          <p className={styles.description}>
            Professional MEP subcontracting services for modern buildings.
          </p>
          <div className={styles.socialIcons}>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Services</h3>
          <ul className={styles.linksList}>
            <li>
              <Link href="/services/mechanical">Mechanical Systems</Link>
            </li>
            <li>
              <Link href="/services/electrical">Electrical Systems</Link>
            </li>
            <li>
              <Link href="/services/plumbing">Plumbing Systems</Link>
            </li>
            <li>
              <Link href="/services/maintenance">Maintenance</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Company</h3>
          <ul className={styles.linksList}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact Info</h3>
          <ul className={styles.contactList}>
            <li>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:+9613755365">03 755 365</a>
            </li>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:info@arrowlb.com">info@arrowlb.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Lebanon, Beirut, Antelias Road, bldg 202, 5th Floor</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2025 ARROW CONSTRUCTIONS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
