import React, { useContext, useEffect } from "react";
import NotesContext from "../context/Notes/NotesContext";
import NotesItem from "./NotesItem";
import { useNavigate } from "react-router-dom";

export default function Notes(props) {
  let history = useNavigate();
  const context = useContext(NotesContext);
  const { notes, notes_logo_flag, setNotesLogoFlag, getNotes } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (notes.length !== 0) {
      setNotesLogoFlag(true);
    } else {
      setNotesLogoFlag(false);
    }
  }, [notes.length, notes_logo_flag, setNotesLogoFlag]);
  return (
    <div className="row mx-5" style={{ marginTop: "50px" }}>
      {notes.map((element) => {
        return <NotesItem element={element} key={element._id} />;
      })}
    </div>
  );
}
