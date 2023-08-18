import React, { useContext, useEffect } from "react";
import NotesContext from "../context/Notes/NotesContext";
import NotesItem from "./NotesItem";

export default function Notes(props) {
  const context = useContext(NotesContext);
  const { notes, notes_logo_flag, setNotesLogoFlag, getNotes } = context;
  useEffect(() => {
    getNotes();
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
