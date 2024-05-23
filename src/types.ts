export interface RootBootstrap {
  categories: ImageCategory[];
}

export interface ImageCategory {
  title: string;
  coverImage: string;
  images: string[];
  path: string;
}
