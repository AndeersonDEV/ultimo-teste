async function Envio() {
    showLoading()

    const container_chaves = document.querySelectorAll('.chaves__acesso input')
    const valorLoja = document.querySelector('#loja').value

    let valoresChaves = Array.from(container_chaves).map(input => input.value).filter(value => value !== "")

    let formData = new FormData()
    formData.append('loja', JSON.stringify(valorLoja))
    formData.append('chaves', JSON.stringify(valoresChaves))

    const response = await fetch('https://c1c6e455-17c5-45a5-a39d-4e83ff79717c-00-2t1hvmfdaqg5q.worf.replit.dev/ReceberChave', {
        method: 'POST',
        body: formData,
    }); 1

    if (response.ok) {
        const jsonResponse = await response.json()
        alert('Dados enviados com sucesso!')
        hideLoading()
    } else {
        alert('Erro ao enviar dados, Verifique se todos os dados estão corretos!')
        hideLoading()
    }

}

function showLoading() {
    document.getElementById('loading-spinner').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-spinner').style.display = 'none';
}
function validateInput(event) {
    const input = event.target;
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4); 
    }
}

function validateInput2(event) {
    const input = event.target;
    if (input.value.length > 44) {
        input.value = input.value.slice(0, 44); 
    }
}
function validateLength(event) {
    const input = document.getElementById('chave_acesso');
    if (input.value.length !== 44) {
        alert("O número da loja deve ter exatamente 44 caracteres.");
        event.preventDefault(); // Impede o envio do formulário
    }
}