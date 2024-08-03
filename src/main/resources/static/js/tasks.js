window.addEventListener('load', function () {
    (function () {
        const url = '/tasks';
        const settings = {
            method: 'GET'
        };

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById("taskTable");
                data.forEach(task => {
                    const taskRow = table.insertRow();
                    const tr_id = 'tr_' + task.id;
                    taskRow.id = tr_id;

                    const deleteButton = '<button' +
                        ' id="btn_delete_' + task.id + '"' +
                        ' type="button" onclick="deleteBy(' + task.id + ')" class="btn rounded-circle btn-danger btn_delete">' +
                        '&times' +
                        '</button>';

                    // Agregar celdas y contenido a la fila
                    taskRow.innerHTML = `
                        <td>${task.id}</td>
                        <td>${task.name}</td>
                        <td>${task.description}</td>
                        <td>${task.startDate}</td>
                        <td>${deleteButton}</td>
                    `;
                });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al cargar las tareas.');
            });
    })();
});