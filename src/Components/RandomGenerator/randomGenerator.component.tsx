import React from 'react';

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
        <>
            <button className="generatorButton" onClick={generatePlanet}>
                Random Generator
            </button>
            <div className="generatedImage">{picture.title}</div>
        </>
    );
};

export default RandomGenerator;
