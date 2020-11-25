import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
// import { useParams } from "react-router-dom";

import "./ChatScreen.css";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Debbie",
      image: "...",
      message: "what's up",
    },
    {
      message: "I'm good",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  function handleSend(e) {
    e.preventDefault();
    inputValue && setMessages([...messages, { message: inputValue }]);
    setInputValue("");
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((data) =>
        data.name ? (
          <div className="chatScreen__msg">
            <Avatar
              className="chatScreen__image"
              alt={data.name}
              src={data.image}
            />
            <p className="chatScreen__text">{data.message}</p>
          </div>
        ) : (
          <div className="chatScreen__msg">
            <p className="chatScreen__hostText">{data.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="chatScreen__inputField"
            placeholder="Type a message"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
