import { useState } from "react";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import "./Home.css";

export default function Home() {
  const [input, setInput] = useState();

  let name: string;
  let age: number | string;
  let hobbies: string[];
  let role: [number, string];

  type Person = {
    name: string;
    age?: number;
  };

  let person: Person = {
    name: "minoka",
  };

  let lotsOfPeople: Person[];

  let printName: (name: string) => void;

  return (
    <div className="home">
      <h1>HomePage</h1>
      <ToDoForm setInput={setInput} input={input} />
    </div>
  );
}
