import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Background from '../images/home-bground.jpg'

function Home() {
	return (
		<>
			<Navbar />
			<div className={styles.main}>
				<span className={styles.mission}>
					<p>Mission</p>
                    <br/>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis doloremque, soluta velit id sint natus hic vero tempore. Et reprehenderit optio distinctio consequuntur iste porro. Laborum aliquid perspiciatis quo rem!</p>
				</span>
				<Image
					src={Background}
					alt='DNA/Cells'
					className={styles.image}
					layout='responsive'
				/>
			</div>
			<Footer />
		</>
	)
}

export default Home
