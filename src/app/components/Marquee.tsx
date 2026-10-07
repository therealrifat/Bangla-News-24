
import Link from 'next/link';
import MarqueeText from 'react-marquee-text';

export  const getHeadings = async()=>{
    const res = await fetch("https://news-api-v2.vercel.app/api/news")
    const data = await res.json()
    return data.data
}

export interface IHeading {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}

const MarqueeTexts = async() => {
    const headings = await getHeadings()
    const topTenHeadings = headings.slice(0, 10)
    // console.log(topTenHeadings)

    return (
        <div className='bg-red-700 sticky top-0 z-50' >
            <div className=' flex max-w-7xl mx-auto items-center text-white'>
            <p className=' bg-red-900 py-2 px-2'>সর্বশেষ</p>
            <MarqueeText className='' duration={10} direction='right' > {topTenHeadings.map((item :IHeading, ind: number) => <Link key={ind} href={`/news/${item.id}`}><span >{item.title} <span className=' mx-2'>●</span> </span></Link>)}</MarqueeText>
        </div>
        </div>
        
    );
};

export default MarqueeTexts;