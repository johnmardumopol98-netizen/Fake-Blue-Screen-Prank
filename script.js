let percent = 0;
let display = document.getElementById("percent");

let load = setInterval(function() {
    if (percent >= 100) {
        clearInterval(load);
    } else {
        percent++;
        display.innerHTML = percent;
    }
}, 50);

function exitPrank() {
    document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;'>😂 Relax! Just a Prank!</h1>";
}
