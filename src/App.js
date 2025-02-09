import logo from './logo.svg';
 import { Header } from './componets/header';
 import { Footer } from './componets/footer';
import './App.css';
 import { Note } from './componets/note';
import { CreateArea } from './componets/create_area';
import { useState } from 'react';
import DarkModeToggle from './componets/dark_theme';



function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <><Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote} />
         </>
          
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
