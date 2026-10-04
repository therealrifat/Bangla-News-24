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
    <nav className=" max-w-7xl mx-auto py-5 space-y-3">
      <div className="flex items-center justify-center gap-2">
        <Image src="/logo.webp" width={50} height={50} alt="logo" className="w-10 h-10"></Image>
        <div>
          <h3 className=" text-xl font-bold">Bangla News 24</h3>
          <p className="text-sm">{today}</p>
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
