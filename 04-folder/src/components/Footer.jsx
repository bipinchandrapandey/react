import React from "react";

import "./Footer.css";
const Footer = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="footer">
      <p>
        Total: {total} | Completed: {completed}
      </p>
    </div>
  );
};

export default Footer;
