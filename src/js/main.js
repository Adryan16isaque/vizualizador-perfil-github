import { fetchUserProfile } from './api.js';
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
        const data = await fetchUserProfile(nameValue);
        renderProfile(data, results);
    } catch (error) {
        showError('Aconteceu um erro ao buscar o perfil do usuario. Tente novamente mais tarde', results);
    }
});