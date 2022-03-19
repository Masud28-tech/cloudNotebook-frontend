import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const initialNotes = [];
    const [notes, setNote] = useState(initialNotes);

    //FUNCTION :  READ/GET all the notes from (mongoDB) database
    const getNotes = async () => {
        //API CALL: to get all notes by 'GET' requrest
        const url = `${host}/api/notes/getAllNotes`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxMjAxZjg0N2RkNzY5YmEzZWI5NzIyIn0sImlhdCI6MTY0NTc4NTE1OX0.y4iyfeGr1PIa5rtM4pkn3RmJRAphS5SPtKXJLreUlN4'
            },
        });
        const json = await response.json();
        setNote(json);
    }

    //FUNCTION : ADD NOTE
    const addNote = async (title, description, tag) => {
        //API CALL: 
        const url = `${host}/api/notes/addnote`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxMjAxZjg0N2RkNzY5YmEzZWI5NzIyIn0sImlhdCI6MTY0NTc4NTE1OX0.y4iyfeGr1PIa5rtM4pkn3RmJRAphS5SPtKXJLreUlN4'
            },
            body: JSON.stringify({ title, description, tag })
        });
        
        //LOGIC: to add a new note
        const noteTOAdd = await response.json();
        setNote(notes.concat(noteTOAdd));
    }
    

    //FUNCTION : UPDATE NOTE
    const updateNote = async (id, title, description, tag) => {

        //API CALL: to fetch required note from database
        const url = `${host}/api/notes/updateNote/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxMjAxZjg0N2RkNzY5YmEzZWI5NzIyIn0sImlhdCI6MTY0NTc4NTE1OX0.y4iyfeGr1PIa5rtM4pkn3RmJRAphS5SPtKXJLreUlN4'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        //LOGIC: to update the note's data

        // created dummy note which is a copy of original note called noteToUpdate to update
        let noteToUpdate = JSON.parse(JSON.stringify(notes)); 

        for (let index = 0; index < noteToUpdate.length; index++) {
            if (noteToUpdate[index]._id === id) {
                noteToUpdate[index].title = title;
                noteToUpdate[index].description = description;
                noteToUpdate[index].tag = tag;
                break;
            }
        }
        setNote(noteToUpdate);
    }

    //FUNCTION : DELETE NOTE
    const deleteNote = async (id) => {
        //API CALL: 
        const url = `${host}/api/notes/deleteNote/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxMjAxZjg0N2RkNzY5YmEzZWI5NzIyIn0sImlhdCI6MTY0NTc4NTE1OX0.y4iyfeGr1PIa5rtM4pkn3RmJRAphS5SPtKXJLreUlN4'
            },
        });
        const json = response.json();

        //LOGIC: to delete the note from MongoDB database
        const updatedNote = notes.filter((note) => { return note._id !== id });
        setNote(updatedNote);
    }

    // RENDER: (REDUX: USE-CONTEXT)
    return (
        <NoteContext.Provider value={{ notes, addNote, getNotes, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;