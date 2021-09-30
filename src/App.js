import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😋": "yummy",
  "🤑": "money money",
  "👻": "ghost",
  "🙃": "whaaaat",
  "🤣": "LMAO",
  "😛": "trickedYou",
  "🙂": "Smiling Face",
  "😗": "Kissing Face",
  "😟": "Worried Face",
  "😎": "Swag Face"
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
      <input class="input" onChange={emojiInputHandler} />
      <h2> meaning: {meaning} </h2>
      <h3>Emojis we know</h3>
      {emojis.map((emoji) => {
        return (
          <span class="emoji" onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
