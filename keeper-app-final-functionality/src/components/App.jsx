import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes, 
        note
      ]
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => id != (index + 1)));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => <Note key={index + 1} title={note.title} content={note.content} id={index + 1} onDelete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
