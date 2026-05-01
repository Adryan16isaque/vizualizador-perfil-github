const btnSearch = document.querySelector('#btn-search');
const inputName = document.querySelector('#input-search');
const results = document.querySelector('.profile-results')

const baseUrl = 'https://api.github.com/users/'

btnSearch.addEventListener('click', async () => {
    const nameValue = inputName.value

    if (nameValue) {
        results.innerHTML = `<p class="loading">Carregando..</p>`
        try {
            const response = await fetch(`${baseUrl}${nameValue}`)

            if (!response) {
                alert('Usuario nao encontrado.Verifique o nome de usuario')
                results.innerHTML = "";
                return
            }

            const data = await response.json()
            console.log(data.avatar_url);
            console.log(data.name);
            console.log(data.bio);
            console.log(data.followers);
            console.log(data.following);

            results.innerHTML =
                `
             <div class="profile-card">
                <img src="${data.avatar_url}" alt="Avatar de ${data.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2>${data.name}</h2>
                        <p>${data.bio || 'Nao possui biografia disponivel.😭'}</p>
                    </div>
             </div>
            `

        } catch (error) {
            throw new Error(`Erro ao buscar o perfil do usuario: ${error}`)
            alert('Aconteceu um erro ao buscar o perfil do usuario. Tente novamente mais tarde');
            results.innerHTML = "";

        }
    }
    else {
        alert('Digite um nome de usuario')
        results.innerHTML = "";
    }
});
