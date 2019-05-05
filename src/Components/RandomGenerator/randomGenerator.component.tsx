import React, { Fragment } from 'react';

import './randomGenerator.css';
import { RootState } from '../../state';

interface RandomGeneratorProps {
    generatePlanet: () => void;
    picture: RootState;
}

const RandomGenerator: React.FC<RandomGeneratorProps> = props => {
    const { generatePlanet, picture } = props;
    console.log(picture);
    return (
        <Fragment>
            <button className="generatorButton" onClick={generatePlanet}>
                Random Generator
            </button>
            <div className="generatedTitle">{picture.title}</div>
            <div className="generatedImage">{picture.hdURL}</div>
        </Fragment>
    );
};

export default RandomGenerator;
