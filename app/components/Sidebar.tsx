"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { REACT_CARDS } from "../react-cards";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter");

  const displayedCategories = new Set();

  return (
    <aside className="flex flex-col p-4 space-y-10">
      <Link
        href="/"
        className={`flex items-center space-x-2 capitalize ${
          !activeFilter ? "text-black font-bold" : "text-gray-800"
        }`}
      >
        <p>All</p>
      </Link>

      {REACT_CARDS.map((data) => {
        if (displayedCategories.has(data.category)) {
          return null;
        }
        displayedCategories.add(data.category);

        const isActive = activeFilter === data.category;

        return (
          <Link
            href={`/?filter=${encodeURIComponent(data.category)}`}
            key={data.category}
            className={`flex items-center space-x-2 capitalize ${
              isActive ? "text-black font-bold" : "text-gray-800"
            }`}
          >
            <p>{data.category}</p>
          </Link>
        );
      })}
    </aside>
  );
}
