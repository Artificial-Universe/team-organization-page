const fs = require('fs');
const fetch = require('node-fetch'); // Certifique-se de que node-fetch está instalado

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGithubMembers(page = 1) {
    const response = await fetch(`https://api.github.com/orgs/Artificial-Universe/members?per_page=100&page=${page}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });
    const githubMembers = await response.json();
    return githubMembers;
}

async function loadTeamMembers() {
    let githubMembers = [];
    let page = 1;
    let moreMembers = true;

    while (moreMembers) {
        const members = await fetchGithubMembers(page);
        if (members.length === 0) {
            moreMembers = false;
        } else {
            githubMembers = githubMembers.concat(members);
            page++;
        }
    }

    // Salvando os membros em um arquivo JSON
    fs.writeFileSync('team-members.json', JSON.stringify(githubMembers, null, 2));
    console.log("Membros da organização salvos em 'team-members.json'");
}

loadTeamMembers().catch(error => console.error('Erro ao carregar membros:', error));
