"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Send Us a Message</h2>
          <p className={styles.sectionSubtitle}>
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="serviceInterest" className={styles.label}>
                Service Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select a service</option>
                <option value="construction">Construction</option>
                <option value="pre-construction">Pre-Construction</option>
                <option value="maintenance">
                  Maintenance & Facility Management
                </option>
                <option value="electrical">Electrical Services</option>
                <option value="mechanical">Mechanical Services</option>
                <option value="plumbing">Plumbing Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell us about your project requirements..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.sectionSubtitle}>
            Have questions about our services? Our team is here to help you with
            all your MEP needs.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>Phone</h3>
                <p className={styles.contactText}>+961 03 755 365</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>Email</h3>
                <p className={styles.contactText}>info@arrowlb.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>Address</h3>
                <p className={styles.contactText}>Beirut, Lebanon</p>
                <p className={styles.contactText}>Antelias Road</p>
                <p className={styles.contactText}>bldg 202, 5th Floor</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <h3 className={styles.contactTitle}>Business Hours</h3>
                <p className={styles.contactText}>
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
