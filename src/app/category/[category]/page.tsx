import { ISeletedNews } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryNews = async ({params}:{params:{category:string}} ) => {
    const {category}=await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${category}`)
    const data = await res.json()
    const categoryNews =data.data
    // console.log(categoryNews)


    return (
        <div className=' max-w-7xl mx-auto'>
            <div>
                <h3 className=' border-b-2 border-b-red-500 font-bold text-2xl my-2'>
                    {data.title}
                </h3>

                <div className='grid grid-cols-3 gap-5'>

                {categoryNews.map((itemNews:ISeletedNews, i: number)=> 
                <div key={i}>
                    <Link href={`/news/${itemNews.id}`}>
                    <div className=" group h-90 border border-gray-300 mt-2 rounded-xl overflow-hidden">
                          <div className=" overflow-hidden">
                            <Image
                            src={itemNews.imageUrl}
                            width={100}
                            height={100}
                            alt={itemNews.title}
                            className="w-115 h-55 object-center transition-transform duration-300 ease-in-out group-hover:scale-115  "
                          />
                          </div>
                          <div className="p-2">
                             <span className="text-[16px]">{data.title}</span>
                             <h1 className="font-bold text-[18px]">{itemNews.title}</h1>
                             <p className="text-[14px] line-clamp-2">{itemNews.description}</p>
                          </div>
                        </div>
                    
                    </Link>
                </div>)}
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;