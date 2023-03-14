const timer = document.querySelector('.timer');
const form = document.getElementById('register-form');
const submitButton = document.getElementById('submit_button');

let countDown = 5;

const downGradeCountDown = () => {
  timer.textContent = '';
  countDown--;
  if(countDown) {
    timer.textContent = 'Осталось ' + countDown + ' с.'
  } else {
    clearInterval(countDownInterVal)
    timer.textContent = 'Время вышло!'
    submitButton.disabled = true;
  }
}

const countDownInterVal = setInterval(() => {
  downGradeCountDown()
}, 1000)


form.onsubmit = (e) => {
  e.preventDefault();
  const requiredElemsValues = Array.from(e.target.elements).filter(el => el.required === true).map(el => el.value);
  if(!countDown || requiredElemsValues.some(el => !el)){
    alert('Хитрость не поможет в обучении :)')
  } else {
    clearInterval(countDownInterVal);
    timer.textContent = 'Форма отправлена'
    alert('Задание успешно выполнено!')
  }
}

downGradeCountDown()


