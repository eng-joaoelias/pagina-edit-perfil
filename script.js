document.addEventListener('DOMContentLoaded', function () {
    // JSON com os dados iniciais
    const dadosUsuario = [{
        "nome": "Ian Kevin Santos",
        "idade": 27,
        "email": "ian_kevin_santos@jetstar.com.br",
        "telefone": "+5565986156150",
        "endereco": "Rua Curiangu, 253, CPA IV, Cuiabá, MT, 78058-246",
        "bio": "Especialista em Desenvolvimento Web e Front-End com conhecimentos em HTML, CSS e JavaScript. Apaixonado por criar experiências digitais incríveis. #DesenvolvimentoWeb #FrontEnd #HTML #CSS #JavaScript"
    }];

    // Preenchendo os campos com os dados do JSON
    const perfilTitulo = document.querySelector('.perfil-titulo');
    const perfilEmail = document.querySelector('.perfil-email');
    const camposConta = document.querySelectorAll('.conta input, .conta textarea');
    //const estilosOriginaisDadosEntrada = window.getComputedStyle(camposConta);

    function definicaoValoresIniciais() {
        perfilTitulo.textContent = `${dadosUsuario[0].nome}`;
        perfilEmail.textContent = dadosUsuario[0].email;
        camposConta[0].value = dadosUsuario[0].nome;
        camposConta[1].value = dadosUsuario[0].idade;
        camposConta[2].value = dadosUsuario[0].email;
        camposConta[3].value = dadosUsuario[0].telefone;
        camposConta[4].value = dadosUsuario[0].endereco;
        camposConta[5].value = dadosUsuario[0].bio;
    }

    function mudaDadosUsuario() {
        dadosUsuario[0].nome = camposConta[0].value;
        dadosUsuario[0].idade = camposConta[1].value;
        dadosUsuario[0].email = camposConta[2].value;
        dadosUsuario[0].telefone = camposConta[3].value;
        dadosUsuario[0].endereco = camposConta[4].value;
        dadosUsuario[0].bio = camposConta[5].value;
    }

    definicaoValoresIniciais();

    // Bloqueando os campos do formulário de conta e removendo as bordas dos campos para edicao
    camposConta.forEach(function (campo) {
        campo.setAttribute('readonly', 'true');
    });

    // Capturando o botão "btn-salva"
    const btnSalva = document.querySelector('.btn-salva');
    btnSalva.textContent = "Editar";

    // Capturando o botão "btn-cancela"
    const btnCancela = document.querySelector(".btn-cancela");
    btnCancela.style.display = "none";

    // Adicionando um evento de clique ao botão "btn-salva"
    btnSalva.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do botão (submit de um formulário)
        if (btnSalva.textContent === 'Salvar') {
            // Habilitando a edição dos campos do formulário de conta
            camposConta.forEach(function (campo) {
                campo.setAttribute('readonly', 'true');
                campo.classList.add("sem-borda");
                campo.classList.remove("com-borda");
            });

            mudaDadosUsuario();
            definicaoValoresIniciais();

            // Alterando o texto do botão para "Salvar"
            btnSalva.textContent = 'Editar';
            btnCancela.style.display = "none";
        } else {
            // Bloqueando a edição dos campos do formulário de conta
            camposConta.forEach(function (campo) {
                campo.removeAttribute('readonly');
                campo.classList.remove("sem-borda");
                campo.classList.add("com-borda");
            });

            definicaoValoresIniciais();

            // Alterando o texto do botão para "Editar"
            btnSalva.textContent = 'Salvar';
            btnCancela.style.display = "block";
        }
    });

    btnCancela.addEventListener("click", function (event) {
        event.preventDefault();
        camposConta.forEach(function (campo) {
            campo.setAttribute('readonly', 'true');
            campo.classList.add("sem-borda");
            campo.classList.remove("com-borda");
        });
        definicaoValoresIniciais();
        btnCancela.style.display = "none";
        btnSalva.textContent = 'Editar';
    });
});
