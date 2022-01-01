import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import 'tailwindcss/tailwind.css'
import Coffee from "../../components/coffee";

export default function Tools({}) {
    return (
        <Layout tool>
            <Head>
                <title>Coffee Ratio Calculator</title>
            </Head>
            <div className="container mx-auto flex flex-wrap py-6">
                    <Coffee />
            </div>
        </Layout>
    )
}
