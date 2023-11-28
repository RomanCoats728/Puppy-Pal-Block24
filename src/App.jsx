import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setfeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
  
    <div className="pupCard3">
      <h1>Welcome to Puppy-Pals</h1>
      <div className="pupCard">
        {featPupId && (
          <div className="pupList">
            <h2 className="pupName">{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {puppies.map((puppy) => (
          <p onClick={() => setfeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
      </div>
    </div>
  );
}


export default App;
