import React, { useState, useEffect } from "react";

export default function Graph() {
  return (
    <div>
      <br />
      <br />
      <form>
        <input
          type="text"
          placeholder=" Search..."
          className={"border-2 border-black rounded-lg w-72 h-8 "}
        />
        <button
          type="button"
          style={{ color: "white", backgroundColor: "green" }}
          className={"border-2 border-black rounded-md py-0 px-2.5 ml-2"}
        >
          Get Quote
        </button>
      </form>
    </div>
  );
}
