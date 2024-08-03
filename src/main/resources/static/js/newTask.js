window.addEventListener('load', function () {

    const formulario = document.getElementById('add_new_task');

    formulario.addEventListener('submit', function (event) {

        event.preventDefault();

        const formData = {
            name: document.querySelector('#name').value,
            description: document.querySelector('#description').value,
            startDate: document.querySelector('#startDate').value,
        };

        const url = '/tasks';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        };

        fetch(url, settings)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    throw new Error(data.message);
                }

                let successAlert = '<div class="alert alert-success alert-dismissible">' +
                    '<strong>Éxito!</strong> Tarea agregada con éxito.</div>';

                document.querySelector('#response').innerHTML = successAlert;
                document.querySelector('#response').style.display = "block";
                resetUploadForm();
            })
            .catch(error => {
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<strong>Error!</strong> Ocurrió un error al intentar agregar la tarea.</div>';

                document.querySelector('#response').innerHTML = errorAlert;
                document.querySelector('#response').style.display = "block";
            });
    });

    function resetUploadForm() {
        document.querySelector('#name').value = "";
        document.querySelector('#description').value = "";
        document.querySelector('#startDate').value = "";
    }
});