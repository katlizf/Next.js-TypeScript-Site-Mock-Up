import type {NextPage} from 'next'
import Head from 'next/head'
import HomePage from '../features/Home'

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
                <HomePage />
            </main>
		</div>
	)
}

export default Home
