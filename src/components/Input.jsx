import { AttachFile, Image } from "@mui/icons-material";
import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Message" />
      <div className="send">
        <div className="attach">
          <AttachFile />
        </div>
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <Image />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
