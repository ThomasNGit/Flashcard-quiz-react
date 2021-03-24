import React, { useEffect, useState } from "react";
import FlashCardList from "./components/FlashCardList";
import "./style/app.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
      console.log(res.data);
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }
  return (
    <div className="container">
      <FlashCardList flashcards={flashcards} />
    </div>
  );
}

export default App;
