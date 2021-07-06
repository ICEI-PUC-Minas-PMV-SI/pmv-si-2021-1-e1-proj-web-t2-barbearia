// URL DA API DE DADOS
URL = 'http://localhost:3000/services'
    //=================================================================================================
    // GET - Recupera todos os serviços e adiciona na tabela

const serviceList = document.getElementById('service-list');

fetch(URL, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(services => {
        let lista_servicos = '';
        for (let i = 0; i < services.length; i++) {
            lista_servicos += `
            <tr>
                <th>${services[i].id}</th>
                <td>${services[i].nome}</td>
                <td>R$ ${(parseFloat(services[i].valor)).toFixed(2)}</td>
                <td>
                    <a onclick="getService(${services[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-bs-toggle="modal" data-bs-target="#service-modal">
                    Editar
                    </a>
                    <a onclick="$('#id-serv').text(${services[i].id});" class="btn btn-danger btn-sm" 
                    data-bs-toggle="modal" data-bs-target="#delete-modal">
                    Excluir
                    </a>
                </td>
            </tr>
            `;
            serviceList.innerHTML = lista_servicos;
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM SERVIÇO
const serviceDelete = document.getElementById('delete-btn');

serviceDelete.addEventListener('click', (e) => {

        let id = $('#id-serv').text();

        fetch(`${URL}/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => location.reload());

    })
    //=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM SERVIÇO NA API
function getService(id) {

    if (id == 0) {
        $('#edit-serv-id').text("");
        $("#service-id").prop("disabled", false);
        $('#service-id').val("");
        $('#service-name').val("");
        $('#service-price').val("");
    } else {
        $('#edit-serv-id').text(id);
        fetch(`${URL}/${id}`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json'
                },
                body: service
            })
            .then(res => res.json())
            .then(data => {
                $("#service-id").prop("disabled", true);
                $('#service-id').val(data.id);
                $('#service-name').val(data.nome);
                $('#service-price').val(data.valor);
            });
    }
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM SERVIÇO

const serviceForm = document.getElementById('service-form');

serviceForm.addEventListener('submit', (e) => {

        // RECUPERA O ID DO SERVIÇO
        let id = parseInt($('#edit-serv-id').text());

        // RECUPERA OS DADOS DO SERVIÇO
        const service = JSON.stringify({
            id: document.getElementById('service-id').value,
            nome: document.getElementById('service-name').value,
            valor: document.getElementById('service-price').value,
        })

        if (id >= 0) {
            fetch(`${URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json'
                    },
                    body: service
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
                    body: service
                })
                .then(res => res.json())
                .then(() => location.reload());
        }
    })
    //=================================================================================================