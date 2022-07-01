import memesData from "./memesData";
import React from "react";

export default function Meme() {
  //.

  const memeArray = memesData.data.memes;

  const [meme, setMeme] = React.useState("https://i.imgflip.com/wxica.jpg");
  const [textInputs, setTextInputs] = React.useState({
    topText: "",
    bottomText: "",
  });

  function createText(event) {
    const { name, value } = event.target;
    setTextInputs((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  function generate() {
    const number = Math.round(Math.random() * memeArray.length);
    console.log(memeArray[number].url);
    setMeme(memeArray[number].url);
  }

  return (
    <div className="section">
      <form className="form">
        <input
          type="text"
          className="inputOne"
          placeholder="top-text"
          name="topText"
          value={textInputs.topText}
          onChange={createText}
        ></input>
        <input
          type="text"
          className="inputTwo"
          placeholder="bottom-text"
          name="bottomText"
          value={textInputs.bottomText}
          onChange={createText}
        ></input>
      </form>
      <button className="generateButton" onClick={generate}>
        Generate Meme
      </button>
      <div className="meme-display">
        <img alt="meme" src={meme} />
        <p className="top text">{textInputs.topText}</p>
        <p className="bottom text">{textInputs.bottomText}</p>
      </div>
    </div>
  );
}
