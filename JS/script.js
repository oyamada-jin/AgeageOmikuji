// humanのやつ
function start_button_1() {
    const yurasu = document.getElementById('img_yureru');
    if (yurasu.className == null || yurasu.className == "") {
        yurasu.className = 'omikuji_img';
    }
    const StartButton = document.getElementById("button_start_1");
    const StopButton = document.getElementById("button_stop_1");
    StartButton.style.display = 'none';
    StopButton.style.display = 'block';
}

function stop_button_1() {
    const yurasu = document.getElementById('img_yureru');
    yurasu.className = '';
    const StartButton = document.getElementById("button_start_1");
    const StopButton = document.getElementById("button_stop_1");
    StartButton.style.display = 'block';
    StopButton.style.display = 'none';
    location.href ='./human1-2.html';
}