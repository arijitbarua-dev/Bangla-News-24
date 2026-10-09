import Image from "next/image";

interface News {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
    firstPublished: string
}

const MainNews = ({ news }: {news: News[]}) => {
    const [firstNews, ...otherNews] = news
    return (
        <div className="flex gap-7">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        height={600}
                        width={600}
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className="text-red-600 font-semibold">{firstNews.category}</p>
                    <p className="card-title">{firstNews.title}</p>
                    <p>{firstNews.description}</p>
                    <p>
                        {new Date(firstNews.firstPublished).toLocaleDateString("bn-bd", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-4 gap-2 min-w-0">
                {otherNews.slice(0, 5).map(on => <div className="card bg-base-100 border border-gray-300 p-5" key={on.id}>
                    <p className="text-red-600 font-semibold">{firstNews.category}</p>
                    <div>{on.title}</div>
                </div>)}
            </div>
        </div>
    );
};

export default MainNews;