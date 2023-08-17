import React, { useState, useContext } from "react";
import Notes from "./Notes";
import NotesContext from "../context/Notes/NotesContext";

export default function Home() {
  const context = useContext(NotesContext);
  const { notes_logo_flag } = context;
  const [note_flag, setNoteflag] = useState(false);
  let NoteMode = () => {
    if (note_flag) {
      setNoteflag(!note_flag);
    } else {
      setNoteflag(!note_flag);
    }
  };
  let BodyMode = () => {
    if (note_flag) {
      setNoteflag(!note_flag);
    }
  };
  return (
    <>
      <div className="container" onClick={BodyMode}>
        <div className="container d-flex justify-content-center my-5">
          {!note_flag && (
            <div
              className="text-center d-flex justify-content-center align-items-center form-control border"
              style={{ width: "600px" }}
            >
              <input
                type="text"
                className="border border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Take a note..."
                style={{ width: "450px", height: "30px", outline: "none" }}
                onClick={NoteMode}
              />
              <button className="border border-0 bg-light" disabled={false}>
                {" "}
                <i className="fa-regular fa-square-check fs-4 mx-2"></i>
              </button>
              <button className="border border-0 bg-light" disabled={true}>
                {" "}
                <i className={`fa-solid fa-paintbrush fs-5 mx-2`}></i>
              </button>
              <button className="border border-0 bg-light" disabled={false}>
                {" "}
                <i className="fa-regular fa-image fs-5 mx-2"></i>
              </button>
            </div>
          )}
          {note_flag && (
            <div
              className="text-center d-flex flex-column justify-content-center align-items-start form-control border"
              style={{ width: "600px" }}
            >
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="border border-0 my-2 ps-1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                  style={{
                    width: "450px",
                    height: "30px",
                    outline: "none",
                    color: "#6c6c6c",
                  }}
                  //   onClick={NoteMode}
                />
                <i
                  className="fa-solid fa-thumbtack"
                  style={{ marginLeft: "110px" }}
                ></i>
              </div>
              <input
                type="text"
                className="border border-0 my-2 ps-1"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Take a note..."
                style={{ width: "450px", height: "30px", outline: "none" }}
                //   onClick={NoteMode}
              />
              <div className="d-flex align-items-center">
                <div className="icons my-2">
                  <i className="fa-regular fa-bell ms-1 me-3"></i>
                  <i className="fa-solid fa-user-plus mx-3"></i>
                  <i className="fa-solid fa-palette mx-3"></i>
                  <i className="fa-regular fa-image mx-3"></i>
                  <i className="fa-solid fa-box-archive mx-3"></i>
                  <i className="fa-solid fa-ellipsis-vertical mx-3"></i>
                  <i className="fa-solid fa-rotate-left mx-3"></i>
                  <i className="fa-solid fa-rotate-right mx-3"></i>
                </div>
                <button
                  className="my-2 btn border border-0"
                  style={{ color: "#6c6c6c", marginLeft: "150px" }}
                  onClick={NoteMode}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {!notes_logo_flag && (
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "150px" }}
          >
            <i
              className="fa-regular fa-lightbulb"
              style={{ color: "#cbcbcb", fontSize: "150px" }}
            ></i>
            <p className="my-4" style={{ color: "#6c6c6c", fontSize: "20px" }}>
              Notes you add appear here
            </p>
          </div>
        )}

        <Notes />
      </div>
    </>
  );
}
