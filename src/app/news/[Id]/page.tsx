import Image from 'next/image';
import React from 'react';
interface IImage {
  type: string
  url: string
  width: number
  height: number
  caption: null | string
  altText: string
  copyrightHolder: string
}

interface IText {
    type: string
    text: string
}



const DetailsPage =async ({params}:{params:{Id:string}}) => {
    const {Id}= await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${Id}`)
    const data = await res.json()
    const news = data.data
    const body = news.body
    // console.log(body)


    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center space-y-5'>
            <h1 className=' text-3xl font-bold w-175'>{news.title}</h1>
            <p className='w-175 text-lg'>{news.description.blocks[0].model.blocks[0].model.text}</p>
            <div>
                {
                    body.map((item:IImage | IText , ind:number) => <div key={ind} >
                        <div className='flex flex-col w-175'>
                            {item.type === "image" && "url" in item ? (
                                <div className='my-5'>
                                    <Image src={item.url} width={700} height={700} alt={item.altText} className=' rounded-2xl' />
                                    <p className='text-[14px] text-gray-500 mt-2'>{item?.caption}</p>
                                </div>
                            ):item.type === "text" && 'text' in item ? (
                                <div className='my-2'>
                                    <p>{item.text}</p>
                                </div>
                            ) : (
                                <div className='my-3'>
                                    { "text" in item && <span className=" text-lg font-bold">{item.text}</span>}
                                </div>
                            ) }
                        </div>
                    </div> )
                }
            </div>
            
        </div>
    );
};

export default DetailsPage;