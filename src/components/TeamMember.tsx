import React from 'react'
import styles from '../styles/TeamMember.module.css'
import Image from 'next/image'

function TeamMember({member}: {member: any}) {
	return (
		<div className={styles.memberContainer}>
            <p className={styles.header}>Our Team</p>
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
					<h2 className={styles.satement}>{member.statement}</h2>
				</div>
			))}
		</div>
	)
}


export default TeamMember
