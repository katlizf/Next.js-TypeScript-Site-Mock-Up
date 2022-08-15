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
                    <button className={styles.navItem}>Home</button>
                </Link>
                <Link href='/ourteam'>
                    <button className={styles.navItem}>Our Team</button>
                </Link>
                <Link href='/services'>
                    <button className={styles.navItem}>Services</button>
                </Link>
                <Link href='/news'>
                    <button className={styles.navItem}>News</button>
                </Link>
                <Link href='/contact'>
                    <button className={styles.navItem}>Contact</button>
                </Link>
            </div>
        </div>
    ) 
}

export default Navbar