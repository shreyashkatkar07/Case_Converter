import React from "react";

export default function Contact() {
  const exampleModal = document.getElementById("exampleModal");
  if (exampleModal) {
    exampleModal.addEventListener("show.bs.modal", () => {
      // Button that triggered the modal
      //   const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      //   const recipient = button.getAttribute("data-bs-whatever");
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.
      // Update the modal's content.
      const modalTitle = exampleModal.querySelector(".modal-title");
      //   const modalBodyInput = exampleModal.querySelector(".modal-body input");
      modalTitle.textContent =
        "Feedback request - Have some ideas how to improve our website? Give us your feedback.";
      //   modalBodyInput.value = recipient;
    });
  }
  return (
    <>
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
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Your Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Your Message :
                  </label>
                  <textarea
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
    </>
  );
}
