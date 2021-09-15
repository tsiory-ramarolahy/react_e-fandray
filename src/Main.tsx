import React from 'react';
import './index.css';
import { useState } from "react";

function Main() {
     
    let i = 20;
    let m = i.toString();
    const [message, setMessage] = useState('<div class="mess" style="top:'+m+'px"><p>Bonjour !</p></div>'); 
    const [text, setText] = useState('')
    console.log(i);

    console.log(message);
    const handleClick = () => {
        console.log(i);
        i = i + 60;
        let k = i.toString();
        let tmp = message + ' <div class="mess" style="top:'+k+'px"><p>'+text+'</p></div>';
        setMessage(tmp);
        console.log(i);
    }

  return (
    <div className="mainmain">
        {/*
        <div className="mess n1">
            <p>Testeux</p> 
        </div>
        <div className="mess n2">
            <p>Testeux</p> 
        </div> 
        <div dangerouslySetInnerHTML = {message} /> */}
        <div dangerouslySetInnerHTML={{ __html: message }} />
        <div className="champ">
            <input type="text" name="texte" id="texte" className="dchamp" placeholder="Écrire un message ..." onChange={event => setText(event.target.value)}/>
            <button className="button dchamp" onClick={handleClick}>ENVOYER</button>
        </div>
    </div>
  );
}

export default Main;