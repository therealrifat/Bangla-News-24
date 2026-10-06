import Image from "next/image";

import MostRead from "./components/MostRead";
import MarqueeTexts, { IHeading } from "./components/Marquee";
import NewsCard from "./NewsCard";

export interface ISeletedNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}


// data fetch
const getHomePageNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const allData = await getHomePageNews();
  const [firstHeading, ...othersHeading] = allData[0].articles;
  const othersHeadings = othersHeading.slice(0, 4);

  const selectedNews = allData[1];
  const bangladeshNews = allData[3]
  const indiaNews =allData[5]
  const worldNews =allData[6]
  // console.log(allData)

 

  return (
    <div className=" ">
      <MarqueeTexts />

      {/* Home page section    */}
      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto my-3 ">
        <div className="h-auto col-span-2">

          <div className="grid grid-cols-2">

            {/* first big card  */}
               <div className=" col-span-1 h-110 rounded-lg overflow-hidden border border-gray-300 bg-gray-50 space-y-2 my-2  mx-2">
              <Image
                src={firstHeading.imageUrl}
                alt={firstHeading.imageAlt}
                width={450}
                height={450}
              />
              <div className="px-5 text-left my-2">
                <span className="text-sm">প্রধান খবর</span>
                <h2 className=" text-xl">{firstHeading.title}</h2>
                <p className=" text-sm">{firstHeading.description}</p>
              </div>
            </div>

            {/* second text card */}

            <div className=" col-span-1 h-105 rounded-sm border border-gray-300 bg-gray-50 space-y-2 my-2 mx-2">
              {othersHeadings.map((item: IHeading, ind: number) => (
                <div key={ind} className=" border-b border-b-gray-400 p-1.5">
                  <span className="text-sm">প্রধান খবর</span>

                  <h1>{item.title}</h1>
                </div>
              ))}
            </div>


           

          </div>

          {/* নির্বাচিত খবর section */}

          <div className=" mt-10">
            <h2 className=" font-bold py-5">{selectedNews.title}</h2>
            <hr className="text-red-500 mb-5"></hr>
            <div className="grid grid-cols-3 gap-5">
              {selectedNews.articles.map((itemNews:ISeletedNews, ind: number)=><NewsCard key={ind} itemNews={itemNews} category={selectedNews.title} />)}
              </div>
          </div>

          {/* bangladesh news section */}
          <div className=" mt-10">
            <h2 className=" font-bold py-5">{bangladeshNews.title}</h2>
            <hr className="text-red-500 mb-5"></hr>
            <div className="grid grid-cols-3 gap-5">
              {bangladeshNews.articles.map((itemNews:ISeletedNews, ind: number)=><NewsCard key={ind} itemNews={itemNews} category={bangladeshNews.title} />)}
              </div>
          </div>

          {/* Indian News section  */}

          <div className=" mt-10">
            <h2 className=" font-bold py-5">{indiaNews.title}</h2>
            <hr className="text-red-500 mb-5"></hr>
            <div className="grid grid-cols-3 gap-5">
              {indiaNews.articles.map((itemNews:ISeletedNews, ind: number)=><NewsCard key={ind} itemNews={itemNews} category={indiaNews.title} />)}
              </div>
          </div>

          {/* world news section  */}

          <div className=" mt-10">
            <h2 className=" font-bold py-5">{worldNews.title}</h2>
            <hr className="text-red-500 mb-5"></hr>
            <div className="grid grid-cols-3 gap-5">
              {worldNews.articles.map((itemNews:ISeletedNews, ind: number)=><NewsCard key={ind} itemNews={itemNews} category={worldNews.title} />)}
              </div>
          </div>





          
        </div>
        
        
        <div className=" grid-cols-1 border rounded-sm border-gray-300 h-150 my-2">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
