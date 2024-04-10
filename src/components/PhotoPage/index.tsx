import { useEffect, useState } from 'react';
import PhotoAlbum from 'react-photo-album';

interface ImageGridPageProps {
  images: string[];
}

export default function ImageGridPage({ images }: ImageGridPageProps) {
  useEffect(() => {
    gridGallery({
      selector: '.gg-container',
      darkMode: true,
      layout: 'horizontal',
      gapLength: 4,
      rowHeight: 400,
      columnWidth: 200,
    });
  }, []);

  return (
    <div className="gg-container">
      <div className="gg-box">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} />
        ))}
      </div>
    </div>
  );
}
