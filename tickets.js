
// Carga los tickets almacenados en el array
const listaTickets = document.getElementById('listaTickets');
tickets.forEach((ticket) => {
    const li = document.createElement('li');
    li.textContent = `${ticket.nombre}: ${ticket.descripcion} (${ticket.fecha})`;
    listaTickets.appendChild(li); // Agrega el elemento de lista al DOM
});