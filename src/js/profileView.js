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

export function renderProfile(data, results) {
    results.innerHTML = `
        <div class="profile-card">
            <img src="${data.avatar_url}" alt="Avatar de ${data.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${data.name}</h2>
                <p>${data.bio || 'Nao possui biografia disponivel.😭'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${data.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${data.following}</span>
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