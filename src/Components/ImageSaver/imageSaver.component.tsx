import React from "react";

import "./imageSaver.css";

interface ImageSaverProps {
  saveImage: (url: string) => void;
  pictureUrl: string;
  savedImages: Array<string>;
}

const ImageSaver: React.FC<ImageSaverProps> = props => {
  const { saveImage, pictureUrl, savedImages } = props;

  return (
    <div>
      <button
        className="save-Button"
        disabled={pictureUrl === ""}
        onClick={() => saveImage(pictureUrl)}
      >
        save picture
      </button>
      <h1> Saved Images </h1>
      <div className="saved-Images-Container">
        {savedImages &&
          savedImages.map(image => {
            return (
              <div key={image} className="card">
                <img src={image} alt="Avatar" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageSaver;
