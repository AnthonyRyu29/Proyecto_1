// Array de amigos
let amigos = [];

// Función para mostrar los amigos 
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const elemento = document.createElement("li");
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos();
        inputAmigo.value = ""; // Limpiar el campo de texto
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
    // Limpiar la lista de amigos
    amigos = [];
    mostrarAmigos();
}

