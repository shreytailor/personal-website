import { useEffect, useState } from 'react';

export function useScreenWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    };
  });

  return width;
}
