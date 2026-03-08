import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeading from '../shared/SectionHeading';
import { personalInfo } from '../../data/resumeData';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '301abf95-e31c-42d9-bce8-30e4dec78e84',
          ...formData,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-label="Contact">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            thematicTitle="Den Den Mushi Transmission"
            standardTitle="Get In Touch"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.1}>
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>Let&apos;s Connect</h3>
              <p className={styles.infoText}>
                Ready to set sail on a new data adventure? Whether you have a project in mind,
                a role to discuss, or just want to talk data — drop a message through the Den Den Mushi.
              </p>

              <div className={styles.details}>
                <a href={`mailto:${personalInfo.email}`} className={styles.detailItem}>
                  <FaEnvelope className={styles.detailIcon} />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className={styles.detailItem}>
                  <FaPhone className={styles.detailIcon} />
                  <span>{personalInfo.phone}</span>
                </a>
                <div className={styles.detailItem}>
                  <FaMapMarkerAlt className={styles.detailIcon} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className={styles.socials}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download
                className={styles.resumeBtn}
                aria-label="Download Resume"
              >
                Download Wanted Poster (Resume)
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Transmission'}
              </button>

              {status === 'sent' && (
                <p className={styles.success}>Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>Something went wrong. Please try emailing directly.</p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
