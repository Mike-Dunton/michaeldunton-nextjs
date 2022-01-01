export default function GithubRepo({ html_url, name, description, language, stargazers_count, forks }) {
    return (
        <div className="border h-full rounded p-4 flex flex-col">
            <div className="flex items-center">
            <a href={html_url} target="_blank" className="font-medium text-purple-800 dark:text-purple-200">
                { name }
            </a>
            </div>
            <div className="text-xs mt-2 mb-4">
                { description }
            </div>
            <div className="mt-auto text-xs flex">
                <div className="flex items-center mr-4">
                    Language:
                    <span className="pl-1">{ language }</span>
                </div>
                <div className="flex items-center mr-4">
                    Stars:
                    <span className="pl-1">{ stargazers_count }</span>
                </div>
                <div className="flex items-center">
                    Forks:
                    <span className="pl-1">{ forks }</span>
                </div>
            </div>
        </div>
    )
}
