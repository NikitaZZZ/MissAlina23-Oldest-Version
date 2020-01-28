window.onload = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        }
    });

    swalWithBootstrapButtons.fire({
        title: 'Вы хотите пройти обучение?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Да',
        cancelButtonText: 'Нет',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            location.href = "training.html";
        } else if (result.dismiss === Swal.DismissReason.cancel) { }
    });
};