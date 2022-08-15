import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import EmailForm from "../components/EmailForm"
import Head from "next/head"

function Contact() {
    return (
        <div>
            <Head>
                <title>TTT Contact</title>
            </Head>
            <Navbar />
            <EmailForm />
            <Footer />
        </div>
    )
}

export default Contact