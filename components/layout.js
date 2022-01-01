import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


const name = 'Michael Dunton'
export const siteTitle = 'michaeldunton.com'
export default function Layout({children, home, tool}) {

    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Michael Dunton's personal blog."
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <nav className="w-full py-4 bg-gray-600 shadow">
                <div className="w-full md:container mx-auto flex flex-wrap items-center justify-between">

                    <nav>
                        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                                <li>
                                <Link href="/">
                                    <a className="hover:text-gray-200 hover:underline px-4">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a  className="hover:text-gray-200 hover:underline px-4">Projects</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/posts">
                                    <a  className="hover:text-gray-200 hover:underline px-4">Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center text-lg no-underline text-white pr-6">
                        <a className="pl-6" target="_blank" href="https://github.com/Mike-Dunton">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                        <a className="pl-6" target="_blank" href="https://twitter.com/Mike_Dunton">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a className="pl-6" target="_blank" href="https://www.linkedin.com/in/michaeldunton/">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>

            </nav>
            {!tool && (
                <header className="w-full container mx-auto pt-2">
                    <div className="flex items-center flex-col text-lg no-underline pr-6">
                    <Image
                        priority
                        src="/profile.jpg"
                        className="rounded-full w-64 h-64 object-cover"
                        height={128}
                        width={128}
                        alt={name}
                    />
                    <h1 className="text-2xl font-semibold md:text-4xl">{name}</h1>
                    </div>
                </header>
            )}

            <main>{children}</main>
            {!home && (
                <div className="w-full container mx-auto pb-8">
                    <div className="text-sm italic underline text-green-300">
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
