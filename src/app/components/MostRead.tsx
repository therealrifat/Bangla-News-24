import Link from 'next/link';
import React from 'react';

export interface IMostRead {
  id: string
  title: string
  description: null
  link: string
  imageUrl: null
  imageAlt: null
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: null
  source: string
  rank: number
}

const getMostRead = async () =>{
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    return data.data
}


const MostRead = async() => {
    const mostRead = await getMostRead()
    return (
        <div className='p-2'>
            <p className='font-bold text-lg '>সর্বাধিক পঠিত</p>
            {mostRead.map((item: IMostRead , ind: number) => <Link key={ind} href={`/news/${item.id}`}> <div  className='flex gap-2'><span >{ind+1}</span><h1 className='text-lg'> {` ${item.title}`}</h1></div></Link> )}
        </div>
    );
};

export default MostRead;