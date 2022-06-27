import memesData from "./memesData";
import React from "react";

export default function Meme() {
  //.

  const memeArray = memesData.data.memes;

  const [meme, setMeme] = React.useState("https://i.imgflip.com/wxica.jpg");

  function generate() {
    const number = Math.round(Math.random() * memeArray.length);
    console.log(memeArray[number].url);
    setMeme(memeArray[number].url);
  }

  return (
    <div className="section">
      <form className="form">
        <input type="text" className="inputOne" placeholder="top-text"></input>
        <input
          type="text"
          className="inputTwo"
          placeholder="bottom-text"
        ></input>
      </form>
      <button className="generateButton" onClick={generate}>
        Generate Meme
      </button>
      <img alt="meme" src={meme} />
    </div>
  );
}
