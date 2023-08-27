import Notiflix from 'notiflix';
const form = document.querySelector(".form");
const btn = document.querySelector('button[type="submit"]');

form.addEventListener("submit", hendlerSubmit);

const { delay, step, amount } = form.elements;

function createPromise(position, delay) {
  return new Promise((res, rej) => {
     setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
  
    if (shouldResolve) {
      // Fulfill
      res({position, delay});
    } else {
      // Reject
      rej({position, delay});
     }
  }, delay);
  })
}

function hendlerSubmit(evt) { 
  evt.preventDefault();
  btn.disabled = true;
  const inputDelay = Number(delay.value);
  const inputStep = Number(step.value);
  const inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount ; i += 1) {
    const position = i;
    const currentDelay = inputDelay + ((i - 1) * inputStep);
let promisesCount = 0;
function promisesAmount() {
  promisesCount += 1;
  if (promisesCount = inputAmount) {
    btn.disabled = false;
  }
};
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        promisesAmount();
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    promisesAmount();
  });
  }
};

