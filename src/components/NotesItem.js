import React from "react";

export default function NotesItem(props) {
  const { element } = props;
  return (
    <>
      <div className="col-md-3">
        <div
          className="card"
          style={{ width: "250px", height: "200px" }}
        >
          <span
            className={`position-absolute top-0 start-0 translate-middle badge rounded-circle bg-dark`}
          >
            <i className={`fa-solid fa-check`}></i>
          </span>
          <h5 className="card-header mt-1" style={{ height: "50px" }}>
            {element.title}
          </h5>
          <div className="card-body">
            <p className="card-text">{element.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
