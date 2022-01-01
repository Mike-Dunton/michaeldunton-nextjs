import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Image from 'next/image'
import dynamic from 'next/dynamic'


export default function Post({ postData }) {
    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="container mx-auto items-center flex flex-wrap py-3">
                <section className="flex flex-col my-2">
                    <div className="flex">
                        <div className="bg-white flex flex-col justify-start p-6">
                            <h2 className="text-2xl font-bold pb-3"> {postData.title}</h2>
                            <p className="text-sm pb-8">
                                Published on <Date dateString={postData.date} />
                            </p>
                            <div className="prose pb-3" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
                        </div>
                        <div className="p-6">
                            <Image
                                src={"/" + postData.image}
                                alt={postData.imageAlt}
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </div>
       </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
