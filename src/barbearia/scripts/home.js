// URL DA API DE DADOS
URL = 'http://localhost:3000/reserve'
    //=================================================================================================
    // GET - Recupera todos os dados do agendamento e adiciona na tabela

const reserveList = document.getElementById('reserve-list');

fetch(URL)
    .then(res => res.json())
    .then(reserve => {
        let lista_reserve = '';
        for (let i = 0; i < reserve.length; i++) {
            lista_reserve += `
            <tr>
                <th>${reserve[i].id}</th>
                <td>${reserve[i].data}</td>
                <td>${reserve[i].horario}</td>
                <td>${reserve[i].barbeiro}</td>
                <td>${reserve[i].servico}</td>               
                <td>                    
                    <a onclick="$('#id-reserve').text(${reserve[i].id});" class="btn btn-danger btn-sm" 
                    data-bs-toggle="modal" data-bs-target="#delete-modal">
                    Cancelar
                    </a>
                </td>
            </tr>
            `;
            reserveList.innerHTML = lista_reserve;
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM AGENDAMENTO
const reserveDelete = document.getElementById('delete-btn');

reserveDelete.addEventListener('click', (e) => {

        let id = $('#id-reserve').text();

        fetch(`${URL}/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => location.reload());

    })
    //=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM AGENDAMENTO NA API
function getProduto(id) {

    if (id == 0) {
        $('#edit-reserve-id').text("");
        $("#home-id").prop("disabled", false);
        $('#home-id').val("");
        $('#home-date').val("");
        $('#home-time').val("");
        $('#home-team-list').val("");
        $('#home-service-list').val("");
    } else {
        $('#edit-reserve-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())
            .then(data => {
                $("#home-id").prop("disabled", true);
                $('#home-id').val(data.id);
                $('#home-date').val(data.data);
                $('#home-time').val(data.horario);
                $('#home-team-list').val(data.barbeiro);
                $('#home-service-list').val(data.servico);
            });
    }
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR UM AGENDAMENTO

const reserveForm = document.getElementById('reserve-form');

reserveForm.addEventListener('submit', (e) => {

        // RECUPERA O ID DO PRODUTO
        let id = parseInt($('#edit-reserve-id').text());

        // RECUPERA OS DADOS DO PRODUTO
        const reserve = JSON.stringify({
            id: document.getElementById('home-id').value,
            data: document.getElementById('home-date').value,
            horario: document.getElementById('home-time').value,
            barbeiro: document.getElementById('home-team-list').value,
            servico: document.getElementById('home-service-list').value
        })

        if (id >= 0) {
            fetch(`${URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    },
                    body: reserve
                })
                .then(res => res.json())
                .then(() => location.reload());
        } else {
            fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    },
                    body: reserve
                })
                .then(res => res.json())
                .then(() => location.reload());
        }
    })
    //=================================================================================================
    // GET - Recupera todos os dados e adiciona no select

const serviceList = document.getElementById('home-service-list');

fetch('http://localhost:3000/services')
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
// GET - Recupera todos os dados e adiciona no select

const teamList = document.getElementById('home-team-list');

fetch('http://localhost:3000/team')
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