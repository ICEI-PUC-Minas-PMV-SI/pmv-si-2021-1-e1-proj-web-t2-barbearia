//=================================================================================================
const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validatePassowrd = (event) => {
        const input = event.currentTarget;

        if (input.value.length = 0) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassowrd);

    const errorHandler = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('success');
        submitButton.classList.add('error');

        submitButton.textContent = "Error :(";
    }

    const successHandler = () => {
        submitButton.classList.remove('loading');
        submitButton.classList.remove('error');
        submitButton.classList.add('success');

        submitButton.textContent = "Sent! :)";
    }

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault()

            submitButton.textContent = "Loading..."

            URL = 'http://localhost:3000/login'

            let id = inputEmail.value
            let URI = (`${URL}/${id}`)

            if (id !== '') {
                try {
                    fetch(URI, {
                            method: 'GET',
                            headers: {
                                'Cache-Control': 'no-cache',
                                'Content-Type': 'application/json; charset=utf-8',
                            }
                        })
                        .then((response) => {
                            if (response.ok) {
                                successHandler()
                                window.location.href = "inicio.html"
                            } else {
                                submitButton.classList.remove('loading');
                                submitButton.classList.remove('error');
                                submitButton.classList.remove('success');

                                submitButton.textContent = "Não encontrado :(";
                            }
                        })
                } catch (e) {
                    errorHandler()
                }
            }
        })
    }
};

window.onload = init;