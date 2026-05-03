import { fetchUserProfile, fetchUserRepos } from './api.js';
import { getElements, showLoading, renderProfile, clearResults, showError } from './profileView.js';

const { btnSearch, inputName, results } = getElements();

btnSearch.addEventListener('click', async () => {
    const nameValue = inputName.value.trim();

    if (!nameValue) {
        showError('Digite um nome de usuario', results);
        return;
    }
    showLoading(results);

    try {
        const userData = await fetchUserProfile(nameValue);
        const reposData = await fetchUserRepos(nameValue);
        console.log(reposData);
        
        renderProfile(userData, reposData, results);
    } catch (error) {
        showError('Aconteceu um erro ao buscar o perfil do usuario. Tente novamente mais tarde', results);
    }
});