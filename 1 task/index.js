const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (timerEl) => {
  return (seconds) => { 
    let interval = setInterval(() => {
      if (seconds === 0){
        clearInterval(interval);
        alert('Время закончилось,введи минуты в таймер');
      }else
      {
        let temp=seconds;
        let Hours = Math.floor(temp / 60 / 60);
        let Minutes = Math.floor(temp / 60) - (Hours * 60);
        let sec = temp%60;
        timerEl.textContent= [Hours.toString().padStart(2, '0'),
        Minutes.toString().padStart(2, '0'),
        sec.toString().padStart(2, '0')
        ].join(':');
        seconds--;
      }
    },1000)
  };
};
const animateTimer = createTimerAnimator(timerEl);

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
