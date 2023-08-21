import React, { useContext, useState } from "react";
import NotesContext from "../context/Notes/NotesContext";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function NotesItem(props) {
  const { element } = props;
  const context = useContext(NotesContext);
  const { deleteNotes, editNotes } = context;
  const [edited_title, setEditedTitle] = useState(element.title);
  const [edited_description, setEditedDescription] = useState(
    element.description
  );
  const handleontitle = (e) => {
    // console.log(
    //   e.target.value.length > 25 ? e.target.value.slice(0, 25) : e.target.value
    // );
    setEditedTitle(e.target.value);
  };
  const handleondescription = (e) => {
    setEditedDescription(e.target.value);
  };
  let title_value = (edited_title) => {
    return Math.ceil(edited_title.length / 25);
    // console.log(val);
  };
  let description_value = (edited_description) => {
    return Math.ceil(edited_description.length / 28);
    // console.log(val);
  };
  return (
    <>
      <div className="col-md-3 mx-5 my-3">
        <div className="card border border-1 border-primary" style={{ width: "275px" }}>
          <h5
            className="card-header border border-top-0 border-start-0 border-end-0 border-primary mt-1"
            style={{ backgroundColor: "#ffffff", maxHeight: "80px" }}
          >
            <textarea
              className="border border-0"
              id="etitle"
              name="etitle"
              rows={`${title_value(edited_title)}`}
              value={edited_title}
              onChange={handleontitle}
              style={{
                outline: "none",
                backgroundColor: "#ffffff",
                width: "250px",
                whiteSpace: "pre-line",
              }}
              minLength={5}
              required
            ></textarea>
          </h5>
          <div className="card-body">
            <p className="card-text">
              <textarea
                className="border border-0"
                id="edescription"
                name="edescription"
                rows={`${description_value(edited_description)}`}
                value={edited_description}
                onChange={handleondescription}
                style={{
                  outline: "none",
                  backgroundColor: "#ffffff",
                  width: "250px",
                  whiteSpace: "pre-line",
                }}
                minLength={5}
                required
              ></textarea>
            </p>
          </div>
          <div className="card-footer order border-bottom-0 border-start-0 border-end-0 border-primary bg-transparent">
            <i
              className="fa-regular fa-pen-to-square mar"
              data-tooltip-id="my-tooltip-1"
              onClick={() => {
                if (
                  element.title !== edited_title ||
                  element.description !== edited_description
                ) {
                  editNotes(element._id, edited_title, edited_description);
                }
              }}
            ></i>
            <i
              className="fa-regular fa-trash-can mar "
              data-tooltip-id="my-tooltip-2"
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
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="Edit note"
        className="bg-dark"
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        content="Delete note"
        className="bg-danger"
      />
    </>
  );
}
