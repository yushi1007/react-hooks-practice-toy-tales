import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((toys) => {
        setToys(toys);
      });
  },[])

  const handleForm = (newToy) => {
    setToys([...toys, newToy])
}

function handleDeleteToy(toyToDelete) {
  const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
  setToys(updatedToys);
}

function handleUpdateToy(updatedToy) {
  const updatedToys = toys.map((toy) =>
    toy.id === updatedToy.id ? updatedToy : toy
  );
  setToys(updatedToys);
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleForm}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onUpdateToy={handleUpdateToy}  onDelete={handleDeleteToy} toys={toys} />
    </>
  );
}

export default App;
