import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import 'tailwindcss/tailwind.css'
import Date from '../../components/date'
import Link from 'next/link'

export default function Home({allPostsData}) {
    return (
        <Layout blog>
            <Head>
                <title>{siteTitle} | Blog</title>
            </Head>
            <div className="container mx-auto flex flex-wrap py-6">
                <section className="w-full md:w-2/3 flex flex-col px-3">
                    {allPostsData.map(({id, date, title}) => (
                        <div className="flex flex-col shadow my-4" key={id}>
                            <div className="bg-white flex flex-col justify-start p-6">
                                <Link href={`/posts/${id}`} >
                                    <a className="text-blue-700 text-sm font-bold uppercase pb-4"> {title}</a>
                                </Link>
                                <small className="text-sm">
                                    <Date dateString={date} />
                                </small>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
