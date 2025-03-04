let almacenNombres = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim(); // Eliminar espacios innecesarios

    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    almacenNombres.push(amigo);
    limpiarInput();
    mostrarLista();
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    almacenNombres.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (almacenNombres.length < 2) {
        alert('Por favor, ingrese al menos dos nombres.');
        return;
    }

    let amigoSorteado = almacenNombres[Math.floor(Math.random() * almacenNombres.length)];

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = `<li><strong>El amigo secreto sorteado es:</strong> ${amigoSorteado}</li>`;
}
