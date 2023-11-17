import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote =(props)=>{

    const[expand,setExpand] =useState(false);

 const[note ,setNote] =useState({
    title :'',
    content:'',
 });

 const inputEvent=(event)=>{

    // const value = event.target.value;
    // const name = event.target.name;

    const{name,value} =event.target;

    setNote((prevData)=>{
        return{
            ...prevData,
            [name] :value,
        }
    });
    console.log(note);
 }

 const addEvent =()=>{
    props.passNote(note);
    setNote({
        title:'',
        content:'',
    })
 }
 const expandIt=()=>{
    setExpand(true);
 }

const backToNormal=()=>{
    setExpand(false)
}

    return(
    <>
    <div className="main_note" onDoubleClick={backToNormal}>
        <form>
        {expand?
            <input type='text' placeholder="Title" value={note.title} onChange={inputEvent} name="title"/>:null}
            <textarea rows=' ' column='' placeholder="write a note..." value={note.content} onChange={inputEvent} name="content" onClick={expandIt} ></textarea>

            {expand ?
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button>:null}
        </form>
    </div>

    </>
    )
};




export default CreateNote;