export function getElements() {
    return {
        btnSearch: document.querySelector('#btn-search'),
        inputName: document.querySelector('#input-search'),
        results: document.querySelector('.profile-results')
    };
}

export function showLoading(results) {
    results.innerHTML = `<p class="loading">Carregando..</p>`;
}

export function renderProfile(userData, userRepo, results) {

    const repositories = userRepo.length > 0 ? userRepo.map(repo => `
        <a href="${repo.html_url}" target="_blank">
        <div class="repository-card">
            <h3> ${repo.name}</h3>
            <div class="repository-stats">
                <span>⭐Stars:  ${repo.stargazers_count}</span>
                <span>🍴Forks:  ${repo.forks_count}</span>
                <span>👀Watchers:  ${repo.watchers_count}</span>
                <span>💻Language:  ${repo.language}</span>
            </div>
        </div>
        </a>
        `).join('') : `Nenhum repositorio encontrado`

    results.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Nao possui biografia disponivel.😭'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositories}          
            </div>      
        </div>
    `;
}

export function clearResults(results) {
    results.innerHTML = "";
}

export function showError(message, results) {
    alert(message);
    clearResults(results);
}