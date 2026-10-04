import React from 'react';
import Marquee from 'react-fast-marquee';

const getHeadings = async()=>{
    const res = await fetch("https://news-api-v2.vercel.app/api/news")
    const data = await res.json()
    return data.data
}


const MarqueeText = async() => {
    const headings = await getHeadings()
    const topTenHeadings = headings.slice(0, 10)
    // console.log(topTenHeadings)

    return (
        <div className='bg-red-700 py-2 text-white flex items-center'>
            <p className='text-right'>sobseh</p>
            <Marquee className=' max-w-7xl mx-auto' speed={150} direction='left'> {topTenHeadings.map((item, ind: number) => <span key={ind}>{item.title} <span className=' mx-2'>●</span> </span>)}</Marquee>
        </div>
    );
};

export default MarqueeText;