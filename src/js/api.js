const baseUrl = 'https://api.github.com/users/';

export async function fetchUserProfile(userName) {
    const response = await fetch(`${baseUrl}${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado.');
    }
    return await response.json();
}