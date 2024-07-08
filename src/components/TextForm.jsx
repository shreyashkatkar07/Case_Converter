/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useCallback, useMemo } from "react";
import { useState } from "react";

const nonTitleWords = [
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "if",
  "in",
  "nor",
  "of",
  "on",
  "or",
  "so",
  "the",
  "to",
  "up",
  "yet",
];

export const TextForm = React.memo((props) => {
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

  const handleTitleClick = useCallback(() => {
    setText((text) => {
      let sentences = text.match(/[^.!?]+[.!?]*\s*/g);

      sentences = sentences.map((sentence) => {
        let words = sentence.toLowerCase().trim().split(" ");

        if (words.length > 0) {
          words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        }

        for (let i = 1; i < words.length; i++) {
          if (!nonTitleWords.includes(words[i])) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
          }
        }

        return words.join(" ");
      });

      return sentences.join(" ");
    });
  }, []);

  const handleSentClick = useCallback(() => {
    setText((text) => {
      var newString = text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
          return c.toUpperCase();
        });
      return newString;
    });
  }, []);

  const downloadTxtFile = useCallback(() => {
    const texts = text.split();
    const file = new Blob(texts, { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "case-converter-" + Date.now() + ".txt";
    document.body.appendChild(element);
    element.click();
  }, [text]);

  const handleCharCt = useMemo(() => {
    let newText = text.replace(/\s/g, "");
    return newText.length;
  }, [text]);

  const handleWordCt = useMemo(() => {
    let count = 0;
    let split = text.split(/\s/g);
    for (var i = 0; i < split.length; i++) {
      if (split[i] != "") {
        count += 1;
      }
    }
    return count;
  }, [text]);

  const handleSentCt = useMemo(() => {
    const stop = /[.!?]/;
    const sentence = text.split(stop);
    return sentence.length - 1;
  }, [text]);

  return (
    <div className="my-3">
      <div className="container text-center">
        <h2>{props.heading}</h2>
        <h5>
          Simply paste your text and choose the case you want to convert it to.
        </h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            placeholder="Enter the text here..."
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              border:
                props.mode === "light"
                  ? "1px solid #343a40"
                  : "1px solid white",
              color: props.mode === "light" ? "#232323" : "#ececec",
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
        <h4 className="my-2">
          Convert to different cases :
          <p>
            Note : Refer to the &apos;About&apos; section to learn more about
            the various case conversion options
          </p>{" "}
        </h4>
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

      <div className="container text-center">
        <h3>Your text summary</h3>
        <div className="mt-2 d-md-flex justify-content-center">
          <p className="mx-2-md d-md-flex">
            Character count : {handleCharCt}
            <span className="mx-3 d-none d-md-block"> | </span>
          </p>
          <p className="mx-2-md d-md-flex">
            Word count : {handleWordCt}
            <span className="mx-3 d-none d-md-block"> | </span>
          </p>
          <p className="mx-2-md d-md-flex">
            Sentence count : {handleSentCt}
            <span className="mx-3 d-none d-md-block"> | </span>
          </p>
        </div>
        <p>{0.005 * handleWordCt} minutes read</p>
        <h3 className="my-4">Preview</h3>
        <p className="preview-text">
          Enter something in the textbox above to preview it here
        </p>
      </div>
    </div>
  );
});
