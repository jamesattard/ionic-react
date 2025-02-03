import {
  IonAlert,
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useState } from "react";

const TodoListSlider = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSlide = (event: any, index: number) => {
    if (event.detail.amount > 100) {
      handleDelete(index);
    }
  };

  const renderTodoList = () => {
    const renderItems = [];
    for (let index = 0; index < todos.length; index++) {
      renderItems.push(
        <IonItemSliding
          key={index}
          onIonDrag={(event) => handleSlide(event, index)}
        >
          <IonItem key={index}>
            <IonCheckbox
              key={"cb" + index}
              aria-label="label"
              slot="start"
            ></IonCheckbox>
            <IonLabel>{todos[index]}</IonLabel>
            <IonButton slot="end" onClick={() => handleDelete(index)}>
              Delete
            </IonButton>
          </IonItem>
          <IonItemOptions side="end">delete</IonItemOptions>
        </IonItemSliding>
      );
    }
    return renderItems;
  };

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
    setTodos(todosArray);
  };

  const addTodo = () => {
    if (newTodo === "") {
      setShowAlert(true);
      return;
    }

    const todosArray = todos;
    todosArray.push(newTodo);
    setTodos(todosArray);
    setNewTodo("");
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
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
          {renderTodoList()}
          <IonItem>
            <IonInput
              placeholder="Add new item"
              onIonInput={handleInput}
              value={newTodo}
            />
          </IonItem>
          <IonItem>
            <IonButton onClick={addTodo}>Add a new Todo</IonButton>
          </IonItem>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={handleAlertDismiss}
            header="Error"
            message="You must enter a Todo"
            buttons={["OK"]}
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TodoListSlider;
