import type {NextPage} from 'next'
import Head from 'next/head'
import HomePage from './Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Tundra Targeted Therapeutics</title>
				<meta
					name='description'
					content='Tundra Targeted Therapeutics, Inc.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <main>
                <Navbar />
                <HomePage />
                <Footer />
            </main>
		</div>
	)
}

export default Home
