import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
