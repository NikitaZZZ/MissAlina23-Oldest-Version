// Получаем div'ы и кнопку для выполнения заданий
let main_div = document.getElementById("P1-Text2");
let task_div = document.getElementById("Task");
let Butt_Text2 = document.getElementById("Butt-Text2");
let btn_stream = document.getElementById("btn-stream");

// Для остановки времени
let check_var = true;

// Для часов
let day_num = 1;
let day = "День " + day_num;
let hour = 10;
let minutes = 15;

// Первый запуск часов
func_time();

// Обновлять часы каждые две секунды
setInterval(func_time, 2000);

// Вычитание статистики каждые 15 сек
setInterval(() => {
    if (water === 2 && food === 2 && energy === 2) {
        Swal.fire({
            icon: 'error',
            title: 'Вы проиграли!',
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            text: 'Алина умерла. Вы не должны были этого допустить!',
            footer: '<a href="training.html">Как играть?</a>'
        });

        setTimeout(() => {
            location.reload()
        }, 5000);
    }

    food -= 2;
    water -= 2;
    energy -= 2;

    food_elem.innerHTML = `Еда - ${food}%`;
    water_elem.innerHTML = `Вода - ${water}%`;
    energy_elem.innerHTML = `Энергия - ${energy}%`;
}, 15000);

// Механика часов
function func_time() {
    // Получаем div где будет находиться таймер и вставляем туда время
    let timer_div = document.getElementById("P1-Text1");
    timer_div.innerHTML = `<i id="Jour">${day}: </i>
                           <i id="Time">${hour}:${minutes}</i>`;

    // Преобразуем минуты и часы типа String в тип Integer
    let minutes_int = parseInt(minutes);
    let hour_int = parseInt(hour);

    // Каждый раз прибавляем к минутам 5
    if (check_var === true) {
        minutes = minutes_int + 5;
    } else { }

    // Если минуты достигают 60-ти, тогда +1 час
    if (minutes === 60) {
        hour = hour_int + 1;
        minutes = 0;
    }

    // Новый день
    if (hour === 23 && minutes === 55) {
        hour = '0' + 0;
        day_num += 1;
        day = "День " + day_num;
    }

    // Если на часах меньше 10, добавлять в начале 0
    if (hour_int < 10) {
        hour_int = "0" + hour_int;
    }

    // Если на минутах меньше 10, добавлять в начале 0
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // 10:20 - Завтрак
    if (hour === 10 && minutes === 20) {
        main_div.innerHTML = `<p id="Thoughts">Оу, наверное уже пора вставать, пойду сделаю завтрак.</p>`;
        task_div.innerHTML = `<p id="Task">Сделать завтрак</p>`;
        Butt_Text2.innerHTML = `Сделать завтрак`;
    }

    // 11:10 - Серф в инете
    if (hour === 11 && minutes === 10) {
        check_var = false;
        main_div.innerHTML = `<p id="Thoughts">Пойду в инете посижу, посмотрю что нибудь</p>`;
        task_div.innerHTML = `<p id="Task">Посидеть в инете</p>`;
        Butt_Text2.innerHTML = `Начать`;
    }

    // 13:10 - Обед
    if (hour === 13 && minutes === 10) {
        check_var = false;
        main_div.innerHTML = `<p id="Thoughts">Надо бы перекусить чего-то</p>`;
        task_div.innerHTML = `<p id="Task">Пообедать</p>`;
        Butt_Text2.innerHTML = `Покушать`;
    }

    // 15:10 - Уборка и готовка
    if (hour === 15 && minutes === 10) {
        check_var = false;
        main_div.innerHTML = `<p id="Thoughts">Ладно, хватит сидеть уже за компьютером, 
                                                 надо убраться и ужин уже готовить</p>`;
        task_div.innerHTML = `<p id="Task">Начать убираться и готовить</p>`;
        Butt_Text2.innerHTML = `Прибраться и приготовить ужин`;
    }

    // 18:10 - Ужин и подготовка к стриму
    if (hour === 18 && minutes === 10) {
        check_var = false;
        main_div.innerHTML = `<p id="Thoughts">Так, ужин готов, позову Олега, поужинаем, и пойду готовиться к стриму</p>`;
        task_div.innerHTML = `<p id="Task">Ужинать и готовиться</p>`;
        Butt_Text2.innerHTML = `Поужинать и готовиться`;
    }

    // 19:10 - Начать стрим
    if (hour === 19 && minutes === 10) {
        check_var = false;
        Butt_Text2.style.visibility = "visible";
        main_div.innerHTML = `<p id="Thoughts">Окей, ладно, запускаю поточный</p>`;
        task_div.innerHTML = `<p id="Task">Начать стримить</p>`;
        Butt_Text2.innerHTML = `Запустить стрим`;
    }

    // 19:15 - Добавить кнопку "Открыть окно стрима"
    if (hour === 19 && minutes === 15) {
        Swal.fire({
            text: "Нажми на кнопку 'Открыть окно стрима!'"
        });
        btn_stream.style.visibility = "visible";
    }

    // 2:10 - Спать
    if (hour === 2 && minutes === 10) {
        check_var = false;
        btn_stream.parentNode.removeChild(btn_stream);
        main_div.innerHTML = `<p id="Thoughts">Ладно, поскорей лягу в кровать</p>`;
        task_div.innerHTML = `<p id="Task">Лечь в кровать</p>`;
        Butt_Text2.innerHTML = `Спать`;
    }
}