"use client";

import styles from "./Metrics.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Metrics() {
  const metrics = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 120, suffix: "+", label: "Successful Projects" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className={styles.metricsSection}>
      <div className={styles.heading}>
        <h2>Why Choose ARROW CONSTRUCTIONS</h2>
      </div>
      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });

          return (
            <div key={index} className={styles.metricCard} ref={ref}>
              <div className={styles.value}>
                {inView ? (
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    suffix={metric.suffix}
                  />
                ) : (
                  "0"
                )}
              </div>
              <div className={styles.label}>{metric.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
