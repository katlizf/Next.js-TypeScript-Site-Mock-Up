import React from 'react'
import Image from 'next/image';

function NewsItem({news}: {news: any}) {
    return (
        <div>
            <p>News</p>
            {news && news.map((news: {
                id: React.Key;
                date: string;
                title: string;
                description: string;
                image: string}) => (
                <div key={news.id}>
                    <div>
                        <h2>{news.date}</h2>
                        <h1>{news.title}</h1>
                    </div>
                    <h2>{news.description}</h2>
                    <Image
                        src={news.image}
                        alt={news.title}
                        width={550}
                        height={520} />
                </div>
                ))}
        </div>
    )
}

export default NewsItem