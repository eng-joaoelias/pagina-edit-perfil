document.addEventListener('DOMContentLoaded', function () {
    // JSON com os dados iniciais
    const dadosIniciais = [{
        "nome": "Enzo Renan",
        "sobrenome": "da Cruz",
        "email": "enzorenandacruz@torrez.com.br",
        "telefone": "+5565986156150",
        "endereco": "Rua Curiangu, 253, CPA IV, Cuiabá, MT, 78058-246"
    }];

    // Preenchendo os campos com os dados do JSON
    const perfilTitulo = document.querySelector('.perfil-titulo');
    const perfilEmail = document.querySelector('.perfil-email');
    const camposConta = document.querySelectorAll('.conta input, .conta textarea');

    function definicaoValoresIniciais() {
        perfilTitulo.textContent = `${dadosIniciais[0].nome} ${dadosIniciais[0].sobrenome}`;
        perfilEmail.textContent = dadosIniciais[0].email;
        camposConta[0].value = dadosIniciais[0].nome;
        camposConta[1].value = dadosIniciais[0].sobrenome;
        camposConta[2].value = dadosIniciais[0].email;
        camposConta[3].value = dadosIniciais[0].telefone;
        camposConta[4].value = dadosIniciais[0].endereco;
    }

    definicaoValoresIniciais();

    // Bloqueando os campos do formulário de conta
    camposConta.forEach(function (campo) {
        campo.setAttribute('readonly', 'true');
    });

    // Capturando o botão "btn-salva"
    const btnSalva = document.querySelector('.btn-salva');
    btnSalva.textContent = "Editar";

    // Capturando o botão "btn-cancela"
    const btnCancela = document.querySelector(".btn-cancela");

    // Adicionando um evento de clique ao botão "btn-salva"
    btnSalva.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do botão (submit de um formulário)
        if (btnSalva.textContent === 'Salvar') {
            // Habilitando a edição dos campos do formulário de conta
            camposConta.forEach(function (campo) {
                campo.setAttribute('readonly', 'true');
            });

            console.log("clicou pra salvar");

            perfilTitulo.textContent = camposConta[0].value + " " + camposConta[1].value;
            perfilEmail.textContent = camposConta[2].value;

            // Alterando o texto do botão para "Salvar"
            btnSalva.textContent = 'Editar';
        } else {
            // Bloqueando a edição dos campos do formulário de conta
            camposConta.forEach(function (campo) {
                campo.removeAttribute('readonly');
            });

            console.log("clicou pra editar");

            // Alterando o texto do botão para "Editar"
            btnSalva.textContent = 'Salvar';
        }
    });

    btnCancela.addEventListener("click", function (event) {
        event.preventDefault();
        camposConta.forEach(function (campo) {
            campo.setAttribute('readonly', 'true');
        });
        btnSalva.textContent = 'Editar';
    });
});
