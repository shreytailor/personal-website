import { useEffect, useState } from 'react';

export default function useSyntheticDelay(delay: number) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPassed(true);
    }, delay);
  }, [delay]);

  return passed;
}
