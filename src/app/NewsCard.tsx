import React from "react";
import { ISeletedNews } from "./page";
import Image from "next/image";
interface INewsCard {
  itemNews: ISeletedNews;
  category: string;
}

const NewsCard = ({ itemNews, category }: INewsCard) => {
  return (
    <div className=" h-[280px] border border-gray-300 mt-2 rounded-xl overflow-hidden">
      <Image
        src={itemNews.imageUrl}
        width={100}
        height={100}
        alt={itemNews.imageAlt}
        className="w-[269px] "
      />
      <div className="p-2">
         <span className="text-sm">{category}</span>
         <h1 className="font-bold text-[14px]">{itemNews.title}</h1>
         <p className="text-[12px] line-clamp-2">{itemNews.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
