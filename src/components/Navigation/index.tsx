import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const Name = () => (
    <h1>
      <Link to="/">Shrey Tailor</Link>
    </h1>
  );

  const Navigation = (
    <div className={styles.container}>
      <Name />
    </div>
  );

  return Navigation;
}
