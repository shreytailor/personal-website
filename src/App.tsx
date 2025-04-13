import Navigation from './components/Navigation';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get('page');

    if (page) {
      navigate(`/${page}`, { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <div className={styles.container}>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
