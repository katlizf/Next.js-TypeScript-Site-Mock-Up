import styles from '../styles/EmailForm.module.css'

function EmailForm() {
	return (
		<div className={styles.formContainer}>
			<h1 className={styles.header}>Contact Us</h1>
			<form className={styles.form}>
				<div className={styles.row}>
					<div className={styles.column}>
						<label htmlFor='first'>First name:</label>
						<input type='text' className={styles.first} id='first'></input>
					</div>
					<div className={styles.column}>
						<label htmlFor='last'>Last name:</label>
						<input type='text' className={styles.last} id='last'></input>
					</div>
				</div>
				<div className={styles.column}>
					<label htmlFor='email'>Email:</label>
					<input type='email' className={styles.email} id='email'></input>
				</div>
                <div className={styles.column}>
                    <h3>Message/Question:</h3>
                    <textarea className={styles.textArea} />
                </div>
                <div className={styles.button}>
                    <button className={styles.submit}>Submit</button>
                </div>
			</form>
		</div>
	)
}

export default EmailForm
