import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClinicalTrials from '../components/ClinicalTrials'
import path from 'path'
import Head from 'next/head'
import {Trial} from '../types/trial'

function Services(props: {trials: Trial}) {

    const {trials} = props

    return (
        <div>
            <Head>
                <title>Mock-Up Services</title>
            </Head>
            <Navbar />
            <ClinicalTrials trials={trials}/>
            <Footer />
        </div>
    )
}

const fs = require('fs/promises')

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'ClinicalTrials.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            trials: data.clinicalTrials
        }
    }
}

export default Services