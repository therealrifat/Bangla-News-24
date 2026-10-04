import Image from "next/image";
import Link from "next/link";

 interface ICategory {
      "slug": string,
      "title": string,
      "topicId": null,
      "url": string,
      "scrapable": boolean

 }

const getCategoris = async()=>{
    const res = await fetch("http://localhost:3000/categories.json")
    const data = await res.json()
    return data.data
  }

const Navbar = async() => {
  const categore = await getCategoris()
  const categoies =categore.filter((n: ICategory)=> n.scrapable)


  const today = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  
  return (
    <nav className=" max-w-7xl mx-auto py-5 space-y-3 ">
      <div className="flex items-center justify-center gap-2 relative ">
        <Image src="/logo.webp" width={50} height={50} alt="logo" className="w-10 h-10"></Image>
        <div>
          <h3 className=" text-xl font-bold">Bangla News 24</h3>
          <p className="text-sm">{today}</p>
        </div>

        <div className="flex gap-2  absolute -right-110">
          <button><Link href='/'>সাইন ইন</Link></button>
          <button className=" px-2 py-1 bg-red-600 text-white rounded-sm"><Link href='/'>সাইন আপ</Link></button>
        </div>
      </div>
      <div className="flex text-center">
        <ul className="flex gap-3 items-center justify-center text-sm ">
          {categoies.map((item: ICategory, i:number)=><li key={i}><Link href='/'>{item.title}</Link></li>)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
