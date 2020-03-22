import React from "react";
import ReactPlayer from "react-player";

import "./randomGenerator.css";
import { PictureState } from "../../state";

interface RandomGeneratorProps {
  generatePicture: () => void;
  picture: PictureState;
}

const RandomGenerator: React.FC<RandomGeneratorProps> = props => {
  const { generatePicture, picture } = props;
  return (
    <>
      <button className="generatorButton" onClick={generatePicture}>
        Generate Random Picture
      </button>
      <h1 className="generatedTitle">{picture.title}</h1>
      {picture.media_type !== undefined ? (
        picture.media_type === "image" ? (
          <div className="generatedImage">
            <img
              src={picture.url}
              alt="There is no picture avaialable"
              height="482"
              width="1024"
            />
          </div>
        ) : (
          <div className="generatedVideo">
            <ReactPlayer url={picture.url} />
          </div>
        )
      ) : (
        <div> </div>
      )}
    </>
  );
};

export default RandomGenerator;
