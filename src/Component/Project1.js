import React from "react";
import "./Project1.css";
import { useState } from "react";
import moment from "moment";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const Project1 = () => {
  const [list, setList] = useState([]);
  const [btn, setBtn] = useState("Add");
  const [indx, setIndx] = useState();
  const [doneList, setDoneList] = useState([]);
  const [list1, setList1] = useState([]);


  function addition() {
    var val_list = document.getElementById("listdiv3");
    setList([...list, val_list.value]);
    setList1([...list, val_list.value]);
    val_list.value = null;
  }
  function deletion(value, index) {
    var llist = list?.filter((val, idx) => idx != index);
    setList(llist);
    setList1(llist);
  }
  function modification(value, index) {
    var curr_val = list[index];
    var current_inp_val = document.getElementById("listdiv3");
    current_inp_val.value = curr_val;
    setBtn("Save");
    setIndx(index);
  }
  function modifying() {
    var llist = [];
    for (var i = 0; i < list.length; i++) {
      llist.push(list[i]);
    }
    var new_input_val = document.getElementById("listdiv3");
    llist[indx] = new_input_val.value;
    setList(llist);
    setList1(llist);
    setBtn("Add");
    var next_val = document.getElementById("listdiv3");
    next_val.value = null;
  }
  function showList(val, index) {
    var newDoneList = [];
    for (var i = 0; i < doneList.length; i++) {
      newDoneList.push(doneList[i]);
    }
    newDoneList.push(list[index]);
    setDoneList(newDoneList);
    console.log(doneList);
  }
  function showDoneList(e) {
    setList(doneList);
  }
  function showAllList(e) {
    setList(list1);
  }

  return (
    <>
      <h1 id="head1">To Do List</h1>
      <div id="listdiv1">
        <div id="listdiv2">
          <div>
            <input placeholder="Task to Do..." id="listdiv3"></input>
          </div>
          <div>
            <button id="listdiv4" onClick={btn == "Add" ? addition : modifying}>
              {btn}
            </button>
          </div>
        </div>
      </div>
      <div id="taskdiv1">
        <div id="taskdiv2">
          <h1>
            Tasks
            <button id="btn1" onClick={(e) => showAllList(e)}>All</button>
            <button id="btn2" onClick={(e) => showDoneList(e)}>Done</button>
          </h1>
        </div>
        <hr></hr>
        <div id="taskdiv3">
          {list?.map((items, index) => (
            <div id="taskdiv4">
              <input
                id="input_check"
                type="checkbox"
                onClick={(e) => showList(e, index)}
              />
              {items}
              <div id="taskdiv5">
                <button id="button1" onClick={(e) => modification(e, index)}>
                  <AiFillEdit />
                </button>
                <button id="button2" onClick={(e) => deletion(e, index)}>
                  <AiFillDelete />
                </button>
              </div>
              <div id="time">{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            </div>
          ))}
        </div>
        <hr></hr>
      </div>
    </>
  );
};
