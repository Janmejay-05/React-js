import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [inputData, setInputData] = useState("");
  const [Todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolistData")) || []
  );
  const [editIndex, setEditIndex] = useState("");
  const [Boolean, SetBoolean] = useState(false);
  console.log(editIndex);

  function handleData() {
    setTodolist([inputData, ...Todolist]);
    setInputData("");
  }
  function handleDelete(index) {
    let updatedvalue = Todolist.filter((e, i) => i !== index);
    setTodolist(updatedvalue);
  }
  function handleEdit(index) {
    setEditIndex(index);
    setInputData(Todolist[index]);
    SetBoolean(true);
  }
  function handleUpdate() {
    let updatedTodolist = Todolist.map((e, i) =>
      i == editIndex ? inputData : e
    );
    setTodolist(updatedTodolist);
    SetBoolean(false);
    setInputData("");
  }

  useEffect(() => {
    localStorage.setItem("todolistData", JSON.stringify(Todolist));
  }, [Todolist]);
  return (
    <div>
      <input
        type="text"
        placeholder="please enter value"
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
      {Boolean ? (
        <button onClick={() => handleUpdate()}>Update</button>
      ) : (
        <button onClick={handleData}>Add Data</button>
      )}

      <div>
        {Todolist.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
              <button onClick={() => handleDelete(index)}>delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
