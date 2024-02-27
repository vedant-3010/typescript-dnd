import React from "react";
import "./App.css";

const App = () => {
  let name: string;
  name = "John Doe";

  let age: number;
  age = 30;

  let isMarried: boolean;
  isMarried = false;

  let hobbies: string[];
  hobbies = ["reading", "coding", "traveling"];

  let address: [string, number];

  let janie: object;
  
  

  type Person = {
    name: string;
    age?: number;
    isMarried: boolean;
    hobbies: string[];
    address: [string, number];
  };

  let person: Person;

  person = {
    name: "John Doe",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "coding", "traveling"],
    address: ["New York", 10001],
  };

  let people: Person[];


  return (
    <div>
      <h1>React App with typescript</h1>
    </div>
  );
};

export default App;
