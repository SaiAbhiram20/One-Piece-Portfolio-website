import {
  SiPython, SiPostgresql, SiR, SiPandas, SiNumpy, SiScikitlearn,
  SiTensorflow, SiKeras,
  SiMysql, SiSqlite, SiMongodb, SiGit, SiGithub,
  SiDocker, SiJupyter, SiLinux,
} from 'react-icons/si';
import { FaAws, FaChartBar, FaFileExcel } from 'react-icons/fa';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import { devilFruitPowers, hakiMastery, navigationalTools } from '../../data/skillsData';
import styles from './Skills.module.css';

const iconMap = {
  SiPython, SiPostgresql, SiR, SiPandas, SiNumpy, SiScikitlearn,
  SiTensorflow, SiKeras,
  SiMysql, SiSqlite, SiMongodb, SiGit, SiGithub,
  SiDocker, SiJupyter, SiLinux,
  FaChartBar, FaFileExcel, FaAws,
};

function SkillTag({ name, icon }) {
  const Icon = iconMap[icon];
  return (
    <span className={styles.tag}>
      {Icon && <Icon className={styles.tagIcon} />}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-label="Skills">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            thematicTitle="Crew's Arsenal"
            standardTitle="Skills & Proficiency"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Devil Fruit Powers */}
          <ScrollReveal delay={0.1}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.thematicLabel}>{devilFruitPowers.thematicTitle}</span>
                <h3 className={styles.cardTitle}>{devilFruitPowers.standardTitle}</h3>
              </div>
              <p className={styles.cardDesc}>{devilFruitPowers.description}</p>
              <div className={styles.tags}>
                {devilFruitPowers.skills.map((skill) => (
                  <SkillTag key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Haki Mastery */}
          <ScrollReveal delay={0.2}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.thematicLabel}>{hakiMastery.thematicTitle}</span>
                <h3 className={styles.cardTitle}>{hakiMastery.standardTitle}</h3>
              </div>
              <p className={styles.cardDesc}>{hakiMastery.description}</p>
              {hakiMastery.categories.map((cat) => (
                <div key={cat.name} className={styles.hakiCategory}>
                  <h4 className={styles.hakiName}>
                    <span className={styles.hakiThematic}>{cat.name}</span>
                    <span className={styles.hakiStandard}>{cat.standardName}</span>
                  </h4>
                  <div className={styles.tags}>
                    {cat.skills.map((skill) => (
                      <span key={skill} className={styles.tag}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Navigational Tools */}
          <ScrollReveal delay={0.3}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.thematicLabel}>{navigationalTools.thematicTitle}</span>
                <h3 className={styles.cardTitle}>{navigationalTools.standardTitle}</h3>
              </div>
              <p className={styles.cardDesc}>{navigationalTools.description}</p>
              <div className={styles.tags}>
                {navigationalTools.skills.map((skill) => (
                  <SkillTag key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
