import React, { useContext, useState } from 'react';
import NoteContext from '../../Context/notes/NoteContext';

const AddNotes = () => {
    const Context = useContext(NoteContext);
    const { addNote } = Context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "default" });
    }

    const onChangeInputs = (e) => {
        e.preventDefault();
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-4'>
            <h2>Add a note</h2>

            <form className='container' >
                {/*  INPUT : TITLE */}
                <div className="form-group my-2">
                    <label >Title</label>
                    <input
                        name='title'
                        value={note.title}
                        id="title"
                        type="text"
                        className="form-control my-2"
                        placeholder="Enter title"
                        autoComplete='true'
                        onChange={onChangeInputs} />

                    <small id="noteTitle" className="form-text text-muted">Impress others and yourself with unique title</small>
                </div>

                {/* INPUT: DESCRIPTION */}
                <div className="form-group my-2">
                    <label >Description</label>
                    <textarea
                        name='description'
                        value={note.description}
                        id="description"
                        className="form-control my-2"
                        placeholder="What is in your mind?"
                        onChange={onChangeInputs} />
                </div>

                {/* INPUT: TAG */}
                <div className="form-group my-2">
                    <label >Tag</label>
                    <input
                        name='tag'
                        value={note.tag}
                        id="tag"
                        type="text"
                        className="form-control my-2"
                        placeholder="Default"
                        onChange={onChangeInputs} />
                </div>

                {/* BUTTON: ADD NOTE */}
                <button
                    type="submit"
                    className="btn btn-success my-3 text-center"
                    disabled={note.title.length <= 3 || note.description.length <= 5}
                    onClick={handleAddNote}
                >
                    <span>Add Note <i className="fa-solid fa-plus mx-1"></i> </span>
                </button>

            </form>

        </div>
    )
}

export default AddNotes;