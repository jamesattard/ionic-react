import React, { useState } from "react";
import { IonList, IonItem, IonLabel, IonButton } from "@ionic/react";

const SimpleListExample = () => {
  // State variable to store an array of items
  const [simpleList, setSimpleList] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // Function to render the list on the mobile's screen
  const renderTodoList = () => {
    const renderItems = [];
    // Create a new array to store the names from the simpleList
    for (let i = 0; i < simpleList.length; i++) {
      const item = simpleList[i];
      renderItems.push(
        <IonItem key={i}>
          <IonLabel>{item.name}</IonLabel>
          <IonButton
            slot="end"
            onClick={() => handleRemoveItem(i)}
            color="danger"
          >
            Delete
          </IonButton>
        </IonItem>
      );
    }
    return renderItems;
  };

  // Function to remove an item based on its id
  const handleRemoveItem = (itemToDeleteId: number) => {
    // setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    const simpleListArray = [];
    for (let index = 0; index < simpleList.length; index++) {
      if (index !== itemToDeleteId) {
        simpleListArray.push(simpleList[index]);
      }
    }
    setSimpleList(simpleListArray);
  };

  return (
    <div>
      <h2>Delete Item Example</h2>

      {/* Ionic List component to display items */}
      <IonList>{renderTodoList()}</IonList>
    </div>
  );
};

export default SimpleListExample;
