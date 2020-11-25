import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Chat.css";
const Chat = ({ name, msg, profilePic, timestamp }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(profilePic);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar
          className="chat__image"
          alt={name}
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{msg}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
