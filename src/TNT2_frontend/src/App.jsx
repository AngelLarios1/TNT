import { useEffect, useState } from 'react';
import { useRestActor } from "@bundly/ares-react";

function App() {
  const backend = useRestActor("backend");

  useEffect(() => {
    const res = backend.get("/working");
    console.log(res)
  }, [])
  

  return(
    <div>
    <h1>Hola</h1>
    <p>Working</p>
    </div>
  )
}

export default App;