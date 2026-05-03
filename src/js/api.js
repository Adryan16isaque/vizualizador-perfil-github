const baseUrl = 'https://api.github.com/users/';

export async function fetchUserProfile(userName) {
    const response = await fetch(`${baseUrl}${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado.');
    }
    return await response.json();
}

export async function fetchUserRepos(userName) {
    const response = await fetch(`${baseUrl}${userName}/repos?per_page=10&sort=created&direction=desc`)
    if(!response.ok){
        throw new Error('Repositorios não encontrados.')
    }
    return await response.json()

}