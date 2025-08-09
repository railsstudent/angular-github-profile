export function createRequest(username?: string) {
    return username ? { 
        url: `https://api.github.com/users/${username}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${SECRET_GITHUB_TOKEN}`
        }
    }: undefined;
}
