import styles from '../styles/ClinicalTrials.module.css'

function ClinicalTrials({trials}: {trials: any}) {
    return (
        <div className={styles.trialContainer}>
            <p className={styles.header}>Clinical Trials</p>
            {trials && trials.map((trials: {
                id: React.Key;
                name: string;
                description: string}) => {
                    <div className={styles.main}>
                        <h1 className={styles.name}>{trials.name}</h1>
                        <h2 className={styles.description}>{trials.description}</h2>
                    </div>
                })}
        </div>
    )
}

export default ClinicalTrials