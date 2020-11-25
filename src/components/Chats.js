import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name={"Mark"}
        msg={"Waspapping"}
        timestamp={"40 sec ago"}
        profilePic={"https://source.unsplash.com/avatar"}
      />
      <Chat
        name={"Debbie"}
        msg={"What's good"}
        timestamp={"5 sec ago"}
        profilePic={"https://source.unsplash.com/faces"}
      />{" "}
      <Chat
        name={"Michelle"}
        msg={"Hello world"}
        timestamp={"59 sec ago"}
        profilePic={"https://source.unsplash.com/user"}
      />{" "}
      <Chat
        name={"Natasha"}
        msg={"I'm syntactic"}
        timestamp={"34 sec ago"}
        profilePic={"https://source.unsplash.com/person"}
      />
    </div>
  );
};

export default Chats;
