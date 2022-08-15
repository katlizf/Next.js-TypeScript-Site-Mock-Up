import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.footerItem}>© 2022 by Tundra Targetd Therapeutics, inc.</p>
            <p className={styles.footerItem}>|</p>
            <p>email@gmail.com?</p>
        </div>
    )
}

export default Footer