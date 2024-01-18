import React from "react";
import { useEmoji } from "../context/EmojiContext";

const Emoji = () => {
  const { emoji, changeMood } = useEmoji();

  return (
    <div>
      <h1>{emoji}</h1>
      <button onClick={changeMood}>Change Emoji</button>
    </div>
  );
};

export default Emoji;