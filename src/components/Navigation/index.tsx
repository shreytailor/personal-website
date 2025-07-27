import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { getStatus } from '../../util/status';
import { useScreenWidth } from '../../util/useScreenWidth';

export default function Navigation() {
  const status = getStatus();
  const width = useScreenWidth();

  const Time = () => <p className="text-gray-700">{status.time}</p>;
  const Status = () => (
    <p
      className={`flex gap-2 rounded-lg px-3 py-2 ${styles.statusContainer} items-center`}
    >
      <span className={styles.emoji}>{status.emoji}</span>
      <span>{status.status}</span>
    </p>
  );

  const Name = () => (
    <h1 className={styles.name}>
      <Link to="/">Shrey Tailor</Link>
    </h1>
  );

  // Mobile navigation
  if (width < 650) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Name />
          <Time />
        </div>
        <Status />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="flex flex-1 gap-4">
        <Name />
        <Status />
      </div>
      <Time />
    </div>
  );
}
