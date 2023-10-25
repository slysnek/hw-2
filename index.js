const taskButton = document.querySelector('.task-button');
const clearButton = document.querySelector('.clear');
const consoleList = document.querySelector('.console-list');
const consoleWindow = document.querySelector('.console-window');

clearButton.addEventListener('click', clearConsole);
taskButton.addEventListener('click', startTasking);

function clearConsole() {
  consoleList.innerHTML = '';
}

function startTasking() {
  setTimeout(() => {
    console.log('1 timeout');
    Promise.resolve().then(() => {
      console.log('1 promise resolved');
      consoleWindow.style.background = 'whitesmoke';
      consoleWindow.style.color = 'rgb(10, 10, 10)';
      const message = document.createElement('li');
      message.textContent = 'changed style - render';
      consoleList.appendChild(message);
    });
  }, 1000);

  setTimeout(() => {
    console.log('2 timeout');
    Promise.resolve().then(() => {
      console.log('2 promise resolved');
    });
    Promise.reject().catch(() => {
      console.log('2.1 promise rejected');
    });
  }, 2000);

  setTimeout(() => {
    console.log('3 timeout');
    Promise.resolve().then(() => {
      console.log('3 promise resolved');
      consoleWindow.style.background = 'rgb(10, 10, 10)';
      consoleWindow.style.color = 'whitesmoke';
      const message = document.createElement('li');
      message.textContent = 'changed style - render';
      consoleList.appendChild(message);
    });
  }, 3000);
}
