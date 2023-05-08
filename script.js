let target = document.getElementById('timer');

function updateTimer() {
  let date = new Date();
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  let hours = date.getHours().toString().padStart(2, '0');
  let minute = date.getMinutes().toString().padStart(2, '0');
  let second = date.getSeconds().toString().padStart(2, '0');
  let timer = `${day}/${month}/${year}, ${hours}:${minute}:${second}`;
  target.innerText = timer;
}

setInterval(updateTimer, 1000);