import Image from "next/image";
import MarqueeTexts, { getHeadings, IHeading } from "./components/Marquee";
import MostRead from "./components/MostRead";

export default async function Home() {
  const headingData = await getHeadings();

  const [firstHeading, ...othersHeadings]: [
    firstHeading: IHeading,
    othersHeadings: IHeading,
  ] = headingData.slice(0, 5);
  // console.log(firstHeading); 
  console.log(othersHeadings);

  return (
    <div className=" ">
      <MarqueeTexts />
      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto my-3 ">
        <div className="grid grid-cols-2  h-auto col-span-2   ">
          {/* first big card  */}
          <div className=" col-span-1 h-105 rounded-lg overflow-hidden border border-gray-300 bg-gray-50 space-y-2 my-2  mx-2">
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
            {othersHeadings.map((item, ind) => <div key={ind} className=" border-b border-b-gray-400 p-1.5">
              <span className="text-sm">প্রধান খবর</span>
              
              <h1>{item.title}</h1></div>)}
          </div>
        </div>
        <div className=" grid-cols-1 border rounded-sm border-gray-300 h-auto my-2">
          <MostRead/> 


        </div>
          
      </div>
    </div>
  );
}
