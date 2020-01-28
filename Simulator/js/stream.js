/* Чем больше уровень ресурсов - тем больше прибавление/вычитание фолловеров/зрителей/доната */

// Получаем параграф монет
let money_p_stream = document.getElementById("stream-money");

// Получаем зрители/фолловеры из localStorage
let followers_plus_lc_str = localStorage.getItem("followers_plus_lc");
let watchers_plus_lc_str = localStorage.getItem("watchers_plus_lc");
let watchers_minus_lc_str = localStorage.getItem("watchers_minus_lc");

// Преобразуем переменные зрители/фолловеры из String в Integer
let followers_plus_lc = parseInt(followers_plus_lc_str);
let watchers_plus_lc = parseInt(watchers_plus_lc_str);
let watchers_minus_lc = parseInt(watchers_minus_lc_str);

//Функция прибавление фолловеров
function followers_plus_check_func() {
    if (followers_plus_lc === undefined 
        && watchers_plus_lc === undefined 
        && watchers_minus_lc === undefined) 
    {
        followers += followers_plus;
        flw.innerHTML = followers;
    }  else {
        followers += followers_plus_lc;
        flw.innerHTML = followers;
    }
}

// Функция прибавление зрителей
function watchers_plus_check_func() {
    if (followers_plus_lc === undefined 
        && watchers_plus_lc === undefined 
        && watchers_minus_lc === undefined) 
    {
        watchers += watchers_plus;
        watchers_p.innerHTML = watchers;
    }  else {
        watchers += watchers_plus_lc;
        watchers_p.innerHTML = watchers;
    }
}

// Функция вычитания зрителей
function watchers_minus_check_func() {
    if (watchers >= 50) {
        if (followers_plus_lc === undefined 
            && watchers_plus_lc === undefined 
            && watchers_minus_lc === undefined) 
        {
            watchers -= watchers_minus;
            watchers_p.innerHTML = watchers;
        }  else {
            watchers -= watchers_minus_lc + 5;
            watchers_p.innerHTML = watchers;
        }
    } else if (watchers >= 100) {
        if (followers_plus_lc === undefined 
            && watchers_plus_lc === undefined 
            && watchers_minus_lc === undefined) 
        {
            watchers -= watchers_minus;
            watchers_p.innerHTML = watchers;
        }  else {
            watchers -= watchers_minus_lc + 10;
            watchers_p.innerHTML = watchers;
        }
    } else {
        if (followers_plus_lc === undefined 
            && watchers_plus_lc === undefined 
            && watchers_minus_lc === undefined) 
        {
            watchers -= watchers_minus;
            watchers_p.innerHTML = watchers;
        }  else {
            watchers -= watchers_minus_lc;
            watchers_p.innerHTML = watchers;
        }
    }
}

// Проверка есть ли переменные для прибавление/вычитания фолловеров/зрителей
if (followers_plus_lc === undefined 
    && watchers_plus_lc === undefined 
    && watchers_minus_lc === undefined) 
{ } else {
    followers_plus = 1;
    watchers_plus = 6;
    watchers_minus = 3;

    localStorage.setItem("followers_plus_lc", followers_plus);
    localStorage.setItem("watchers_plus_lc", watchers_plus);
    localStorage.setItem("watchers_minus_lc", watchers_minus);
}

// Прибавление фолловеров каждые 10 секунд
setInterval(() => {
    if (true_var === true) {
        followers_plus_check_func();
    } else { }
}, 10000);
       
// Прибавление зрителей каждые 3 секунды
setInterval(() => {
    if (true_var === true) {
        watchers_plus_check_func();
    } else { }
}, 3000);

// Вычитание зрителей каждые 6 секунды
setInterval(() => {
    if (true_var === true) {
        watchers_minus_check_func();
    } else { }
}, 6000);

// Донат каждые 15 секунд
setInterval(() => {
    if (true_var === true) {
        let number = (Math.random() * 22) + 1;
        let number_int = parseInt(number);
        
        donat = donat + money_array[number_int];
        donat_p.innerHTML = money_array[number_int];
        donat_all.innerHTML = `Всего: ${donat}`;
        money_int += 15;

        money_p.innerHTML = `Монеты - ${money_int}`;
        money_p_stream.innerHTML = `${money_int}`;
    } else {  }
}, 25000);

