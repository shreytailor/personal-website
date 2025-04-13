import Skeleton from 'react-loading-skeleton';
import styles from './ImageCategoryPage.module.css';
import { useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import useSyntheticDelay from '../../util/useSyntheticDelay';
import { ImageList, ImageListItem } from '@mui/material';
import { useScreenWidth } from '../../util/useScreenWidth';
import { ImageCategory } from '../../types';
import { Map, Marker } from 'pigeon-maps';

export default function ImageCategoryPage({
  category,
}: {
  category: ImageCategory;
}) {
  const { title, images, map } = category;

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
      {map && (
        <div className={styles.mapContainer}>
          <Map
            height={320}
            defaultCenter={[map.latitude, map.longitude]}
            defaultZoom={map.zoom || 10}
          >
            {map.markers?.map((marker, index) => (
              <Marker
                key={index}
                width={marker.width || 50}
                anchor={[marker.latitude, marker.longitude]}
              />
            ))}
          </Map>
        </div>
      )}
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
