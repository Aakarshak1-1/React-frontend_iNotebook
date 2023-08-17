import React, { useState } from "react";
import NotesContext from "./NotesContext";

const NoteState = (props) => {
  const user_notes = [
    {
      _id: "64da3a5fb763ecc8c713fc0e",
      user: "64d9e6b9b991e3e2eed490d6",
      title: "My first",
      description: "React app cdscsa ",
      tag: "Personal",
      date: "2023-08-14T14:29:51.481Z",
      __v: 0,
    },
    {
      _id: "64da3a62b763ecc8c713fc10",
      user: "64d9e6b9b991e3e2eed490d6",
      title: "My first",
      description: "React app cdscsa cadSSC",
      tag: "Personal",
      date: "2023-08-14T14:29:54.839Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(user_notes);
  const [notes_logo_flag, setNotesLogoFlag] = useState(false);
  return (
    <NotesContext.Provider
      value={{ notes, setNotes, notes_logo_flag, setNotesLogoFlag }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
export default NoteState;
