function validateEmail() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text_1 = document.getElementById("text_1");

    var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{1,3}$/i;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text_1.innerHTML = "Ваш email-адрес верный";
        text_1.style.color = "#00ff00";
    }

    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text_1.innerHTML = "Введите корректный email-адрес";
        text_1.style.color = "#ff0000";
    }

    if (email == "") {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Введите email-адрес";
        text.style.color = "#00ff00";
    }
    validateFilds();
}

function validateName() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("text");

    if (name == "") {
        text.innerHTML = "Введите ваше имя";
        text.style.color = "#00ff00";
    }

    else {
        text.innerHTML = "Вы ввели имя";
        text.style.color = "#00ff00";
    }
    validateFilds();
}

function validateSubject() {
    var subject = document.getElementById("subject").value;
    var text_2 = document.getElementById("text_2");

    if (subject == "") {
        text_2.innerHTML = "Введите тему письма";
        text_2.style.color = "#00ff00";
    }

    else {
        text_2.innerHTML = "Вы ввели тему письма";
        text_2.style.color = "#00ff00";
    }
    validateFilds();
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var text_3 = document.getElementById("text_3");

    if (message == "") {
        text_3.innerHTML = "Введите сообщение";
        text_3.style.color = "#00ff00";
    }

    else {
        text_3.innerHTML = "Вы ввели сообщение";
        text_3.style.color = "#00ff00";
    }
    validateFilds();
}

function validateFilds() {
    let btn = document.querySelector('input[type="submit"]');
    let sname = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    if (sname !== "" && email !== "" && subject !== "" && message!== "") {
        alert("Данные успешно заполнены! Для отправки данных нажмите кнопку 'Send message'.");
        btn.disabled = false;
        return true;
    } else {
        btn.disabled = true;
        return false;
    }
}
