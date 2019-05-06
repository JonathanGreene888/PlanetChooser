export interface RootState {
    pictureData: PictureState;
}

export interface PictureState {
    copyright?: string;
    date?: string;
    explanation?: string;
    hdURL?: string;
    media_Type?: string;
    service_Version?: string;
    title?: string;
    url?: string;
}
