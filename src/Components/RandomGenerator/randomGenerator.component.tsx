import React, { Fragment } from 'react';

import './randomGenerator.css';
import { PictureState } from '../../state';

interface RandomGeneratorProps {
    generatePlanet: () => void;
    planet: PictureState;
}

const RandomGenerator: React.FC<RandomGeneratorProps> = props => {
    const { generatePlanet, planet } = props;
    console.log(planet);
    return (
        <Fragment>
            <button className="generatorButton" onClick={generatePlanet}>
                Random Generator
            </button>
            <div className="generatedTitle">{planet.title}</div>
            <div className="generatedImage">{planet.hdURL}</div>
        </Fragment>
    );
};

export default RandomGenerator;
