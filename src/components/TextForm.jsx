import React from "react";
import { useState } from "react";

//refer following websites to add more features
//text analyser
//convert case

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (text) => {
    setText(text.target.value);
    const elements = document.querySelector(".preview-text");
    elements.innerText = text.target.value;
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied the text");
  };

  const handleExtSpac = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleTitleClick = () => {
    setText((text) => {
      text = text.toLowerCase().split(" ");
      for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      }
      return text.join(" ");
    });
  };

  const handleSentClick = () => {
    setText((text) => {
      var newString = text
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
          return c.toUpperCase();
        });
      return newString;
    });
  };

  const downloadTxtFile = () => {
    const texts = text.split();
    const file = new Blob(texts, { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "case-converter-" + Date.now() + ".txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleCharCt = () => {
    let newText = text.replace(/\s/g, "");
    return newText.length;
  };

  const handleWordCt = () => {
    let count = 0;
    let split = text.split(/\s/g);
    for (var i = 0; i < split.length; i++) {
      if (split[i] != "") {
        count += 1;
      }
    }
    return count;
  };

  const handleSentCt = () => {
    const stop = /[.!?]/;
    const sentence = text.split(stop);
    return sentence.length - 1;
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "#343a40" : "white"
            } `}
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
            }}
          />
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary my-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  mx-3 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-3 my-2"
          onClick={handleExtSpac}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary my-2"
          value="download"
          onClick={downloadTxtFile}
        >
          Download text as file(.txt)
        </button>
        <br />
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-3 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary  me-3 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary me-3 my-2"
          onClick={handleTitleClick}
        >
          Convert to Titlecase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary my-2"
          onClick={handleSentClick}
        >
          Convert to Sentencecase
        </button>
      </div>

      <div className="container my-4">
        <h3 className="my-2">Your text summary</h3>
        <p className="my-2">
          {" "}
          Character count : {handleCharCt()}
          <span> | </span>
          Word count : {handleWordCt()}
          <span> | </span>
          Sentence count : {handleSentCt()}
          <span> | </span>
        </p>
        <p className="my-2">{0.008 * handleWordCt()} minutes read</p>
        <h3 className="my-4">Preview</h3>
        <p className="preview-text">
          Enter something in the textbox above to preview it here
        </p>
      </div>
    </>
  );
}
