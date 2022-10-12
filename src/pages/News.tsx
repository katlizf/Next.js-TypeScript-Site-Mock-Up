import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsItem from '../components/NewsItem'
import path from 'path'
import Head from 'next/head'
import {newsItem} from '../types/newsItem'

function News(props: {news: newsItem}) {

    const {news} = props

    return (
        <div>
            <Head>
                <title>TTT News</title>
            </Head>
            <Navbar />
            <NewsItem news={news} />
            <Footer />
        </div>
    )
}

const fs = require('fs/promises')

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'News.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            news: data.news
        }
    }
}

export default News