/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

export const Help = React.memo((props) => {
  return (
    <div className="my-3 text-center">
      <h1>Help us</h1>
      <p>
        First of all, thank you for considering helping out Case-Converter! A
        lot of time and energy has gone into making Case Converter what we hope
        is the best word counting tool on the web. There are several ways you
        can help us out, and if you choose to do so, we would appreciate it very
        much!
      </p>
      <h3>1. Bookmark Us</h3>
      <p>
        Bookmarking helps you get back to Case Converter quickly and easily.
        <br />
        How to: Open our homepage and click on the star-sign to bookmark Case
        Converter now.
      </p>
      <img src="https://wordcounter.net/images/bookmark.png" alt="" />
      <br />
      <br />
      <h3>2. Share with your friends</h3>
      <p>
        Help get the word out about Case Converter. Share us on one of your
        favorite social media sites.
      </p>

      <a
        href="https://web.whatsapp.com/"
        className="btn btn-primary m-2"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a
        href="https://www.instagram.com/"
        className="btn btn-primary m-2"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://twitter.com/"
        className="btn btn-primary m-2"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      <br />
      <br />
      <h3>3. Have a blog? Write a review!</h3>
      <p>
        Write a review about how Case Converter helps you out on a day to day
        basis.
      </p>
      <textarea
        name="review"
        id="review"
        cols={80}
        rows={5}
        placeholder="Write a review here..."
        className={`p-2`}
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#343a40",
          border:
            props.mode === "light" ? "1px solid #343a40" : "1px solid white",
          color: props.mode === "light" ? "#343a40" : "white",
        }}
      ></textarea>
    </div>
  );
});
