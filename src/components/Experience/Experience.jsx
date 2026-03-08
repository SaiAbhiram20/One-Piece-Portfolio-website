import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import { experience } from '../../data/resumeData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`} aria-label="Work Experience">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            thematicTitle="Voyages Across the Grand Line"
            standardTitle="Professional Experience"
          />
        </ScrollReveal>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={styles.entry}>
                <div className={styles.marker}>
                  <div className={styles.dot} />
                  {i < experience.length - 1 && <div className={styles.line} />}
                </div>

                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <span className={styles.thematicRole}>{job.thematicTitle}</span>
                      <h3 className={styles.standardRole}>{job.standardTitle}</h3>
                      <p className={styles.company}>{job.company}</p>
                    </div>
                    <span className={styles.dates}>{job.dates}</span>
                  </div>

                  <ul className={styles.achievements}>
                    {job.achievements.map((item, j) => (
                      <li key={j} className={styles.achievement}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
