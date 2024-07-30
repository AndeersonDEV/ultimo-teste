function addEmailField() {
    const emailDiv = document.getElementById('emails');
    const newEmailDiv = document.createElement('div');
    newEmailDiv.className = 'chaves__acesso';

    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Chave de Acesso:';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email[]';
    emailInput.required = true;
    emailInput.maxLength = '44'
    emailInput.classList.add('chave_acesso')


    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remover';
    removeButton.classList.add('btn-add-nova-linha')
    removeButton.onclick = function () {
        emailDiv.removeChild(newEmailDiv);
    };

    newEmailDiv.appendChild(emailLabel);
    newEmailDiv.appendChild(emailInput);
    newEmailDiv.appendChild(removeButton);
    emailDiv.appendChild(newEmailDiv);
}
function mostrarFormulario() {
    const formulario = document.querySelector('.form')
    const tabelaChaves = document.querySelector('.tabela__chaves')
    formulario.classList.remove('desativa')
    tabelaChaves.classList.add('desativa')
}
function ocultarFormulario() {
    const formulario = document.querySelector('.form')
    formulario.classList.add('desativa')
    const tabelaChaves = document.querySelector('.tabela__chaves')
    tabelaChaves.classList.remove('desativa')
}

async function pesquisarLoja() {
    const pesquisa = document.getElementById('pesquisaLoja').value; 
    try {
        const listaApi = await listaNotas();
        const resultadoPesquisa = listaApi.filter(elemento => elemento.loja === pesquisa1);
        lista.innerHTML = "";
        if (resultadoPesquisa.length > 0) {
            resultadoPesquisa.forEach(elemento => lista.appendChild(
                constroiCard(elemento.loja, elemento.chave, elemento.status)));
        } else {
            lista.innerHTML = `<tr><td colspan="3" class="mensagem__titulo">Nenhuma nota encontrada para a loja ${pesquisa}</td></tr>`;
        }
    } catch {
        lista.innerHTML = `<tr><td colspan="3" class="mensagem__titulo">Não foi possível carregar a lista de chaves</td></tr>`;
    }
    
}

