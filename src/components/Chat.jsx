import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="info">
          <img src="" alt="" />
          <span>name</span>
        </div>
        <div className="chatIcons">
          <MenuIcon />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
