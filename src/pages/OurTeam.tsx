import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TeamMember from '../components/TeamMember'
import path from 'path'
import Head from 'next/head'
import {Member} from '../types/member'

function OurTeam(props: {member: Member}) {

    const {member} = props

    return (
        <div>
            <Head>
                <title>Tundra Targeted Therapeutics Team</title>
            </Head>
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