import React, { useState } from "react";
import FlashCardList from "./components/FlashCardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return <FlashCardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Quanto fa 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Quanto fa 3+3?",
    answer: "6",
    options: ["5", "6", "7", "8"],
  },
];

export default App;
