import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { pathname } = useLocation();

  const Name = () => (
    <h1>
      <Link to="/">Shrey Tailor</Link>
    </h1>
  );

  const Links = () => (
    <ul>
      <li>
        <Link to="/" className={pathname === '/' ? styles.underline : ''}>
          Work
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={pathname === '/contact' ? styles.underline : ''}
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  const Navigation = (
    <div className={styles.container}>
      <Name />
    </div>
  );

  return Navigation;
}
