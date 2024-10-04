const fetch = require('node-fetch'); // Certifique-se de que node-fetch está instalado como dependência

// O token é acessado a partir da variável de ambiente configurada no workflow
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGithubMembers(page = 1) {
    const response = await fetch(`https://api.github.com/orgs/Artificial-Universe/members?per_page=100&page=${page}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`  // O token é passado nos headers da requisição
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

    console.log("Membros da Organização:");
    githubMembers.forEach(member => {
        console.log(`Login: ${member.login}, URL: ${member.html_url}`);
    });
}

loadTeamMembers().catch(error => console.error('Erro ao carregar membros:', error));
