import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";


interface OtherSection {
  curationId: string
  title: string
  articles: {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
  }[]
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSection: OtherSection[] = sections.slice(1)
  // console.log(otherSection)
  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 mx-auto max-w-7xl">
        {/* News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {otherSection.map(os => <div className="" key={os.curationId}>
              <h1 className="text-xl font-bold border-b-2 pb-1 border-red-700">{os.title}</h1>

              <div className="grid mt-5 grid-cols-3 gap-2">
                {os.articles.map(news => (
                  <NewsCard key={news.id} news={news} />))}
              </div>
            </div>)}
          </div>
        </div>

        {/* Most read section */}
        <div className="bg-green-700 col-span-1">
          <p>World</p>
        </div>
      </div>
    </div>
  );
}
