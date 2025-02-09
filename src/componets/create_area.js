import { useState } from "react";

export function CreateArea(props){

    const [note, setnote] = useState({
        title: "",
        content: ""  
    });

    function handlechange(event){
        const {name, value} = event.target;

        setnote(prevNote=>{
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setnote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    return(
        <div>
            <form>
                <input name="title" 
                value={note.title}
                 placeholder="Title"
                 onChange={handlechange}
                  />
                <textarea 
                name="content" 
                placeholder="take a note..." 
                rows="3"
                value={note.content}
                onChange={handlechange}
                />
             <button onClick={submitNote}>Add</button>
            </form>
        </div>

    );
}