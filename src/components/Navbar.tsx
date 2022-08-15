import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Logo from '../../public/images/ttt-logo.png'

function Navbar() {
	return (
		<div>
            <div className={styles.logo}>
                <Image 
                    src={Logo} 
                    width={160} 
                    height={130}
                    alt='Logo' />
                    <h1 className={styles.tttName}>Tundra Targeted Therapeutics, Inc.</h1>
            </div>
			
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
