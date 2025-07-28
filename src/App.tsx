import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Confetti from 'react-confetti';

function App() {
  const hasVisited = localStorage.getItem('hasVisited');
  if (!hasVisited) {
    localStorage.setItem('hasVisited', 'true');
  }

  return (
    <div className={styles.container}>
      {!hasVisited && <Confetti recycle={false} numberOfPieces={125} />}
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
