import React from 'react';
import ReactPlayer from 'react-player';

import './randomGenerator.css';
import { PictureState } from '../../state';

interface RandomGeneratorProps {
    generatePicture: () => void;
    picture: PictureState;
}

const RandomGenerator: React.FC<RandomGeneratorProps> = props => {
    const { generatePicture, picture } = props;
    console.log(picture);
    return (
        <>
            <button className="generatorButton" onClick={generatePicture}>
                Generate Random Picture
            </button>
            <div className="generatedTitle">
                <h1>{picture.title}</h1>
            </div>
            {picture.media_Type === 'picture' ? (
                <div className="generatedImage">
                    <img src={picture.url} alt="There is no picture avaialable" />
                </div>
            ) : (
                <div className="generatedVideo">
                    <ReactPlayer url={picture.url} />
                </div>
            )}
        </>
    );
};

export default RandomGenerator;
