"use client";

import { BookOpenText, PlusCircle } from "lucide-react";
import ReactSvg from "./ReactSvg";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CardProps {
  name: string;
  url: string;
  category: string;
}

export default function Card({ name, url, category }: CardProps) {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter");

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
        <p className="text-base font-bold">React</p>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold">
        {name}
      </p>
      <div className="flex w-full items-center gap-2">
        {!activeFilter && (
          <p className="line-clamp-1 text-start text-xs text-gray-400">
            {category}
          </p>
        )}
        <Link
          href={url}
          className="bg-gray-200 rounded px-3 py-1 flex items-center justify-center"
          target="_blank"
        >
          <BookOpenText size={16} />
        </Link>
        <Link
          href="/"
          className="bg-gray-200 rounded px-3 py-1 flex items-center justify-center"
        >
          <PlusCircle size={16} />
        </Link>
      </div>
    </div>
  );
}
