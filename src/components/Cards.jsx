/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
export const Cards = React.memo((props) => {
  const cardStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#343a40",
    color: props.mode === "light" ? "#343a40" : "white",
    borderColor: props.mode === "light" ? "#343a40" : "white",
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-6 mb-3">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Title Case</h5>
              <p className="card-text">
                The title case converter is perfect for those who are a bit
                unsure on how to title an upcoming essay. It essentially ensures
                the correct letters are capitalized within the context of a
                title. Words such as “an” will be left all in lower case and
                words that are important will be converted such as “Title”.{" "}
                <br /> This Is an Example of Title Case.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Lower Case</h5>
              <p className="card-text">
                If you are wondering how to uncapitalize text, this is exactly
                what the lower case text converter will allow you to do - it
                transforms all the letters in your text into lowercase letters.
                Simply copy the text that you need generating into lower case
                and paste the text into the box above and select the &apos;lower
                case&apos; tab. <br />
                this is an example of lower case.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Upper Case</h5>
              <p className="card-text">
                The upper case transformer will take any text that you have and
                will generate all the letters into upper case ones. It will
                essentially make all lower case letters into CAPITALS (as well
                as keep upper case letters as upper case letters). To do this,
                you simply have to select the text that you need changing and
                pasting into the box above and then select the UPPER CASE tab.{" "}
                <br />
                THIS IS AN EXAMPLE OF UPPER CASE.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Sentence Case</h5>
              <p className="card-text">
                The sentence case converter will allow you to paste any text
                you&apos;d like, and it will automatically transform it to a
                fully formed structured sentence. It works by capitalizing the
                very first letter in each sentence, and will then go on to
                transform the rest of the text into lowercase as well as
                converting i&apos;s into I&apos;s. Every letter after a full
                stop will get converted into an upper case letter. <br />
                This is an example of sentence case. This is also a part of
                example.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
