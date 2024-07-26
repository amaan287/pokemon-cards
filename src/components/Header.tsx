import React from "react";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <div className="h-[50px] w-full border-b-2 border-border rounded-lg px-4 justify-between items-center flex">
      <a href={"/"}>
        <h1 className="text-xl font-semibold">Pokemon Cards</h1>
      </a>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
