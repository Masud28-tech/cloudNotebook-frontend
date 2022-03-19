import React , {useContext} from 'react';
import NoteContext from '../../Context/notes/NoteContext';

const About = () => {
  const a = useContext(NoteContext);
  return (
    <>
    <h1>About {a.name}</h1>
    <h3>created by {a.author}</h3>
    </>
  )
}

export default About