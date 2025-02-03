import React, { useState, useEffect } from "react";
import { IonList, IonItem, IonLabel } from "@ionic/react";

const AutoRemoveExample = () => {
  // State variable to store an array of items
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // Function to filter and remove an item based on its id
  const handleRemoveItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  // Use useEffect to automatically remove a specific item (e.g., item with id 2)
  useEffect(() => {
    const itemIdToRemove = 2;
    handleRemoveItem(itemIdToRemove);
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div>
      <h2>Auto Remove Example</h2>

      {/* Ionic List component to display items */}
      <IonList>
        {/* Use map function to loop through items and display them */}
        {items.map((item) => (
          <IonItem key={item.id}>
            <IonLabel>{item.name}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default AutoRemoveExample;
