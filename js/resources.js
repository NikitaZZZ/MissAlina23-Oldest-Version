// Монеты
let money = 0;

// Уровень
let level_cpu = 1,
    level_gpu = 1,
    level_ram = 1,
    level_web_cam = 1,
    level_monitor = 1,
    level_microphone = 1;

// Создаем список денег доната
let money_array = [50, 60, 70, 80, 90, 100, 130, 140, 150, 
    200, 230, 240, 250, 300, 330, 340, 350, 400, 430, 440, 450, 500, 1000];

// Получаем параграф зрителей/фолловеров/доната
let watchers_p = document.getElementById("watchers");
let flw = document.getElementById("followers");
let donat_p = document.getElementById("donat");
let donat_all = document.getElementById("donat-all");

// Создаем перемнные фолловеры, зрители и донат
let followers = 18600;
let watchers = 0;
let donat = 0;

// Ддля доната/фолловеров/зрителей
let true_var = false;

// Цена
let cost_cpu = 100,
    cost_gpu = 100,
    cost_ram = 100,
    cost_monitor = 100,
    cost_web_cam = 100,
    cost_microphone = 100;

// Получаем все ресуры из localStorage
let money_level_ls = localStorage.getItem("money"),
    gpu_level_ls = localStorage.getItem("gpu_level"),
    gpu_cost_ls = localStorage.getItem("gpu_cost"),
    cpu_level_ls = localStorage.getItem("cpu_level"),
    cpu_cost_ls = localStorage.getItem("cpu_cost"),
    ram_level_ls = localStorage.getItem("ram_level"),
    ram_cost_ls = localStorage.getItem("ram_cost"),
    monitor_level_ls = localStorage.getItem("monitor_level"),
    monitor_cost_ls = localStorage.getItem("monitor_cost"),
    web_cam_level_ls = localStorage.getItem("web_cam_level"),
    web_cam_cost_ls = localStorage.getItem("web_cam_cost"),
    microphone_level_ls = localStorage.getItem("microphone_level"),
    microphone_cost_ls = localStorage.getItem("microphone_cost");

// Получаем все элементы level ресурсов
let money_p = document.getElementById("money"),
    gpu_level = document.getElementById("level_2"),
    cpu_level = document.getElementById("level"),
    ram_level = document.getElementById("level_3"),
    monitor_level = document.getElementById("level_4"),
    web_cam_level = document.getElementById("level_5"),
    microphone_level = document.getElementById("level_6");

// Получаем все элементы cost ресурсов
let cpu_cost = document.getElementById("cost"),
    gpu_cost = document.getElementById("cost_2"),
    ram_cost = document.getElementById("cost_3"),
    monitor_cost = document.getElementById("cost_4"),
    web_cam_cost = document.getElementById("cost_5"),
    microphone_cost = document.getElementById("cost_6");

// Преобразование переменных уровней ресурсов с типом String в тип Integer
let level_cpu_int = parseInt(level_cpu);
let level_gpu_int = parseInt(level_gpu);
let level_ram_int = parseInt(level_ram);
let level_monitor_int = parseInt(level_monitor);
let level_web_cam_int = parseInt(level_web_cam);
let level_microphone_int = parseInt(level_microphone);

// Проверака есть ли монеты в localStorage, если нет - создавать перменную и выводить ее.
if (money_level_ls !== null) {
    money = money_level_ls;
    money_p.innerHTML = `Монет - ${money_level_ls}`;
} else {
    money = 400;
    money_p.innerHTML = `Монет - ${money}`;
}

// Проверка есть ли ресурсы в localStorage, если нет - Ур. 1, Цена - 100м

// Процессор
if (cpu_level_ls !== null) {
    level_cpu = cpu_level_ls;
    cpu_level.innerHTML = `Ур. - ${cpu_level_ls}`;
    cpu_cost.innerHTML = ` - ${cpu_cost_ls}м`;
} else {
    cpu_level.innerHTML = `Ур. - 1`;
    cpu_cost.innerHTML = ` - ${cost_cpu}м`;
}

// Видеокарта
if (gpu_level_ls !== null) {
    level_gpu = gpu_level_ls;
    gpu_level.innerHTML = `Ур. - ${gpu_level_ls}`;
    gpu_cost.innerHTML = ` - ${gpu_cost_ls}м`;
} else {
    gpu_level.innerHTML = `Ур. - 1`;
    gpu_cost.innerHTML = ` - ${cost_gpu}м`;
}

// Оперативная память
if (ram_level_ls !== null) {
    level_ram = ram_level_ls;
    ram_level.innerHTML = `Ур. - ${ram_level_ls}`;
    ram_cost.innerHTML = ` - ${ram_cost_ls}м`;
} else {
    ram_level.innerHTML = `Ур. - 1`;
    ram_cost.innerHTML = ` - ${cost_ram}м`;
}

// Монитор
if (monitor_level_ls !== null) {
    level_monitor = monitor_level_ls;
    monitor_level.innerHTML = `Ур. - ${monitor_level_ls}`;
    monitor_cost.innerHTML = ` - ${monitor_cost_ls}м`;
} else {
    monitor_level.innerHTML = `Ур. - 1`;
    monitor_cost.innerHTML = ` - ${cost_monitor}м`;
}

