import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import 'tailwindcss/tailwind.css'
import Coffee from "../../components/coffee";
import GithubRepo from "../../components/githubRepo";


export default function Tools({}) {
    return (
        <Layout Coffee>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="container mx-auto flex flex-wrap py-6">
                    <Coffee />
            </div>
        </Layout>
    )
}
