import Skeleton from 'react-loading-skeleton';
import styles from './ImageCategoryPage.module.css';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import useSyntheticDelay from '../../util/useSyntheticDelay';

interface ImageCategoryPageProps {
  category: {
    title: string;
    coverImage: string;
    images: string[];
  };
}

export default function ImageCategoryPage({
  category,
}: ImageCategoryPageProps) {
  category.images.reverse();

  const { title, images } = category;
  const canDisplayImage = useSyntheticDelay(800);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const PageTitle = () => <h2>{title}</h2>;

  const Image = ({ src }: { src: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className={styles.imageContainer}>
        {(isLoaded && canDisplayImage) || (
          <Skeleton className={styles.skeleton} />
        )}
        <img
          src={src}
          style={isLoaded && canDisplayImage ? {} : { display: 'none' }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <PageTitle />
      <div className={styles.grid}>
        {images.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} />
        ))}
      </div>
    </div>
  );
}
