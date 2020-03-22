export interface RootState {
  pictureData: PictureState;
  savedImages: SavedPicturesState;
}

export interface PictureState {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
}

export interface SavedPicturesState {
  savedImages: Array<string>;
}
