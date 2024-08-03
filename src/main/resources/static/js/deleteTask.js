function deleteBy(id) {
    const url = '/tasks/' + id;
    const settings = {
        method: 'DELETE'
    };

    fetch(url, settings)
        .then(response => {
            if (response.status === 204) {
                alert('Tarea eliminada con éxito!');
                let row_id = "#tr_" + id;
                document.querySelector(row_id).remove();
                return;
            }

            return response.json().then(data => {
                if (data.success) {
                    alert('Tarea eliminada con éxito!');
                    let row_id = "#tr_" + id;
                    document.querySelector(row_id).remove();
                } else {
                    alert('Error al eliminar tarea: ' + data.message);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error en la solicitud: ' + error.message);
        });
}
