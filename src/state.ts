export interface RootState {
    pictureState: PictureState;
}

export interface PictureState {
    copyright?: string;
    date?: string;
    explanation?: string;
    hdURL?: string;
    mediaType?: string;
    serviceVersion?: string;
    title?: string;
    url?: string;
}
