import React from "react";

export default function Help() {
  return (
    <>
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
        Help get the word out about Word Counter. Share us on one of your
        favorite social media sites.
      </p>
      <button type="button" className="btn btn-primary my-1">
        WhatsApp
      </button>
      <button type="button" className="btn btn-primary my-1 mx-2">
        Twitter
      </button>
      <button type="button" className="btn btn-primary my-1">
        Instagram
      </button>
      <br />
      <br />
      <h3>3. Have a blog? Write a review!</h3>
      <p>
        Write a review about how WordCounter helps you out on a day to day
        basis.
      </p>
    </>
  );
}
