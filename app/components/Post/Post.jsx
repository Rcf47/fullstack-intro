import React from "react";

function Post({ id, title, content, authorName }) {
  return (
    <div
      style={{ border: "1px solid #89B4FA", padding: "15px", margin: "0 10px" }}
    >
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Post;
