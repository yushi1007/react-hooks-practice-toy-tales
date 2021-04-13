import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onUpdateToy }) {

  const toyList = toys.map((t) => {
    return (
      <ToyCard 
      key={t.id}
      toy={t}
      name={t.name}
      image={t.image}
      likes={t.likes}
      onDelete={onDelete}
      onUpdateToy={onUpdateToy}
      />
    )
  })

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
