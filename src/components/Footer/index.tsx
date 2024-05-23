import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const SocialIcons = () => (
    <div className={styles.socialIconContainer}>
      <a href="https://instagram.com/photosbyshrey">
        <img src="img/instagram.png" />
      </a>
      <a href="https://linkedin.com/in/shreytailor">
        <img src="img/linkedin.png" />
      </a>
    </div>
  );

  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.fishy}>🐳</p>
      <p className={styles.socialMediaLabel}>Social Media</p>
      <SocialIcons />
    </div>
  );
}
