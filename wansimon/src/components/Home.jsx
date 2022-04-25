import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <main>
        <h2>Welcome to the homepage</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
