import { useState } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export function installNavigation(deviceType: 'mobile' | 'desktop') {
  const Name = <h1>Shrey Tailor</h1>;

  const Description = (
    <p>
      I’m a Sydney based photographer focusing on portraiture, events, product
      and real estate. Feel free to reach out for any new projects.
    </p>
  );

  const Links = (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/landscape">
        <li>Landscape</li>
      </Link>
      <Link to="/street">
        <li>Street</li>
      </Link>
      <Link to="/portrait">
        <li>Portrait</li>
      </Link>
    </ul>
  );

  const SocialIcon = (
    <a href="https://instagram.com/photosbyshrey" target="_blank">
      <img src="instagram.png" alt="Instagram logo" />
    </a>
  );
}

// Props required: expanded (boolean), enableHamburger (boolean)

export default function Navigation() {
  const { innerWidth } = window;

  /**
   * TODO: With this approach, the navigation bar is not responsive after loaded. Because whether
   * its desktop or mobile is determined at render-time. Could fix this with better logic later.
   */
  const isDesktop = innerWidth > 970;

  const [isExpanded, setIsExpanded] = useState(isDesktop ? true : false);

  return (
    <div
      className={`${styles.container} ${
        isExpanded && !isDesktop && styles.expanded
      } ${isDesktop && styles.desktopLayout}`}
    >
      <div className={styles.permanentContent}>
        <h1>Shrey Tailor</h1>
        {!isDesktop && (
          <img
            src="hamburger_menu.png"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        )}
      </div>
      {isExpanded && (
        <div className={styles.expandableContent}>
          <div>
            <p>
              I’m a Sydney based photographer focusing on portraiture, events,
              product and real estate. Feel free to reach out for any new
              projects.
            </p>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/landscape">
                <li>Landscape</li>
              </Link>
              <Link to="/street">
                <li>Street</li>
              </Link>
              <Link to="/portrait">
                <li>Portrait</li>
              </Link>
            </ul>
          </div>
          <a href="https://instagram.com/photosbyshrey" target="_blank">
            <img src="instagram.png" alt="Instagram logo" />
          </a>
        </div>
      )}
    </div>
  );
}
