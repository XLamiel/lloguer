document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('parkingSpotsTable').getElementsByTagName('tbody')[0];
    const parkingSpots = [
        { id: 1, location: 'Calle Principal, 123', price: '$10/día', status: 'Disponible' },
        { id: 2, location: 'Avenida Central, 456', price: '$12/día', status: 'Disponible' }
    ];

    parkingSpots.forEach(spot => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        cell1.textContent = spot.id;
        cell2.textContent = spot.location;
        cell3.textContent = spot.price;
        cell4.textContent = spot.status;
        const button = document.createElement('button');
        button.textContent = spot.status === 'Disponible' ? 'Marcar como Ocupada' : 'Marcar como Disponible';
        button.onclick = function() {
            spot.status = spot.status === 'Disponible' ? 'Ocupada' : 'Disponible';
            cell4.textContent = spot.status;
            button.textContent = spot.status === 'Disponible' ? 'Marcar como Ocupada' : 'Marcar como Disponible';
        };
        cell5.appendChild(button);
    });
});