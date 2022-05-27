import React, { useState } from "react";

const Comments = ({ data }) => {
  // console.log("data:", data);
  const [see, setSee] = useState(false);

  if (data.replies) {
    return (
      <div className="container">
        <div className="top">
          <div className="comm">
            <span
              onClick={() => setSee(!see)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {see ? "hide replies" : "show replies"}
            </span>
            <div> {data.author}</div>
            <div> {data.points} points</div>
            <div> {data.timestamp.split(" ").splice(4, 1)}</div>
          </div>
          <div>
            {data.body}
            <br />
          </div>
        </div>

        <div style={{ display: show ? "block" : "none", paddingLeft: "5%" }}>
          {data.replies.map((item) => {
            return <Comments data={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="top" style={{ paddingLeft: "5px" }}>
        <div className="comm">
          <div> {data.author}</div>
          <div> {data.points} points</div>
          <div> {data.timestamp.split(" ").splice(4, 1)}</div>
        </div>
        <div>
          {data.body}
          <br />
        </div>
      </div>
    );
  }
};

export default Comments;
