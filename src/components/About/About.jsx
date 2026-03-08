import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import { summary, education, certifications, languages } from '../../data/resumeData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-label="About Me">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src="/thousand-sunny.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>

      <div className="container">
        <ScrollReveal>
          <SectionHeading
            thematicTitle="Captain's Log"
            standardTitle="About Me"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.1}>
            <div className={styles.logbook}>
              <div className={styles.logbookHeader}>
                <span className={styles.logDate}>Log Entry</span>
              </div>
              <p className={styles.intro}>
                Like any great pirate seeking the One Piece, I&apos;m driven by the thrill of
                discovering hidden patterns in data and conquering complex analytical challenges.
              </p>
              <p className={styles.summaryText}>{summary}</p>

              <div className={styles.values}>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>&#9813;</span>
                  <div>
                    <h4>Ambition</h4>
                    <p>Pursuing mastery in data analytics and machine learning</p>
                  </div>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>&#9734;</span>
                  <div>
                    <h4>Nakama (Teamwork)</h4>
                    <p>Cross-functional collaboration that drives real results</p>
                  </div>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>&#9881;</span>
                  <div>
                    <h4>Adaptability</h4>
                    <p>From ETL pipelines to neural networks — ready for any challenge</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.sidebar}>
            <ScrollReveal delay={0.2}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Education</h3>
                {education.map((edu, i) => (
                  <div key={i} className={styles.eduItem}>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                    <p className={styles.eduSchool}>{edu.school}</p>
                    <p className={styles.eduDates}>{edu.dates}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Certifications</h3>
                <ul className={styles.certList}>
                  {certifications.map((cert, i) => (
                    <li key={i} className={styles.certItem}>
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.certLink}
                      >
                        {cert.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Languages</h3>
                <div className={styles.langList}>
                  {languages.map((lang, i) => (
                    <span key={i} className={styles.langTag}>
                      {lang.language} — {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
