import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import 'tailwindcss/tailwind.css'

export default function Home({allPostsData}) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div className="container mx-auto flex flex-wrap py-2">
            <div className="mt-2 py-6 border-b border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            Software developer, tech enthusiast, and nature lover living in Miami, Florida.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            I am a graduate of Florida State University where I earned my bachelor's degree in Computer Science. After graduation I started a full time position as a software developer working on Cloud Based Telecommunications.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            Currently I am working as a DevOps Engineer to automate the USA Today Network. Working with technologies like Helm, Golang, Docker and Kubernetes.
                        </p>
                    </div>
                </div>
            </div>
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
