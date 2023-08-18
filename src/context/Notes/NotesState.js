import React, { useState } from "react";
import NotesContext from "./NotesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const user_notes = [];
  const [notes, setNotes] = useState(user_notes);
  const [notes_logo_flag, setNotesLogoFlag] = useState(false);
  const [alert, setAlertFlag] = useState(false);
  const [alert2, setAlertFlag2] = useState(false);
  const [addalert, setAddAlertFlag] = useState(false);
  const [addalert2, setAddAlertFlag2] = useState(false);
  const [editalert, setEditAlertFlag] = useState(false);
  const [editalert2, setEditAlertFlag2] = useState(false);
  const [edit_counter, setCounter] = useState(2);

  //   Fetch all notes
  const getNotes = async () => {
    // APi call starts
    const url = `${host}/api/notes/fetchnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        JWT_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkOWU2YjliOTkxZTNlMmVlZDQ5MGQ2In0sImlhdCI6MTY5MjAyMDE2MX0.rwvhygQdsswhQTdMVG856Stqus8MRZ_ha9j9PYa1gm4",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
    // APi call ends
  };
  //   Adding a new note
  const addNotes = async (title, description, tag) => {
    // APi call starts
    const url = `${host}/api/notes/addnotes`;
    // console.log(title)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        JWT_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkOWU2YjliOTkxZTNlMmVlZDQ5MGQ2In0sImlhdCI6MTY5MjAyMDE2MX0.rwvhygQdsswhQTdMVG856Stqus8MRZ_ha9j9PYa1gm4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // API call ends
    const addnote = {
      _id: "64da3a5fb763ecc8c713fc033",
      user: "64d9e6b9b991e3e2eed490d6",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-14T14:29:51.481Z",
      __v: 0,
    };
    let counter = 0;
    counter += 1;
    if (counter > 0) {
      if (counter % 2 === 0) {
        setAddAlertFlag(true);
        setAddAlertFlag2(false);
      } else {
        setAddAlertFlag(false);
        setAddAlertFlag2(true);
      }
    }
    setNotes(notes.concat(addnote));
  };
  const deleteNotes = async (id) => {
    // APi call starts
    const url = `${host}/api/notes/deletenotes/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        JWT_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkOWU2YjliOTkxZTNlMmVlZDQ5MGQ2In0sImlhdCI6MTY5MjAyMDE2MX0.rwvhygQdsswhQTdMVG856Stqus8MRZ_ha9j9PYa1gm4",
      },
    });
    const json = await response.json();
    console.log(json);
    // APi call ends
    let counter = 0;
    const deleted_notes = notes.filter((addnote) => {
      counter += 1;
      return addnote._id !== id;
    });
    if (counter > 0) {
      if (counter % 2 === 0) {
        setAlertFlag(true);
        setAlertFlag2(false);
      } else {
        setAlertFlag(false);
        setAlertFlag2(true);
      }
    }
    setNotes(deleted_notes);
  };
  const editNotes = async (id, title, description, tag) => {
    // Api call starts
    const url = `${host}/api/notes/updatenotes/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        JWT_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkOWU2YjliOTkxZTNlMmVlZDQ5MGQ2In0sImlhdCI6MTY5MjAyMDE2MX0.rwvhygQdsswhQTdMVG856Stqus8MRZ_ha9j9PYa1gm4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // Api call ends
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    if (edit_counter > 0) {
      if (edit_counter % 2 === 0) {
        setEditAlertFlag(true);
        setEditAlertFlag2(false);
      } else {
        setEditAlertFlag(false);
        setEditAlertFlag2(true);
      }
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        notes_logo_flag,
        setNotesLogoFlag,
        addNotes,
        deleteNotes,
        editNotes,
        getNotes,
        alert,
        alert2,
        addalert,
        addalert2,
        editalert,
        editalert2,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
export default NoteState;
