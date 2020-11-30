import React from "react";
import Navbaritems from "./Navbaritems";

export default function Navbar() {
  return (
    <div
      className={
        "flex justify-center border-2 border-black w-3/4 m-auto p-5 mt-10"
      }
    >
      <h1 className={"text-4xl ml-80 pt-2 font-medium"}>Paper Trader</h1>
      <ul className={'flex ml-24 ml-60 justify-center text-lg'}>
        <li className={'m-4'}><a href='#'>Home</a></li>
        <li className={'m-4'}><a href='#'>About</a></li>
        <li className={'m-4'}><a href='#'>Login</a></li>
      </ul>
    </div>
  );
}
