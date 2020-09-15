import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const defaultPeople = [
  {
    name: "Elizabeth Olsen",
    url:
      "https://pley.today/__export/1594042769444/sites/mui/img/2020/07/06/elizabeth-olsen.jpg_1819317911.jpg",
  },
  {
    name: "Karen Gillan",
    url:
      "https://i.insider.com/5cd10a1c021b4c656431c473?width=1100&format=jpeg&auto=webp",
  },
  {
    name: "Scarlett Johansson",
    url:
      "https://i.pinimg.com/originals/62/7f/6f/627f6f3755582d28cb83194896c8fa50.jpg",
  },
];

function TinderCards() {
  const [people, setPeople] = useState(defaultPeople);

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
