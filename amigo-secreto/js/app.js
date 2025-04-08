let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let nome = amigo.value.trim();
    let lista = document.getElementById('lista-amigos');

    if (nome === '') {
        alert("Digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este amigo já foi adicionado.");
        return;
    }

    amigos.push(nome);
    amigo.value = '';

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    amigos.forEach(nome => {
        lista.innerHTML += `<span onclick="removerAmigo('${nome}')" style="cursor: pointer; margin-right: 8px;" title="Clique para remover">${nome}</span>`;
    });
}

function removerAmigo(nome) {
    amigos = amigos.filter(amigo => amigo !== nome);
    atualizarLista();
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos para realizar o sorteio.");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
        } else {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
        }
    }
}

function embaralha(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}