import { useState } from 'react';
import styles from './WorkPage.module.css';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useSyntheticDelay from '../../util/useSyntheticDelay';

interface WorkPageProps {
  categories: {
    title: string;
    coverImage: string;
    path: string;
  }[];
}

export default function WorkPage({ categories }: WorkPageProps) {
  const CategoryCard = ({
    title,
    coverImage,
  }: {
    title: string;
    coverImage: string;
  }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const canDisplayImage = useSyntheticDelay(1000);

    return (
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={styles.imageContainer}
      >
        {(canDisplayImage && isLoaded) || (
          <Skeleton className={styles.skeleton} enableAnimation={true} />
        )}
        <img
          src={coverImage}
          className={isHovering ? styles.bright : ''}
          onLoad={() => setIsLoaded(true)}
          style={canDisplayImage && isLoaded ? {} : { display: 'none' }}
        />
        <h2>{title}</h2>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Link
          key={category.title}
          to={category.path}
          style={{ textDecoration: 'none' }}
        >
          <CategoryCard
            title={category.title}
            coverImage={category.coverImage}
          />
        </Link>
      ))}
    </div>
  );
}
