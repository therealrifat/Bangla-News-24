import React from "react";
import { ISeletedNews } from "./page";
import Image from "next/image";
import Link from "next/link";
interface INewsCard {
  itemNews: ISeletedNews;
  category: string;
}

const NewsCard = ({ itemNews, category }: INewsCard) => {
  return (
    <Link href={itemNews.link}>
      <div className=" group h-75 border border-gray-300 mt-2 rounded-xl overflow-hidden">
      <div className=" overflow-hidden">
        <Image
        src={itemNews.imageUrl}
        width={100}
        height={100}
        alt={itemNews.title}
        className="w-67.25 h-40 object-center transition-transform duration-300 ease-in-out group-hover:scale-115  "
      />
      </div>
      <div className="p-2">
         <span className="text-sm">{category}</span>
         <h1 className="font-bold text-[14px]">{itemNews.title}</h1>
         <p className="text-[12px] line-clamp-2">{itemNews.description}</p>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;
