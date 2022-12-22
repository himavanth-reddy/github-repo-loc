import React from "react";
export default function HomePage() {
  return (
    <div className="homepage">
      <span className="homepage-text">
        Count lines of code in a GitHub repository
      </span>
      <div>
        <input className="searchBar" placeholder="facebook/react" />
      </div>
    </div>
  );
}
