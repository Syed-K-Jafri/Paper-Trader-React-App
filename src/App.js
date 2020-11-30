import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";

/*Below is the flexbox way to design the page using tailwind

export default function App() {
  return (
    <div className="App">
      <div className={"flex"}>
        <div className={"w-full border flex justify-center p-5"}><Navbar /></div>
      </div>

      <div className={"flex"}>
        <div className={"w-2/3 border flex justify-center p-5"}>Left box</div>

        <div className={"w-1/3 border flex justify-center p-5 "}>Right box</div>
      </div>
    </div>
  );
}*/

//Below is the css grid way of designing the page

export default function App() {
  return (
<div>
    <div><Navbar /></div>

    <div class="grid grid-cols-12 gap-0 w-3/4 h-96 m-auto">

      <div className={"col-span-12 md:col-span-7 border-2 border-black flex justify-center "}>
      </div>

      <div className={"col-span-12 md:col-span-5 border-2 border-black flex justify-center "}>
      </div>
    </div>
    </div>
  );
}
