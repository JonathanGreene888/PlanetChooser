import React from 'react';

import './randomGenerator.css';

interface RandomGeneratorProps {
    generatePlanet?: () => void;
}

const RandomGenerator: React.FC<RandomGeneratorProps> = props => {
    const { generatePlanet } = props;
    return (
        <button className="generatorButton" onClick={generatePlanet}>
            Random Generator
        </button>
    );
};

export default RandomGenerator;
