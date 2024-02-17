import { useState } from 'react';
import classes from './FeaturedImage.module.css';

export interface FeaturedImageProps {
  imageUrl: string;
  metadata: {
    imageDescription: string;
    cameraSettings: {
      /**
       * Example: 100
       */
      iso: number;

      /**
       * Example: 2.8
       */
      aperture: number;

      /**
       * Example: 1/100 or 30
       */
      shutterSpeed: string;

      /**
       * Example: 50
       */
      focalLength: number;
    };
  };
}

export function FeaturedImage({ imageUrl, metadata }: FeaturedImageProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { imageDescription } = metadata;
  const { iso, aperture, shutterSpeed, focalLength } = metadata.cameraSettings;

  return (
    <div className={classes.container}>
      <img
        src={imageUrl}
        alt={imageDescription}
        onLoad={() => setIsLoaded(true)}
        style={isLoaded ? {} : { display: 'none' }}
      />
      {isLoaded && (
        <div className={classes.metadataContainer}>
          <p>{imageDescription}</p>
          <p>
            {`ISO ${iso} / f${aperture} / ${shutterSpeed}s / ${focalLength}mm`}
          </p>
        </div>
      )}
    </div>
  );
}
