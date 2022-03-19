import React, { useContext, useEffect, useRef } from 'react';
import NoteContext from '../../Context/notes/NoteContext';

import AddNotes from '../crud-notes-component/AddNotes';
import NoteItem from '../noteItem.component/NoteItem';

const Notes = () => {
    const Context = useContext(NoteContext);
    const { notes, getNotes } = Context;
    useEffect(() => {
        getNotes();
    }, [])

    return (
        <>
            <AddNotes />

            <h2>Your Notes</h2>
            <div className='row'>
                {
                    notes.map((note) => {
                        return (
                            <NoteItem key={note._id} note={note}  />
                        );
                    })
                }
            </div>
        </>
    )
}

export default Notes;