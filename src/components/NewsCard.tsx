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

const NewsCard = ({news}: {news: News}) => {
    console.log(news)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm h-full flex flex-col py-3">
                <figure className="relative h-52 w-full shrink-0">
                    <Image
                        fill
                        className="object-cover"
                        src={news.imageUrl}
                        alt={news.imageAlt} />
                </figure>
                <div className="card-body flex flex-1 flex-col">
                    <p className="text-red-600 font-semibold">{news.category}</p>
                    <h2 className="card-title line-clamp-2">{news.title}</h2>
                    <p className="line-clamp-3">{news.description}</p>
                    <p className="mt-auto pt-3">
                        {new Date(news.firstPublished).toLocaleDateString("bn-bd", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;