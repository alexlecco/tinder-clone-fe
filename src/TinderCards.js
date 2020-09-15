import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const defaultPeople = [
  {
    name: "Elizabeth Olsen",
    url:
      "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/vengadores-infinity-war-elizabeth-olsen-entrevista/138012239-1-esl-ES/Elizabeth-Olsen-Ya-era-hora-de-que-los-hombres-tuviesen-que-pensar-si-algo-es-apropiado-o-no.jpg",
  },
  {
    name: "Karen Gillan",
    url:
      "https://i.insider.com/5cd10a1c021b4c656431c473?width=1100&format=jpeg&auto=webp",
  },
  {
    name: "Scarlett Johansson",
    url:
      "https://static3.abc.es/media/estilo/2019/09/05/Scarlett-Johansson-knbC--1200x630@abc.jpg",
  },
];

function TinderCards() {
  const [people] = useState(defaultPeople);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
