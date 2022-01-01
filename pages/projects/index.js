import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getProjectsData } from '../../lib/projects'
import 'tailwindcss/tailwind.css'
import GithubRepo from "../../components/githubRepo";


export default function Projects({allProjectsData}) {
    return (
        <Layout projects>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="container mx-auto flex flex-wrap py-6">
                <section className="w-full grid md:grid-cols-3 gap-6 ">
                    {allProjectsData.map((repo) => (
                        <div key={repo.name} className="flex flex-col shadow my-4">
                        <GithubRepo html_url={repo.html_url}
                                    name={repo.name}
                                    description={repo.description}
                                    language={repo.language}
                                    stargazers_count={repo.stargazers_count}
                                    forks={repo.forks}  />
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allProjectsData = await getProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}
