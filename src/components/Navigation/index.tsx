import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { getStatus, Status } from '../../util/status';
import { useScreenWidth } from '../../util/useScreenWidth';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const width = useScreenWidth();
  const [status, setStatus] = useState<Status | undefined>();

  useEffect(() => {
    getStatus().then(setStatus);

    const updateStatus = setInterval(() => {
      getStatus().then(setStatus);
    }, 1000 * 60); // Update status every minute

    return () => clearInterval(updateStatus);
  }, []);

  const TimeTemp = status
    ? () => (
        <p className="text-gray-700">
          {status?.time} • {status?.temperature}°C
        </p>
      )
    : () => null;

  const Status = status
    ? () => (
        <p
          className={`flex gap-2 rounded-lg px-3 py-2 ${styles.statusContainer} items-center`}
        >
          <span className={styles.emoji}>{status?.emoji}</span>
          <span>{status?.status}</span>
        </p>
      )
    : () => null;

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
          <TimeTemp />
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
      <TimeTemp />
    </div>
  );
}
