import styles from './SectionHeading.module.css';

export default function SectionHeading({ thematicTitle, standardTitle }) {
  return (
    <div className={styles.heading}>
      <span className={styles.thematic}>{thematicTitle}</span>
      <h2 className={styles.standard}>{standardTitle}</h2>
    </div>
  );
}
