import React, { useState, useContext } from "react";
import Notes from "./Notes";
import NotesContext from "../context/Notes/NotesContext";
import Alert from "./Alert";

export default function Home() {
  const context = useContext(NotesContext);
  const { notes_logo_flag, addNotes, alert, alert2, addalert, addalert2 } =
    context;
  const [note_flag, setNoteflag] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addingNote, SetnewNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  let NoteMode = (e) => {
    if (note_flag) {
      if (addingNote.title !== "" && addingNote.description !== "") {
        setNoteflag(!note_flag);
        e.preventDefault();
        if (addingNote.title !== "" && addingNote.description !== "") {
          addNotes(addingNote.title, addingNote.description, addingNote.tag);
        }
        SetnewNote({ title: "", description: "" });
      } else if (addingNote.title === "" || addingNote.description === "") {
        setShowAlert(!showAlert);
      }
    } else {
      setNoteflag(!note_flag);
    }
  };
  let BodyMode = (e) => {
    if (addingNote.title !== "" && addingNote.description !== "") {
      if (note_flag) {
        setNoteflag(!note_flag);
        e.preventDefault();
        if (addingNote.title !== "" && addingNote.description !== "") {
          addNotes(addingNote.title, addingNote.description, addingNote.tag);
        }
        SetnewNote({ title: "", description: "" });
      }
    }
  };
  let handleonChange = (e) => {
    SetnewNote({ ...addingNote, [e.target.name]: e.target.value });
  };
  return (
    <>
      {!alert2 && alert && (
        <Alert message={"Note is deleted!"} type={"danger"} />
      )}
      {!alert && alert2 && (
        <Alert message={"Note is deleted!"} type={"danger"} />
      )}
      {!addalert2 && addalert && (
        <Alert message={"Note is added!"} type={"success"} />
      )}
      {!addalert && addalert2 && (
        <Alert message={"Note is added!"} type={"success"} />
      )}
      {showAlert && (
        <Alert
          message={"Title or Description can't be empty!"}
          type={"danger"}
        />
      )}
      <div className="container" onClick={BodyMode}>
        <div className="container d-flex justify-content-center my-5">
          {!note_flag && (
            <div
              className="text-center d-flex justify-content-center align-items-center form-control border"
              style={{ width: "600px", backgroundColor: "#f8f9fa" }}
            >
              <input
                type="text"
                className="border border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Take a note..."
                style={{
                  width: "450px",
                  height: "30px",
                  outline: "none",
                  backgroundColor: "#f8f9fa",
                }}
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
                  id="title"
                  name="title"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                  style={{
                    width: "450px",
                    height: "30px",
                    outline: "none",
                    color: "#6c6c6c",
                  }}
                  //   onClick={NoteMode}
                  onChange={handleonChange}
                />
                <i
                  className="fa-solid fa-thumbtack"
                  style={{ marginLeft: "110px" }}
                ></i>
              </div>
              <input
                type="text"
                className="border border-0 my-2 ps-1"
                id="description"
                name="description"
                aria-describedby="emailHelp"
                placeholder="Take a note..."
                style={{ width: "450px", height: "30px", outline: "none" }}
                //   onClick={NoteMode}
                onChange={handleonChange}
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
