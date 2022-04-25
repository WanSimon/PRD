import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div>About</div>
      <main>This is React-Router,the version is newest</main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
