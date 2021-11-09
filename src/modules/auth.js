const auth = () => {
    const $modalAuth = document.querySelector('.modal-auth');
    const $buttonAuth = document.querySelector('.button-auth');
    const $closeAuth = document.querySelector('.close-auth');
    const $logInForm = document.getElementById('logInForm');
    const $inputLogin = document.getElementById('login');
    const $inputPassword = document.getElementById('password');
    const $buttonOut = document.querySelector('.button-out');
    const $userName = document.querySelector('.user-name');

    const login = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        $buttonAuth.style.display = 'none';
        $buttonOut.style.display = 'flex';
        $userName.style.display = 'flex';
        $userName.textContent = user.login;
        $modalAuth.style.display = 'none';
    }

    const logout = () => {
        $buttonAuth.style.display = 'flex';
        $buttonOut.style.display = 'none';
        $userName.style.display = 'none';
        $userName.textContent = '';
        localStorage.removeItem('user');
    }

    $buttonAuth.addEventListener('click', () => {
        $modalAuth.style.display = 'flex';
    })

    $buttonOut.addEventListener('click', () => {
        logout();
    })

    $closeAuth.addEventListener('click', () => {
        $modalAuth.style.display = 'none';
    })

    $logInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        $inputLogin.value = $inputLogin.value.trim();
        if ($inputLogin.value == '') {
            alert('Введите имя');
        } else {
            const user = {
                login: $inputLogin.value.trim(),
                password: $inputPassword.value.trim(),
            }
            login(user);
        }
    })

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }
}

export default auth