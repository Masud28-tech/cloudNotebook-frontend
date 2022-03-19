import './App.css';
import { BrowserRouter} from "react-router-dom";

import Navbar from './components/navBar/Navbar';
import NoteState from './Context/notes/NoteState';
import AllRoutes from './navigation/AllRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <Navbar />
          <AllRoutes />
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
