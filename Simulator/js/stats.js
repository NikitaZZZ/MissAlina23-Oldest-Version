// Получение элементов в статистике и создания переменных статистики
let health_elem = document.getElementById("health"),
    food_elem = document.getElementById("food"),
    water_elem = document.getElementById("water"),
    energy_elem = document.getElementById("energy"),
    health = 100,
    food = 100,
    water = 100,
    energy = 100;

// Вывод элементов на сайт
health_elem.innerHTML = `Здоровье - ${health}%`;
food_elem.innerHTML = `Еда - ${food}%`;
water_elem.innerHTML = `Вода - ${water}%`;
energy_elem.innerHTML = `Энергия - ${energy}%`;

// Увелечение статов
function stat_plus() {
    if (food === 100) {} else {
        food += 1;
        food_elem.innerHTML = `Еда - ${food}%`;
    }

    if (water === 100) { } else {
        water += 2;
        water_elem.innerHTML = `Вода - ${water}%`;
    }

    if (health === 100) {} else {
        health += 1;
        health_elem.innerHTML = `Здоровье - ${health}%`;
    }

    if (energy === 100) {} else {
        energy += 2;
        energy_elem.innerHTML = `Энергия - ${energy}%`;
    }
}


