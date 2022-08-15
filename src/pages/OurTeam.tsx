import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TeamMember from '../components/TeamMember'
import path from 'path'
// import fs from 'fs/promises'

function OurTeam(props: { member: any }) {

    const {member} = props

    return (
        <div>
            <Navbar />
            <TeamMember member={member}/>
            <Footer />
        </div>
    )
}

const fs = require('fs/promises')

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'src', 'data', 'TeamMembers.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

	return {
		props: {
            member: data.teamMembers
        }
	}
    
}

export default OurTeam