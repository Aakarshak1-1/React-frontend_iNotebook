import React, { useContext, useState } from "react";
import NotesContext from "../context/Notes/NotesContext";

export default function NotesItem(props) {
  const { element } = props;
  const context = useContext(NotesContext);
  const { deleteNotes, editNotes } = context;
  const [edited_title, setEditedTitle] = useState(element.title);
  const [edited_description, setEditedDescription] = useState(
    element.description
  );
  const handleontitle = (e) => {
    setEditedTitle(e.target.value);
  };
  const handleondescription = (e) => {
    setEditedDescription(e.target.value);
  };
  return (
    <>
      <div className="col-md-3 mx-5 my-3">
        <div className="card" style={{ width: "275px" }}>
          <h5
            className="card-header mt-1"
            style={{ height: "50px", backgroundColor: "#ffffff" }}
          >
            <input
              type="text"
              className="border border-0"
              id="eitle"
              name="etitle"
              aria-describedby="emailHelp"
              placeholder="Take a note..."
              value={edited_title}
              onChange={handleontitle}
              style={{ outline: "none", backgroundColor: "#ffffff", width: "250px"  }}
            />
          </h5>
          <div className="card-body">
            <p className="card-text">
              <input
                type="text"
                className="border border-0"
                id="edescription"
                name="edescription"
                aria-describedby="emailHelp"
                placeholder="Take a note..."
                value={edited_description}
                onChange={handleondescription}
                style={{ outline: "none", backgroundColor: "#ffffff" }}
              />
            </p>
          </div>
          <div className="card-footer bg-transparent">
            <i
              className="fa-regular fa-pen-to-square mar"
              onClick={() => {
                editNotes(element._id, edited_title, edited_description);
              }}
            ></i>
            <i
              className="fa-regular fa-trash-can mar "
              onClick={() => {
                deleteNotes(element._id);
              }}
            ></i>
            <i className="fa-regular fa-bell mar"></i>
            <i className="fa-solid fa-user-plus mar"></i>
            <i className="fa-solid fa-palette mar"></i>
            <i className="fa-regular fa-image mar"></i>
            <i className="fa-solid fa-box-archive mar"></i>
            <i className="fa-solid fa-ellipsis-vertical mar"></i>
          </div>
        </div>
      </div>
    </>
  );
}
