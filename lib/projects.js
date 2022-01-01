
export async function getProjectsData() {
    const res = await fetch ("https://api.github.com/users/Mike-Dunton/repos?per_page=100")
    const jsonData = await res.json()

    return jsonData
        .filter(repo => !repo.fork)
        .sort(
            (repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count
        )
        .slice(0, 6);

}
