import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  title?: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  techStack?: string[];
  headline?: string;
  subheadline?: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
