import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Background from '../../public/images/home-bground.jpg'

function Home() {
	return (
		<div className={styles.main}>
			<span className={styles.mission}>
				<p className={styles.title}>Our Mission</p>
				<br />
				<p className={styles.statement}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque, soluta velit id sint natus hic vero tempore. Et reprehenderit optio distinctio consequuntur iste porro. Laborum aliquid perspiciatis quo rem!</p>
			</span>
			<Image
				src={Background}
				alt='DNA/Cells'
				className={styles.image}
				layout='responsive'
			/>
		</div>
	)
}

export default Home
