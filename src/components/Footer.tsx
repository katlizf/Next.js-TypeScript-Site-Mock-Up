import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.footerItem}>© 2022 Tundra Targeted Therapeutics, Inc.</p>
            <p className={styles.footerItem}>|</p>
            <p>email@gmail.com</p>
        </div>
    )
}

export default Footer