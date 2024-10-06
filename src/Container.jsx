import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");

  const stat = {
    numberWords : text.split(/\s/).filter((word) => word !== "").length,
    numberCharacter : text.length,
    numberOfFacebook : 2200 - text.length,
    numberOfInstagram : 280 - text.length
  }

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stat={stat} />
    </main>
  );
}
