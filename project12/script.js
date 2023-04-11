    var guessNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
function guessNumberGame() {

    var ourNumber = prompt('Попробуй угадать)' + guessNumber);
    if (guessNumber > ourNumber) {
        alert ("Число должно быть больше");
            return guessNumberGame();
    } else if (guessNumber < ourNumber) {
        alert ("Число должно быть меньше");
            return guessNumberGame();
    } else {
        return alert("УГАДАЛ");
    
    }

}

//guessNumberGame();


function reminder() {
    alert("Поздравляю 5 секунд твоей жизни прошли в пустую");
}

//setTimeout(reminder, 5000);
function validForm (){
    var name = document.getElementById('name').value;

var password = document.getElementById('password').value;
console.log(name);
console.log(password);

    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-z0-9]{5,100}$/i;
    if (reg_name.test(name)== false) {
        alert ('Ошибка в поле ФИО');
    }
    if (reg_password.test(password)== false) {
        alert ('Ошибка в поле Пароль');
    }
}

document.querySelector('.button').addEventListener('click', validForm);