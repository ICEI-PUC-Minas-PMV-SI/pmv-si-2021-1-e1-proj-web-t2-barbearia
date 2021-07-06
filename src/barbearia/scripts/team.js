// URL DA API DE DADOS
URL = 'http://localhost:3000/team'
    //=================================================================================================
    // GET - Recupera todos os colaboradores e adiciona na tabela

const teamList = document.getElementById('team-list');

fetch(URL)
    .then(res => res.json())
    .then(team => {
        let lista_equipe = '';
        for (let i = 0; i < team.length; i++) {
            lista_equipe += `
            <tr>
                <th>${team[i].id}</th>
                <td>${team[i].nome}</td>
                <td>${team[i].descricao}</td>
                <td>
                    <a onclick="getTeam(${team[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-bs-toggle="modal" data-bs-target="#team-modal">
                    Editar
                    </a>
                    <a onclick="$('#id-team').text(${team[i].id});" class="btn btn-danger btn-sm" 
                    data-bs-toggle="modal" data-bs-target="#delete-modal">
                    Excluir
                    </a>
                </td>
            </tr>
            `;
            teamList.innerHTML = lista_equipe;
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM COALBORADOR
const teamDelete = document.getElementById('delete-btn');

teamDelete.addEventListener('click', (e) => {

        let id = $('#id-team').text();

        fetch(`${URL}/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => location.reload());

    })
    //=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM COLABORADOR NA API
function getTeam(id) {

    if (id == 0) {
        $('#edit-team-id').text("");
        $("#team-id").prop("disabled", false);
        $('#team-id').val("");
        $('#team-name').val("");
        $('#team-description').val("");
    } else {
        $('#edit-team-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())
            .then(data => {
                $("#team-id").prop("disabled", true);
                $('#team-id').val(data.id);
                $('#team-name').val(data.nome);
                $('#team-description').val(data.descricao);
            });
    }
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM COLABORADOR

const teamForm = document.getElementById('team-form');

teamForm.addEventListener('submit', (e) => {

        // RECUPERA O ID DO PRODUTO
        let id = parseInt($('#edit-team-id').text());

        // RECUPERA OS DADOS DO PRODUTO
        const team = JSON.stringify({
            id: document.getElementById('team-id').value,
            nome: document.getElementById('team-name').value,
            descricao: document.getElementById('team-description').value,
        })

        if (id >= 0) {
            fetch(`${URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    },
                    body: team
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
                    body: team
                })
                .then(res => res.json())
                .then(() => location.reload());
        }
    })
    //=================================================================================================