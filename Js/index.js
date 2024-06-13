document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
        from_name: this.from_name.value,
        from_email: this.from_email.value,
        message: this.message.value
    };


    if (templateParams.from_name === '' || templateParams.from_email === '' || templateParams.message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const YOUR_SERVICE_ID = 'service_8ghvlu9';
    const YOUR_TEMPLATE_ID = 'template_5eny81t';
    const Alert = document.querySelector('.uk-alert');

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            Alert.textContent = 'E-mail enviado com sucesso!';
        }, function (error) {
            console.log('FAILED...', error);
            alert('O envio do e-mail falhou. Tente novamente.');
        });
});