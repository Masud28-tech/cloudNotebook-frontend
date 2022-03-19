import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('*');

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         width: '50rem'

//     },
// };

const EditModal = ({ note, modalIsOpen, updateNote, closeModal }) => {

    const [currNote, setCurrNote] = useState({ etitle: note.title, edescription: note.description, etag: note.tag })

    const editNote = (e) => {
        e.preventDefault();
        updateNote(note._id, currNote.etitle, currNote.edescription, currNote.etag)
        closeModal();
    }

    const onChangeInputs = (e) => {
        e.preventDefault();
        setCurrNote({ ...currNote, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel=" EditNoteModal"
            >

                <div id='yourAppElement'>
                    <h2>Edit Note</h2>

                    <form className='container' >
                        {/*  INPUT : TITLE */}
                        <div className="form-group my-2">
                            <label >Title</label>
                            <input
                                name='etitle'
                                value={currNote.etitle}
                                id="etitle"
                                type="text"
                                className="form-control my-2"
                                placeholder="Enter title"
                                autoComplete='true'
                                onChange={onChangeInputs}
                            />
                        </div>

                        {/* INPUT: DESCRIPTION */}
                        <div className="form-group my-2">
                            <label >Description</label>
                            <textarea
                                name='edescription'
                                value={currNote.edescription}
                                id="edescription"
                                className="form-control my-2"
                                placeholder="What is in your mind?"
                                onChange={onChangeInputs}
                            />
                        </div>

                        {/* INPUT: TAG */}
                        <div className="form-group my-2">
                            <label >Tag</label>
                            <input
                                name='etag'
                                value={currNote.etag}
                                id="etag"
                                type="text"
                                className="form-control my-2"
                                placeholder="Choose the tag"
                                onChange={onChangeInputs}
                            />
                        </div>

                        {/* BUTTON: ADD NOTE */}
                        <button type="submit" className="btn btn-danger my-3 text-center " onClick={closeModal}>
                            <span>Cancel</span>
                        </button>

                        <button
                            type="submit"
                            className="btn btn-success my-3 text-center mx-3"
                            disabled={currNote.etitle.length <= 3 || currNote.edescription.length <= 5}
                            onClick={editNote}
                        >
                            <span>Update Note <i class="fa-solid fa-circle-check"></i> </span>
                        </button>
                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default EditModal;