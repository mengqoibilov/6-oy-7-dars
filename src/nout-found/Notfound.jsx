import React from "react";
import "./nout.css"

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-header">
        <h1>404 ERROR PAGE</h1>
        <p>
          Cute examples of the HTTP standard response code which informs the
          user they have clicked on a broken link.
        </p>
      </div>
      <div className="curated">
        <span>Curated by</span>
        <a
          href="https://www.awwwards.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          awwwards.
        </a>
      </div>
    </div>
  );
}

export default NotFound;
