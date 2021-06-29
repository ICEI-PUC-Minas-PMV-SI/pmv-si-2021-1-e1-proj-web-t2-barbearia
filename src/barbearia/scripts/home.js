// URL DA API DE DADOS
URL = 'http://localhost:3000/services'
//=================================================================================================
// GET - Recupera todos os dados e adiciona no select

const serviceList = document.getElementById('home-service-list');

fetch(URL)
    .then(res => res.json())
    .then(services => {
        let lista_servicos = '';
        for (let i = 0; i < services.length; i++) {
            lista_servicos += `
            <option>${services[i].nome}</option>
            `;
            serviceList.innerHTML = lista_servicos;
        }
    });
//=================================================================================================