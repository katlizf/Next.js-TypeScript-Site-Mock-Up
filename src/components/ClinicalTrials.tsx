import styles from '../styles/ClinicalTrials.module.css'

type trial = {
    map: any;
    id: number,
    name: string,
    age: number
}

function ClinicalTrials({trials}: {trials: trial}) {
    return (
        <div className='container'>
            <p className='header'>Clinical Trials</p>
            {trials && trials.map((trials: {
                id: React.Key;
                name: string;
                description: string}) => (
                    <div className={styles.main} key={trials.id}>
                        <h1 className={styles.name}>{trials.name}</h1>
                        <h2 className={styles.description}>{trials.description}</h2>
                    </div>
                ))}
        </div>
    )
}

export default ClinicalTrials