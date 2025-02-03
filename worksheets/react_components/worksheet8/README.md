# About

This is a simple Ionic 7 _"todo-list"_ mobile application built in Typescript and ReactJS framework. The aim of this application is to serve as a demo for my students sitting for the **Introduction to Mobile Applications Development** unit in college.

## [Demo](https://roaring-bunny-dacca9.netlify.app/)

Install ⚡ `npm install`

Launch 🚀 `ionic serve`

## Project Requirements

1. [NodeJS](https://nodejs.org/en/)

Make sure you installed node and node package manager using `npm -v` and `node -v`

2. [Ionic framework](https://ionicframework.com/getting-started)

```
npm i -g @ionic/cli
```

## Setup the project

```ts
ionic start todoApp blank --type=react
```

## Project Structure and files to add

```
- public
- /assets               // images
-  /icons               // favicon.ico for example
- index.html            // the html rendered webpage
- src                   // root folder
- /components           // where all the components reside
-  /TodoList            //  1. create new folder inside ./src/components/ call it TodoList
-  /TodoList.tsx        //  2.  create new file inside /src/components/TodoList call it TodoList.tsx
- /pages                // where all pages reside
-  /Todo.tsx            //  3. create new file inside ./src/pages/Todo call it Todo.tsx
- /theme                // Where ionic app.css styles reside
-   /variables.css      // ionic default css variables for dark or light mode
- App.tsx               // Where the application component resides, the ionic router
- index.tsx             // Where the application renders in the index.html <div id="root" ></div>
```

### References

1. [How TO - Responsive Text W3Schools](https://www.w3schools.com/howto/howto_css_responsive_text.asp)
2. [Theming Basics Ionic-framework Colors](https://ionicframework.com/docs/theming/basics)
3. [Theming Basics Ionic-framework Colors customziation](https://ionicframework.com/docs/theming/colors)
4. [Colors - Ionic](https://ionicframework.com/docs/theming/colors)
5. [Ionic - Inputs](https://ionicframework.com/docs/api/input)
6. [Ionic - IonCheckBox](https://ionicframework.com/docs/api/checkbox)
7. [Ionic -ion-grid](https://ionicframework.com/docs/api/grid)

#### 🔥 James Attard 2024
