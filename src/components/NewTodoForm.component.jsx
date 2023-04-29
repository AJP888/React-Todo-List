import React, { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  //HandleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
};

export default NewTodoForm;

// NewTodoForm allows us to write into the input text bar and maniuplate data
// we use props to send down the onSubmit

// we have a function handSubmit:
// it has a e.preventDefault() that stops the daa from re-rendering
// we have a if statemtn that if newItem === '' then we return
// setNewItem also holdsa ''

// within the form we have a onSubmitHandle that holds a handleSumbit with a className for stlying
//then a div for styling
// the input bar has a value={newItem} a newItem for updating
// onChange is used to target the bar using onChange(e => setNewItem(e.target.value)) this allows us to change the state by adding a setNewItem
// type='text' allows us to write text in the input
// id is used connect the input to label  htmlFor='item'  id='item
// <button>Add</Button> the button has a className
