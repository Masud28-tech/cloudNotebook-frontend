import React, { useContext } from 'react';
import NoteContext from '../../Context/notes/NoteContext';
import EditModal from '../crud-notes-component/EditNote';

const NoteItem = ({ note }) => {
    const context = useContext(NoteContext);
    const { deleteNote, updateNote } = context;

    // UPDATE NOTE: MODAL (opens on edit icon clicked)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
        <EditModal note={note} modalIsOpen={modalIsOpen} updateNote={updateNote} closeModal={closeModal} />

        <div className='card-group col'>
            <div className="card my-3 mx-3">

                <div className="card-header">
                    <strong>{note.title}</strong>

                    {/* OPTIONS */}
                    <span className="mx-2" >
                        {/* EDIT */}
                        <i className="fa-solid fa-pen-to-square mx-2" style={{ cursor: "pointer" }}
                            onClick={() => { openModal() }}>
                        </i>

                        {/* DELETE */}
                        <i className="fa-solid fa-trash-can mx-2" style={{ cursor: "pointer" }}
                            onClick={() => { deleteNote(note._id) }}>
                        </i>
                    </span>

                </div>

                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        {note.description}
                        <footer className="blockquote-footer my-2"><cite title="Tag">{note.tag}</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
        </>
    )
}

export default NoteItem