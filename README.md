# 🚀 Team Organization Page

👋 **Bem-vindo ao repositório oficial da página de listagem de membros da organização [Artificial-Universe](https://github.com/Artificial-Universe/people)!** Este projeto tem como objetivo criar uma **interface dinâmica e automatizada** que exibe todos os membros da organização, incluindo aqueles com perfis privados, garantindo que a página seja atualizada automaticamente sempre que um novo membro for adicionado.

## 🌟 Funcionalidade

Este repositório foi desenvolvido para fornecer uma **visualização pública** de todos os membros da organização **Artificial-Universe**. Aqui estão algumas das principais funcionalidades do projeto:

- 🔄 **Atualização Automática**: A página de membros é atualizada diariamente à meia-noite (UTC) usando GitHub Actions. Sempre que um novo membro ingressa na organização, a listagem será atualizada automaticamente.
- 👤 **Suporte para Membros Públicos e Privados**: Todos os membros são exibidos, independentemente do status de visibilidade dos seus perfis.
- 📜 **Interface Simples e Intuitiva**: A página oferece uma tabela limpa e bem organizada com os nomes e as áreas de atuação (que podem ser definidas no futuro) de cada membro.

## 🎯 Objetivo

O objetivo deste repositório é facilitar o **acompanhamento e visualização dos membros da organização**, com atualizações automáticas para garantir que sempre exibamos os membros mais recentes. Este projeto faz parte de uma integração maior com o **GitHub Projects** da organização **Artificial-Universe**, sendo uma interface que pode ser usada para exibir a lista de participantes em outros módulos do projeto.

### 🧩 Integração com o GitHub Projects

Este repositório será integrado ao **GitHub Projects** como parte do gerenciamento de membros e seus papéis dentro do projeto. A interface servirá como um **recurso de monitoramento**, permitindo que os administradores e colaboradores acompanhem quem está envolvido nas diferentes atividades da organização.

- Os dados dos membros serão automaticamente atualizados e poderão ser usados em outras áreas do **GitHub Projects**, como tarefas atribuídas, progressos, e discussões.
- Futuramente, será possível associar os membros a seus respectivos papéis em projetos específicos da organização, ajudando a organizar melhor as equipes de desenvolvimento.

## 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Utilizado para criar scripts automatizados que acessam a API do GitHub e geram a listagem de membros.
- **GitHub API**: A API do GitHub é utilizada para buscar os membros da organização e suas informações.
- **GitHub Actions**: Automação que executa diariamente a atualização dos membros da organização e gera o arquivo `team-members.json` usado na página.
- **HTML/CSS**: A interface é construída usando uma página HTML simples, estilizada com CSS para exibir os membros em uma tabela limpa e organizada.
- **JSON**: Os dados dos membros são salvos em um arquivo `team-members.json`, que alimenta a interface.

## 🛠 Como Funciona

1. **Atualização Diária**: Através de um workflow do **GitHub Actions**, o script `script.js` é executado todos os dias à meia-noite (UTC), fazendo uma chamada à **API do GitHub** para buscar os membros da organização.
2. **Listagem dos Membros**: Todos os membros da organização são coletados, incluindo aqueles com perfis privados, e são salvos no arquivo `team-members.json`.
3. **Exibição na Página**: A página HTML consome os dados do arquivo `team-members.json` e exibe os membros em uma tabela na página web.

### 🚀 Para Executar Localmente

Se você deseja rodar este projeto localmente, siga as instruções abaixo:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/Artificial-Universe/team-organization-page.git
   cd team-organization-page
   ```

2. **Instale as Dependências: Certifique-se de que você tem o Node.js instalado. Então, rode:**
    ```bash
    npm install
    ```

3. **Defina o Token do GitHub: Crie um arquivo .env na raiz do projeto e adicione seu GITHUB_TOKEN:** 
    ```bash
    GITHUB_TOKEN=your_github_token
    ```

4. **Execute o Script: Para listar manualmente os membros da organização:**
    ```bash
    npm start
    ```

5. **Visualize a Página: Abra o arquivo index.html no seu navegador favorito para visualizar a tabela de membros.**

## 🔄 Automatização com GitHub Actions
- Este projeto utiliza o GitHub Actions para automação da coleta de dados. A cada novo membro adicionado à organização, o workflow abaixo será acionado para atualizar a lista de membros:

    ```bash
    name: List Organization Members
    ```
```
on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *' # Executa o workflow todos os dias à meia-noite UTC

jobs:
  list-members:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: List Members
        run: |
          node script.js
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN_GITHUB }}
```

--- 

## 📚 Contribuições

Estamos sempre abertos a novas ideias e contribuições! Se você deseja sugerir melhorias ou adicionar novas funcionalidades, fique à vontade para abrir uma issue ou enviar um pull request.

### Como Contribuir

1. Faça um Fork do projeto.

2. Crie uma nova branch com sua funcionalidade ou correção:
```bash
git checkout -b minha-nova-feature
``` 
3. Commit suas alterações:
```bash
git commit -m 'Adicionando minha nova feature'
```
4. Push para a branch:
```bash
git push origin minha-nova-feature
```
5. Abra um Pull Request.

--- 

## 🎉 Agradecimentos
Agradecemos a todos os membros da organização Artificial-Universe que estão contribuindo ativamente para o desenvolvimento deste projeto. Vamos continuar evoluindo juntos! 💪🌌


