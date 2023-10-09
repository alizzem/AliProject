let name = document.querySelector('.name')
let phone = document.querySelector('.phone')
let name_user = document.querySelector('.name_user')
let code = document.querySelector('.code_')
let sign_in = document.querySelector('.sign_in')

document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', function () {
  
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData && usernameInput === storedUserData.name_user && passwordInput === storedUserData.code_) {
      alert('Информация верна');
    } else {
      alert('Информация не верна');
    }
  });
});

let local_login = localStorage.getItem('name_user')
let local_password = localStorage.getItem('code_')

  sign_in.addEventListener( 'click', () => {
    if(name_user.value == local_login && code_ == local_password){
      alert('Информация верна');
    }
    else{
      alert('Информация не верна');
    }
  })
      