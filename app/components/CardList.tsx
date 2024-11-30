"use client";
import { useSearchParams } from "next/navigation";
import { REACT_CARDS } from "../react-cards";
import Card from "./Card";

export default function CardList() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter");

  const filteredCards = activeFilter
    ? REACT_CARDS.filter((card) => card.category === activeFilter)
    : REACT_CARDS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCards.map((card) => (
        <Card key={card.name} {...card} />
      ))}
    </div>
  );
}
