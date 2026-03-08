import { motion } from 'motion/react';
import { personalInfo } from '../../data/resumeData';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.ocean}>
        <div className={styles.wave} />
        <div className={styles.wave2} />
      </div>

      <div className={styles.content}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Setting Sail for New Horizons
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a
            href={personalInfo.resumeUrl}
            className={styles.btnPrimary}
            download
            aria-label="Download Resume"
          >
            View Wanted Poster
          </a>
          <a href="#about" className={styles.btnSecondary}>
            Chart the Course
          </a>
        </motion.div>
      </div>
    </section>
  );
}
