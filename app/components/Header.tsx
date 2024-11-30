"use client";

import ReactSvg from "./ReactSvg";
import { User, ShoppingBasket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1200px] flex items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <ReactSvg size={40} />
          <h1 className="text-xl font-bold text-gray-800">ReactJourney</h1>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <ShoppingBasket
            size={24}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <User
            size={24}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
