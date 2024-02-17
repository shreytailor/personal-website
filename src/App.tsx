import classes from './App.module.css';
import { FeaturedImage, FeaturedImageProps } from './components/FeaturedImage';
import { Header } from './components/Header';
import { UnderConstruction } from './components/UnderConstruction';

interface AppProps {
  featuredImage: FeaturedImageProps;
}

function App({ featuredImage }: AppProps) {
  return (
    <div className={classes.container}>
      <Header />
      <FeaturedImage
        imageUrl={featuredImage.imageUrl}
        metadata={{
          imageDescription: featuredImage.metadata.imageDescription,
          cameraSettings: {
            iso: featuredImage.metadata.cameraSettings.iso,
            shutterSpeed: featuredImage.metadata.cameraSettings.shutterSpeed,
            aperture: featuredImage.metadata.cameraSettings.aperture,
            focalLength: featuredImage.metadata.cameraSettings.focalLength,
          },
        }}
      />
      <UnderConstruction />
    </div>
  );
}

export default App;
