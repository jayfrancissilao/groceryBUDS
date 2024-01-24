import React, { useState } from "react";
import GroceryItemComponent from "./GroceryItemComponent";
import { v4 as uuid } from "uuid";

const GroceryComponent = () => {
  // create a state for INPUT item
  const [item, setItem] = useState("");
  // create a state for LIST of item
  const [groceryItems, setGroceryItems] = useState([""]);
  // 03.1 - declare the handleAddItem
  // ADD ERROR HANDLE
  const [errors, setErrors] = useState("");

  const handleAddItem = () => {
    if (item) {
      //! dito add natin si item kay groceryItems using spread Op,
      //! npm uuid to create ID for item and import on the top
      setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
      // para kapag nag ka macleclear yung input
      setItem("");
      setErrors("");
    } else {
      setErrors("MAG TYPE KA MUNA BUGOk");
    }
  };

  // 05 - declare handleEditItem
  const handleEditItem = (id, newItem) => {
    const updateGroceryItems = groceryItems.map((item) => {
      if (item.id === id) {
        // return object kasi array to
        return { ...item, name: newItem };
      }
      // pag di tugma sa id return yung buong item
      return item;
    });
    setGroceryItems(updateGroceryItems);
  };
  // 06 - declare handleDeleteItem
  const handleDeleteItem = (removedId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== removedId);
    setGroceryItems(filteredItems);
  };
  return (
    <div className="grocery-buddy">
      <h1>Grocery Buddy</h1>
      <div className="input-section">
        <div className="input-container">
          {/* 01 - value to track the item in state  */}
          {/* 02 - add event handler to track the changes  */}
          <input
            type="text"
            placeholder="Enter Item..."
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          {/* 03 - if u need to add item u need to add event handler */}
          <button onClick={handleAddItem} className="btn-add">
            Add Items
          </button>
        </div>
      </div>
      {/* 04 - display the groceryItenms here in UI */}
      {/* error */}
      <div>{errors ? <p>{errors}</p> : null}</div>

      <ul className="grocery-list">
        {groceryItems.map((item, i) => (
          <GroceryItemComponent
            key={i}
            // props
            item={item}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default GroceryComponent;
