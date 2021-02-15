var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        // Cria uma td sem informações
        var td = document.createElement('td');

        // atribui o valor do campo a td
        td.textContent = campo.value;

        // adiciona a td na tr
        tr.appendChild(td);
    });

    // nova td armazenará o volume da negociação
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';
    campos[0].focus();
});