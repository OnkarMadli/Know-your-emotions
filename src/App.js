import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😋": "yum yum",
  "🤑": "money money",
  "👻": "booo",
  "🙃": "whaaaat",
  "🤣": "LMAO",
  "😛": "Haha baeeee"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "I don't understand you!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Inside outt!</h1>
      <input onChange={emojiInputHandler} />
      <h2> meaning {meaning} </h2>
      <h3>Emoji we know</h3>
      {emojis.map((emoji) => {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
