import React from 'react'
import { useState } from 'react'
import './Todolist.css';
export const Todolist = () => {

     const [list,setlist]=useState([])
     const [inputVal,setInputVal]=useState();
     const [addbtn,setAddBtn]=useState('Add');
     const [indx,setIndx]=useState();
     const [disablebtn,setDisablebtn]=useState(false);

     

     function addition()
     {
        var input=document.getElementById('add').value;
        setlist([...list,input]);
     }
     function deletion(e,index)
     {
   
      // var newlist=list?.filter((value,idx)=>value!=list[index]);
      var newlist=list?.filter((value,idx)=>idx!=index);
      setlist(newlist);
      console.log(newlist);
     }


     function modification(e,index)
     {
      setDisablebtn(true);
      setAddBtn('save');
      var val=list[index];
      var input_val=document.getElementById('add');
      input_val.value=val;
     setIndx(index);
   
      
     }
     function modified()
     {
      
      var val=document.getElementById('add').value;
      var llist=[];
      for(var i=0;i<list.length;i++)
      {
        llist.push(list[i]);
        

      }
      llist[indx]=val;
      setlist(llist);
      setAddBtn('Add');
      setDisablebtn(false);
      var in_val=document.getElementById('add');
      in_val.value=null;

     }

    
     
  return (
    <div id="outer">
      <div id="id1">Project 4 :Shopping List</div>
        <div id="id2">
            <div id="id3">Items To Buy</div>
            <input placeholder='Add a new item' id='add' ></input>
            <button onClick={ addbtn=='Add'?addition:modified} >{addbtn}</button>
            
        </div>
        <div id="id5">
            {list?.map((items,index)=><p id="id4">{items}
            <button onClick={e=>deletion(e,index)} disabled={disablebtn?true:false}>Del</button>
            <button onClick={e=>modification(e,index)} >modify</button>
            </p>)}
        </div>
        
    </div>
  )
}

