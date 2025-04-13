import Skeleton from 'react-loading-skeleton';
import styles from './ImageCategoryPage.module.css';
import { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import useSyntheticDelay from '../../util/useSyntheticDelay';
import { ImageList, ImageListItem } from '@mui/material';
import { useScreenWidth } from '../../util/useScreenWidth';

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
  const { title, images } = category;

  const canDisplayImages = useSyntheticDelay(1000);

  const screenWidth = useScreenWidth();
  const masonryColumns = screenWidth > 1200 ? 3 : screenWidth > 500 ? 2 : 1;

  useEffect(() => {
    document.title = `Shrey Tailor - ${title}`;
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const PageTitle = () => <h2>{title}</h2>;

  const ImagesPlaceholder = () => {
    return (
      <div className={styles.grid}>
        <Skeleton className={styles.skeleton} />
        <Skeleton className={styles.skeleton} />
        <Skeleton className={styles.skeleton} />
        <Skeleton className={styles.skeleton} />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <PageTitle />
      <div>
        {canDisplayImages ? (
          <ImageList variant="masonry" cols={masonryColumns} gap={8}>
            {images.map((imageUrl, index) => (
              <ImageListItem key={index}>
                <img src={imageUrl} />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <ImagesPlaceholder />
        )}
      </div>
    </div>
  );
}
