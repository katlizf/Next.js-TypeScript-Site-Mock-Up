import type {NextPage} from 'next'
import Head from 'next/head'
import HomePage from './Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Mock-Up</title>
				<meta
					name='description'
					content='Mock-Up, Inc.' />
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
