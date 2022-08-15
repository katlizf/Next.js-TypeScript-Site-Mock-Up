import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
	return (
		<div>
			{/* <Image src={'/images/ttt-logo.png'} width={250} height={200} alt='Logo' /> */}
			<div className={styles.nav}>
				<Link href='/'>
					<a className={styles.navItem}>Home</a>
				</Link>
				<Link href='/OurTeam'>
					<a className={styles.navItem}>Our Team</a>
				</Link>
				<Link href='/Services'>
					<a className={styles.navItem}>Services</a>
				</Link>
				<Link href='/News'>
					<a className={styles.navItem}>News</a>
				</Link>
				<Link href='/Contact'>
					<a className={styles.navItem}>Contact</a>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
