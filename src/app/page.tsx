import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  console.log(mainNews)
  return (
    <div>
      <Marquee/>
      
      <div className="grid grid-cols-3 mx-auto max-w-7xl">
        {/* News Section */}
        <div className="bg-red-700 col-span-2">
          <MainNews news={mainNews}/>
        </div>

        {/* Most read section */}
        <div className="bg-green-700 col-span-1">
          <p>World</p>
        </div>
      </div>
    </div>
  );
}
