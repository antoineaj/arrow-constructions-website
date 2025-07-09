import Link from "next/link";
import styles from "./not-found.module.scss";

export const metadata = {
  title: "404 - Page Not Found | Arrow Constructions",
  description: "The page you're looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Sorry, we couldn't find the page you're looking for. The page may have
          been moved, deleted, or you may have entered an incorrect URL.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Go Home
          </Link>
          <Link href="/projects" className={styles.projectsButton}>
            View Projects
          </Link>
        </div>
        <div className={styles.helpText}>
          <p>
            Need help?{" "}
            <Link href="/contact" className={styles.contactLink}>
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
