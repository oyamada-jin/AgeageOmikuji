//musicのやつ
function start_button_3() {
    const yurasu = document.getElementById('img_yureru');
    if (yurasu.className == null || yurasu.className == "") {
        yurasu.className = 'omikuji_img';
    }
    const StartButton = document.getElementById("button_start_3");
    const StopButton = document.getElementById("button_stop_3");
    StartButton.style.display = 'none';
    StopButton.style.display = 'block';
}

function stop_button_3() {
    const yurasu = document.getElementById('img_yureru');
    yurasu.className = '';
    const StartButton = document.getElementById("button_start_3");
    const StopButton = document.getElementById("button_stop_3");
    StartButton.style.display = 'block';
    StopButton.style.display = 'none';
    location.href ='./music1-2.html';
}