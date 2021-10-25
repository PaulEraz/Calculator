const input = document.querySelector('#display');
const buttons = [...document.querySelectorAll('[data-operand]')];
const equal = document.querySelector('[data-equal]');
const clear = document.querySelector('[data-clear]');

buttons.forEach(button =>
  button.addEventListener('click', e => {
    input.value += e.target.value;
  })
);

equal.addEventListener('click', () => {
  try {
    if (input.value) {
      input.value = eval(input.value);
    }
  } catch {
    input.value = 'ERROR';
    setTimeout(() => (input.value = ''), 1000);
  }
});

clear.addEventListener('click', () => {
  input.value = '';
});
