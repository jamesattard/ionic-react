import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemGroup,
  IonItemOptions,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useState } from "react";

const TodoListExample = () => {
  const [todos, setTodos] = useState<string[]>(function () {
    const storedArray = localStorage.getItem("todosArray");
    return storedArray ? JSON.parse(storedArray) : [];
  });
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInput = (event: any) => {
    setNewTodo(event.target.value);
  };

  const handleDelete = (indexToDelete: number) => {
    const todosArray = [];
    for (let index = 0; index < todos.length; index++) {
      if (index !== indexToDelete) {
        todosArray.push(todos[index]);
      }
    }
    localStorage.setItem("todosArray", JSON.stringify(todosArray));
    setTodos(todosArray);
  };

  const handleAddTodo = () => {
    const todosArray = todos;
    todosArray.push(newTodo);
    localStorage.setItem("todosArray", JSON.stringify(todosArray));
    setTodos(todosArray);
    setNewTodo("");
  };

  const renderSimpleTodoList = () => {
    const renderItems = [];
    for (let index = 0; index < todos.length; index++) {
      renderItems.push(
        <IonItemGroup key={index}>
          <IonItem key={index}>
            <IonLabel>{todos[index]}</IonLabel>
            <IonButton slot="end" onClick={() => handleDelete(index)}>
              Delete
            </IonButton>
          </IonItem>
          <IonItemOptions side="end">delete</IonItemOptions>
        </IonItemGroup>
      );
    }
    return renderItems;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {renderSimpleTodoList()}
          <IonItem>
            <IonInput
              placeholder="Add new item"
              onIonInput={handleInput}
              value={newTodo}
            />
          </IonItem>
          <IonItem>
            <IonButton onClick={handleAddTodo}>Add a new Todo</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TodoListExample;
