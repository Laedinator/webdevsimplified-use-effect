import React, { useEffect, useState } from "react";

//to make it work, change index.js to fit the document.

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //cleanup:
    //to remove the eventlistener, you can pass a return statement that wil run, when the component will be removed.
    //in this case we have to remove the EventListener.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}

export default App;
