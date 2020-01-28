function run() {
    let input = document.getElementById("input-command").value;

    if (input === "/show-stream-btn") {
        let btn = document.getElementById("btn-stream");
        btn.style.visibility = "visible";
    } else if (input === "/lvl-pc") {
        level_cpu = 5;
        level_gpu = 5;
        level_ram = 5;
        level_monitor = 5;
        level_web_cam = 5;
        level_microphone = 5;

        localStorage.setItem("cpu_level", level_cpu);
        localStorage.setItem("gpu_level", level_gpu);
        localStorage.setItem("ram_level", level_ram);
        localStorage.setItem("monitor_level", level_monitor);
        localStorage.setItem("web_cam_level", level_web_cam);
        localStorage.setItem("microphone_level", level_microphone);

        cpu_level.innerHTML = `Ур. - ${level_cpu}`;
        gpu_level.innerHTML = `Ур. - ${level_gpu}`;
        ram_level.innerHTML = `Ур. - ${level_ram}`;
        monitor_level.innerHTML = `Ур. - ${level_monitor}`;
        web_cam_level.innerHTML = `Ур. - ${level_web_cam}`;
        microphone_level.innerHTML = `Ур. - ${level_microphone}`;

        cpu_cost.parentNode.removeChild(cpu_cost);
        gpu_cost.parentNode.removeChild(gpu_cost);
        ram_cost.parentNode.removeChild(ram_cost);
        monitor_cost.parentNode.removeChild(monitor_cost);
        web_cam_cost.parentNode.removeChild(web_cam_cost);
        microphone_cost.parentNode.removeChild(microphone_cost);
    } else if (input === "/stop-stats") {
        
    } else if (input === "/money") {
        money = 999999;
        money_p.innerHTML = `Монет - ${money}`;
        localStorage.setItem("money", money);
    }
}