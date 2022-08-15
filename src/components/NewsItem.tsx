import Image from 'next/image'
import styles from '../styles/NewsItem.module.css'

function NewsItem({news}: {news: any}) {
    return (
        <div className={styles.newsContainer}>
            <p className={styles.header}>News</p>
            {news && news.map((news: {
                id: React.Key;
                date: string;
                time: string;
                title: string;
                description: string;
                image: string}) => (
                <div className={styles.main} key={news.id}>
                    <div className={styles.generalInfo}>
                        <h2 className={styles.dateTime}>{news.date}</h2>
                        <h2 className={styles.dateTime}>{news.time}</h2>
                        <h1 className={styles.title}>{news.title}</h1>
                    </div>
                    <h2 className={styles.description}>{news.description}</h2>
                    <Image
                        src={news.image}
                        alt={news.title}
                        width={700}
                        height={620} />
                </div>
                ))}
        </div>
    )
}

export default NewsItem