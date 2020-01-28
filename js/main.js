// Кнопка "Начать игру(Start)" переносить в index.html
function start() { location.href = "index.html"; }

// Вызов консоли
document.addEventListener("keypress", (e) => {
    if (e.key === "u" || e.key === "г") {
        location.href = "#modal-console";
    }
});

// Кнопка вызова окна 'Обратной связи'
document.addEventListener("keypress", (e) => {
    if (e.key === "с" || e.key === "c" 
    || e.key === "C" || e.key === "С") {
        Swal.fire({
            title: 'Обратная связь с разработчиком (Баги, предложения)',
            icon: 'info',
            html: 
                '<a href="https://vk.com/virtualp1" id="vk-link"><i class="fab fa-vk"></i> ВКонтакте (Разработчик 1, по всем вопросам)</a> <br>' +
                '<a href="https://vk.com/23tvrus" id="vk-link"><i class="fab fa-vk"></i> ВКонтакте (Разработчик 2)</a> <br>' +
                '<a href="https://vk.com/public_lar" id="vk-link"><i class="fab fa-vk"></i> Группа в ВКонтакте (Новости Симулятора)</a>'
        })
    }
});