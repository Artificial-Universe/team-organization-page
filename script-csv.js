const fs = require('fs');
const fetch = require('node-fetch');

async function fetchGithubMembers(page = 1) {
  const response = await fetch(`https://api.github.com/orgs/Artificial-Universe/members?per_page=100&page=${page}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const members = await response.json();
  return members;
}

async function saveMembersToCSV() {
  let members = [];
  let page = 1;
  let moreMembers = true;

  while (moreMembers) {
    const membersBatch = await fetchGithubMembers(page);
    if (membersBatch.length === 0) {
      moreMembers = false;
    } else {
      members = members.concat(membersBatch);
      page++;
    }
  }

  // Criando o arquivo CSV com login e url de cada membro
  const csvContent = members.map(member => `${member.login},${member.html_url}`).join('\n');
  fs.writeFileSync('members.csv', 'login,url\n' + csvContent);
  console.log('Arquivo members.csv foi gerado.');
}

saveMembersToCSV();
