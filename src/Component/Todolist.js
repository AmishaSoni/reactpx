import React from 'react'
import { useState } from 'react'
export const Todolist = () => {

     const [list,setlist]=useState([{}])
     function addition()
     {
        var input=document.getElementById('add').value;
        console.log('input-->',input);
        console.log('list-->',list);
        setlist([{...list,input}]);
     }
     
  return (
    <div>
        <div>
            <input placeholder='List to do' id='add'></input>
            <button onClick={addition}>Add</button>
        </div>
        <div>
            
        </div>
    </div>
  )
}

