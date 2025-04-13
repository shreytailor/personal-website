export interface RootBootstrap {
  categories: ImageCategory[];
}

export interface ImageCategory {
  title: string;
  coverImage: string;
  images: string[];
  path: string;
  map?: {
    latitude: number;
    longitude: number;
    zoom?: number;
    markers?: {
      width?: number;
      latitude: number;
      longitude: number;
    }[];
  };
}
