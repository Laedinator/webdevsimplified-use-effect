import React, { useEffect, useState } from "react";

//to make it work, change the name to App.js

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  //everytime the app renders, it runs the useEffect.
  //You can add a second parameter in an array and if the data changes there, useEffect is triggered.
  //you can leave the array empty and it only gets run when the component renders the first time (behaves like onMount)
  //if the value in the array changes, then you do something.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + resourceType)
      .then(console.log("fetching data"))
      .then((response) => response.json())
      .then((json) => setItems(json));
    return console.log("clean up before fetching new data");
  }, [resourceType]);

  return (
    <>
      <div className="App">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
