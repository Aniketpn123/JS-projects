const buttons = document.querySelectorAll('button');
const inputField = document.querySelector('input');

let task = localStorage.getItem('task') || '';
displayTask();

inputField.addEventListener('input', (e) => {  
  task = inputField.value;
  displayTask();
});
inputField.addEventListener('keypress', (e) => {
  const allowed = /[0-9+\-*/.%]/;

  if (!allowed.test(e.key)) {
    e.preventDefault(); 
  }
  if (e.key ==='Enter'){
    task =eval(task);
    displayTask();
  }

});

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      if(task.trim()==''){
        return;
      }
      task = eval(task);
      displayTask();
      return;
    }
    if (e.target.innerHTML.toUpperCase() === 'C') {
      task = '';
      displayTask();

      return;
    }
    if (e.target.innerText.trim() == '<') {
      task = task.slice(0, -1);

      displayTask();

      return;
    }
    if (e.target.innerText.trim() === 'X') {
      task += '*';
      displayTask();
      return;
    }

    if (e.target.innerHTML === '+/-') {
      if (task.charAt(0) === '-') {
        task = task.slice(1);
      } else {
        task = '-' + task;
      }
      displayTask();
      return;
    }

    inputField.innerHTML = task;
    task += e.target.innerHTML;

    displayTask();
  });
});

function displayTask() {
  
  inputField.value = task;
  let length = task.length
  inputField.style.fontSize = Math.max(14,36- length)+'px';
  store();
}

function store() {
  localStorage.setItem('task', task);
}
