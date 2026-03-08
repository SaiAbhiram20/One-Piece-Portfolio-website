import { motion } from 'motion/react';
import { personalInfo } from '../../data/resumeData';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src="/One piece landing page.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <motion.div
          className={styles.avatarWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className={styles.avatar}
          />
        </motion.div>

        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Setting Sail for New Horizons
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href={personalInfo.resumeUrl}
            className={styles.btnPrimary}
            download
            aria-label="Download Resume"
          >
            View Wanted Poster (Resume)
          </a>
          <a href="#about" className={styles.btnSecondary}>
            Chart the Course
          </a>
        </motion.div>
      </div>
    </section>
  );
}
