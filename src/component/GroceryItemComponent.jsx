import React, { useState } from "react";

// this component here is INDIVIDUAL
// paremeter u need to destructing the item
const GroceryItemComponent = ({ item, handleEditItem, handleDeleteItem }) => {
  // create a state to track the edit button was triggerd
  const [isEditing, setIsEditing] = useState(false);
  // create a state to track the input for new item update
  const [newItem, setNewItem] = useState(item.name);

  // create a state to track edit error
  const [errors, setErrors] = useState("");

  // create a onEdt Function here
  const onEdit = () => {
    if (newItem) {
      // pasa natin yung id and new item value
      handleEditItem(item.id, newItem);
      setIsEditing(false);
      setErrors("");
    } else {
      setErrors("DAPAT HINDI EMPTY BUGOK");
    }
  };
  return (
    <>
      <li>
        {/* how to display  input   */}
        {isEditing ? (
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}
        <div>
          {/* next is to display the edit */}
          <button
            onClick={() => {
              isEditing ? onEdit() : setIsEditing(true);
            }}
            className="btn-edit"
          >
            {isEditing ? "Save" : " Edit "}
          </button>
          <button
            onClick={() => handleDeleteItem(item.id)}
            className="btn-delete"
          >
            DELETE
          </button>
        </div>
      </li>
      <div>
        {errors ? <p>{errors}</p> : null}
      </div>
    </>
  );
};

export default GroceryItemComponent;
