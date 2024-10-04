const fetch = require('node-fetch'); // Certifique-se de que node-fetch está instalado como dependência.
const fs = require('fs');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Função para buscar membros da organização no GitHub com suporte à paginação
async function fetchGithubMembers(page = 1) {
    const response = await fetch(`https://api.github.com/orgs/Artificial-Universe/members?per_page=100&page=${page}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}` // O token é passado nos headers da requisição
        }
    });
    
    console.log('Resposta da API:', response); // Loga a resposta completa para verificar o formato

    if (!response.ok) {
        throw new Error(`Erro ao buscar membros da página ${page}: ${response.status} ${response.statusText}`);
    }

    const githubMembers = await response.json();
    console.log('Dados recebidos:', githubMembers); // Loga o conteúdo recebido para garantir que é um array

    return githubMembers;
}

// Função principal para carregar todos os membros, página por página
async function loadTeamMembers() {
    let githubMembers = [];
    let page = 1;
    let moreMembers = true;

    // Buscar membros de forma paginada
    while (moreMembers) {
        const members = await fetchGithubMembers(page);
        if (!Array.isArray(members)) {
            throw new Error("Os dados recebidos não são um array.");
        }

        if (members.length === 0) {
            moreMembers = false; // Se não houver mais membros, paramos a iteração.
        } else {
            githubMembers = githubMembers.concat(members); // Adiciona os membros da página atual à lista total.
            page++;
        }
    }

    // Salvando os membros em um arquivo JSON
    fs.writeFileSync('team-members.json', JSON.stringify(githubMembers, null, 2));
    console.log("Membros da organização salvos em 'team-members.json'");
}

loadTeamMembers().catch(error => console.error('Erro ao carregar membros:', error));
