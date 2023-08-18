import React, { useContext } from "react";
import NotesContext from "../context/Notes/NotesContext";

export default function NotesItem(props) {
  const context = useContext(NotesContext);
  const { deleteNotes} = context;
  const { element } = props;
  const handleontitle = (e) => {
    return { ...element, [e.target.name]: e.target.value };
  };
  const handleondescription = (e) => {
    return { ...element, [e.target.name]: e.target.value };
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
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Take a note..."
              value={element.title}
              onChange={handleontitle}
              style={{ outline: "none", backgroundColor: "#ffffff" }}
            />
          </h5>
          <div className="card-body">
            <p className="card-text">
              <input
                type="text"
                className="border border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Take a note..."
                value={element.description}
                style={{ outline: "none", backgroundColor: "#ffffff" }}
                onChange={handleondescription}
              />
            </p>
          </div>
          <div className="card-footer bg-transparent">
            <i className="fa-regular fa-pen-to-square me-2"></i>
            <i
              className="fa-regular fa-trash-can mx-2 "
              onClick={() => {
                deleteNotes(element._id);
              }}
            ></i>
            <i className="fa-regular fa-bell mx-2"></i>
            <i className="fa-solid fa-user-plus mx-2"></i>
            <i className="fa-solid fa-palette mx-2"></i>
            <i className="fa-regular fa-image mx-2"></i>
            <i className="fa-solid fa-box-archive mx-2"></i>
            <i className="fa-solid fa-ellipsis-vertical mx-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}
