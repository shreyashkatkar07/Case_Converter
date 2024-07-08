/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

export const Contact = React.memo((props) => {
  const cardStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#343a40",
    color: props.mode === "light" ? "#343a40" : "white",
    borderColor: props.mode === "light" ? "#343a40" : "white",
  };
  useEffect(() => {
    const exampleModal = document.getElementById("exampleModal");
    if (exampleModal) {
      exampleModal.addEventListener("show.bs.modal", () => {
        const modalTitle = exampleModal.querySelector(".modal-title");
        modalTitle.textContent =
          "Your Ideas Matter - Help Us Improve Our Website! Share Your Feedback With Us.";
      });
    }
  }, []);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary my-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever=""
      >
        Feedback
      </button>
      <div
        className="modal fade text-start"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={cardStyle}>
            <div className="modal-header" style={cardStyle}>
              <h5 className="modal-title fs-5">Feedback Form</h5>
              <button
                style={cardStyle}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Your Email :
                  </label>
                  <input
                    style={cardStyle}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Enter your email address here..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Your Message :
                  </label>
                  <textarea
                    style={cardStyle}
                    className="form-control"
                    id="message-text"
                    placeholder="Remember...your opinion matters"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
