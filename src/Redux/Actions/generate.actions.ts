import { createStandardAction } from 'typesafe-actions';
import { PictureState } from '../../state';

export const generatePicture = createStandardAction('GENERATE_PICTURE')();

export const fetchPictureSuccessful = createStandardAction('FETCH_PICTURE_SUCCESSFUL').map((payload: PictureState) => {
    return {
        payload,
    };
});
