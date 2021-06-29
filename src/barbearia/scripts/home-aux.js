// URL DA API DE DADOS
URL = 'http://localhost:3000/team'
//=================================================================================================
// GET - Recupera todos os dados e adiciona no select

const teamList = document.getElementById('home-team-list');

fetch(URL)
    .then(res => res.json())
    .then(team => {
        let lista_team = '';
        for (let i = 0; i < team.length; i++) {
            lista_team += `
            <option>${team[i].nome}</option>
            `;
            teamList.innerHTML = lista_team;
        }
    });
//=================================================================================================