function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const elements = {
  bodyColor: document.querySelector("body"),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]')
}
let timerId = null;
elements.btnStart.addEventListener("click", hendlerClickOn);
elements.btnStop.addEventListener("click", hendlerClickOff);

function hendlerClickOn() {

    timerId = setInterval(() => {
        elements.bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);

    elements.btnStart.disabled = true;
    elements.btnStop.disabled = false;
}
function hendlerClickOff() {
    clearInterval(timerId);
elements.btnStart.disabled = false;
elements.btnStop.disabled = true;
}