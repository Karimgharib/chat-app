import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">React Chat</span>
      <div className="user">
        <img src="" alt="" />
        <span>name</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