// Веб-камера
if (web_cam_level_ls !== null) {
    level_web_cam = web_cam_level_ls;
    web_cam_level.innerHTML = `Ур. - ${web_cam_level_ls}`;
    web_cam_cost.innerHTML = ` - ${web_cam_cost_ls}м`
} else {
    web_cam_level.innerHTML = `Ур. - 1`;
    web_cam_cost.innerHTML = ` - ${cost_web_cam}м`;
}

// Микрофон
if (microphone_level_ls !== null) {
    level_microphone = microphone_level_ls;
    microphone_level.innerHTML = `Ур. - ${microphone_level_ls}`;
    microphone_cost.innerHTML = ` - ${microphone_cost_ls}м`;
} else {
    microphone_level.innerHTML = `Ур. - 1`;
    microphone_cost.innerHTML = ` - ${cost_microphone}м`;
}

// Повышение уровня каждого ресурса ПК
// Процессор
function cpu_up_level() {
    cpu_level_ls = localStorage.getItem("cpu_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_cpu) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_cpu) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали процессор!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_cpu;
        level_cpu_int += 1;
        cost_cpu += 150;
        followers_plus += 1;
        watchers_plus += 2;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("cpu_level", level_cpu_int);
        localStorage.setItem("cpu_cost", cost_cpu);
        localStorage.setItem("money", money);
        cpu_level.innerHTML = `Ур. - ${level_cpu_int}`;
        money_p.innerHTML = `Монет - ${money}`;
        cpu_cost.innerHTML = ` - ${cost_cpu}м`;
    }
}

// Видеокарта
function gpu_up_level() {
    gpu_level_ls = localStorage.getItem("gpu_level");
    money_level_ls = localStorage.getItem("money");

    if (money < cost_gpu) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_gpu) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали видеокарту!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_gpu;
        level_gpu_int += 1;
        cost_gpu += 150;
        followers_plus += 1;
        watchers_plus += 2;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("gpu_level", level_gpu_int);
        localStorage.setItem("gpu_cost", cost_gpu);
        localStorage.setItem("money", money);
        gpu_level.innerHTML = `Ур. - ${level_gpu_int}`;
        money_p.innerHTML = `Монет - ${money}`;
        gpu_cost.innerHTML = ` - ${cost_gpu}м`;
    }
}

// Оперативная память
function ram_up_level() {
    ram_level_ls = localStorage.getItem("ram_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_ram) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_ram) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали оперативную память!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_ram;
        level_ram_int += 1;
        cost_ram += 150;
        followers_plus += 1;
        watchers_plus += 2;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("ram_level", level_ram_int);
        localStorage.setItem("ram_cost", cost_ram);
        localStorage.setItem("money", money);
        ram_level.innerHTML = `Ур. - ${level_ram_int}`;
        money_p.innerHTML = `Монет - ${money}`;
        ram_cost.innerHTML = ` - ${cost_ram}м`;
    }
}

// Монитор
function monitor_up_level() {
    monitor_level_ls = localStorage.getItem("monitor_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_monitor) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_monitor) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали монитор!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_monitor;
        level_monitor_int += 1;
        cost_monitor += 150;
        followers_plus += 1;
        watchers_plus += 2;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("monitor_level", level_monitor_int);
        localStorage.setItem("monitor_cost", cost_monitor);
        localStorage.setItem("money", money);
        monitor_level.innerHTML = `Ур. - ${level_monitor_int}`;
        money_p.innerHTML = `Монет - ${money}`;
        monitor_cost.innerHTML = ` - ${cost_monitor}м`;
    }
}

// Веб-камера
function web_cam_up_level() {
    web_cam_level_ls = localStorage.getItem("web_cam_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_web_cam) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_web_cam) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали веб-камеру!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_web_cam;
        level_web_cam_int += 1;
        cost_web_cam += 150;
        followers_plus += 1;
        watchers_plus += 2;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("web_cam_level", level_web_cam_int);
        localStorage.setItem("web_cam_cost", cost_web_cam);
        localStorage.setItem("money", money);
        web_cam_level.innerHTML = `Ур. - ${level_web_cam_int}`;
        money_p.innerHTML = `Монет - ${money}`;
        web_cam_cost.innerHTML = ` - ${cost_web_cam}м`;
    }
}

// Микрофон
function microphone_up_level() {
    microphone_level_ls = localStorage.getItem("microphone_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_microphone) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_microphone) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали микрофон!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_microphone;
        level_microphone_int += 1;
        cost_microphone += 150;
        followers_plus += 1;
        watchers_plus += 2;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("microphone_level", level_microphone_int);
        localStorage.setItem("microphone_cost", cost_microphone);
        localStorage.setItem("money", money);
        microphone_level.innerHTML = `Ур. - ${level_microphone_int}`;
        money_p.innerHTML = `Монет - ${money}`;
        microphone_cost.innerHTML = ` - ${cost_microphone}м`;
    }
}