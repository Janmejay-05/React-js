import React, { useEffect, useState } from "react";

const Container = () => {
  const [inputData, setIputData] = useState("");
  const [Todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolistData")) || []
  );
  const [editIndex, setEditIndex] = useState("");
  console.log(editIndex);

  function handleTodolist() {
    setTodolist([inputData, ...Todolist]);
    setIputData("");
  }

  console.log(Todolist);
  console.log(inputData);

  useEffect(() => {
    localStorage.setItem("todolistData", JSON.stringify(Todolist));
  }, [Todolist]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter something"
        value={inputData}
        onChange={(element) => {
          setIputData(element.target.value);
        }}
      />
      <button id="addbtn" onClick={handleTodolist}>
        Add Data
      </button>
      <button
        id="updatebtn"
        style={{ display: "none" }}
        onClick={() => {
          let updatedvaue = Todolist.map((e, i) =>
            i == editIndex ? inputData : e
          );
          setTodolist(updatedvaue);
          setIputData("");
          console.log(updatedvaue);
          document.getElementById("addbtn").style.display = "inline";
          document.getElementById("updatebtn").style.display = "none";
        }}
      >
        Update
      </button>

      <div>
        {Todolist.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
              <button
                onClick={() =>
                  setTodolist(Todolist.filter((e, i) => i !== index))
                }
              >
                delete
              </button>
              <button
                onClick={() => {
                  setIputData(
                    Todolist.filter((e) => {
                      if (e === element) {
                        return e;
                      }
                    })
                  );
                  document.getElementById("addbtn").style.display = "none";
                  document.getElementById("updatebtn").style.display = "inline";
                  setEditIndex(index);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
