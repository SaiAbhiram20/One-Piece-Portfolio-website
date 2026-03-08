import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import { projects } from '../../data/projectsData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-label="Projects">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            thematicTitle="Treasures of the Grand Line"
            standardTitle="Projects"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`${styles.card} ${styles[project.type]}`}>
                <div className={styles.cardType}>
                  {project.type === 'poneglyph' ? '📜 Poneglyph' : '💎 Treasure'}
                </div>

                <span className={styles.thematicTitle}>{project.thematicTitle}</span>
                <h3 className={styles.title}>{project.title}</h3>

                <div className={styles.detail}>
                  <h4 className={styles.detailLabel}>Mission</h4>
                  <p className={styles.detailText}>{project.mission}</p>
                </div>

                <div className={styles.detail}>
                  <h4 className={styles.detailLabel}>Loot</h4>
                  <p className={styles.detailText}>{project.loot}</p>
                </div>

                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
