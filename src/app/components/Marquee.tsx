
import MarqueeText from 'react-marquee-text';

const getHeadings = async()=>{
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
        <div className='bg-red-700 py-2 text-white flex justify-center items-center'>
            <p className=' bg-red-900 '>সর্বশেষ</p>
            
            <MarqueeText className=' max-w-7xl mx-auto' duration={10} direction='right' > {topTenHeadings.map((item :IHeading, ind: number) => <span key={ind}>{item.title} <span className=' mx-2'>●</span> </span>)}</MarqueeText>
        </div>
    );
};

export default MarqueeTexts;