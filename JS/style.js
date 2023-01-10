// human,anime,musicのやつ
function start_button() {
    const yurasu = document.getElementById('img_yureru');
    if (yurasu.className == null || yurasu.className == "") {
        yurasu.className = 'omikuji_img';
    }
    const StartButton = document.getElementById("button_start");
    const StopButton = document.getElementById("button_stop");
    StartButton.style.display = 'none';
    StopButton.style.display = 'block';
}

function stop_button() {
    const yurasu = document.getElementById('img_yureru');
    yurasu.className = '';
    const StartButton = document.getElementById("button_start");
    const StopButton = document.getElementById("button_stop");
    StartButton.style.display = 'block';
    StopButton.style.display = 'none';
}

