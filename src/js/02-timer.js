import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elements = {
    dateSelect: document.querySelector("input#datetime-picker"),
    btnStart: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}
elements.btnStart.addEventListener("click", hendlerClick);
elements.dateSelect.addEventListener("input", hendlerInput);
elements.btnStart.disabled = true;

let interval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  }
};

function hendlerInput() {
  const selectedDates = new Date(elements.dateSelect.value);
 if (selectedDates <= new Date()) {
   Notify.failure('Please choose a date in the future')
     return;
    }
    else {
      elements.btnStart.disabled = false;
    }
}
const fp = flatpickr(elements.dateSelect, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTime(countdown) {
    elements.days.textContent = addLeadingZero(countdown.days)
    elements.hours.textContent = addLeadingZero(countdown.hours)
    elements.minutes.textContent = addLeadingZero(countdown.minutes)
    elements.seconds.textContent = addLeadingZero(countdown.seconds)
}

function hendlerClick() {
  const targetDate = new Date(elements.dateSelect.value);

  interval = setInterval(() => {
    const countTime = targetDate - new Date();
    const countdown = convertMs(countTime);
    updateTime(countdown)
  }, 1000);

}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}