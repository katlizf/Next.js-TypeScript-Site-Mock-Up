import styles from '../styles/TeamMember.module.css'
import Image from 'next/image'
import {Member} from '../types/member'

function TeamMember({member}: {member: Member}) {
	return (
		<div className='container'>
            <p className='header'>Our Team</p>
			{member && member.map((member: { 
                id: React.Key; 
                image: string; 
                name: string; 
                title: string; 
                statement: string}) => (
				<div className={styles.member} key={member.id}>
					<div className={styles.main}>
						<Image 
                            src={member.image} 
                            alt={member.name}
                            width={520}
                            height={550}
                            className={styles.image} />
						<h1 className={styles.name}>{member.name}</h1>
						<h2 className={styles.title}>{member.title}</h2>
					</div>
					<h2 className={styles.statement}>{member.statement}</h2>
				</div>
			))}
		</div>
	)
}


export default TeamMember
