import React from "react";

import "./imageSaver.css";

interface ImageSaverProps {
  saveImage: (url: string) => void;
  pictureUrl: string;
  savedImages?: { savedImages: [] };
}

const ImageSaver: React.FC<ImageSaverProps> = props => {
  const { saveImage, pictureUrl, savedImages } = props;
  console.log(savedImages);
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
          savedImages.savedImages.map(image => {
            return image === "" ? (
              <div key={image}></div>
            ) : (
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
