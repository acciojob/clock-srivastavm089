const rend = document.getElementById('timer')
const date = new Date();
let da = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minute = date.getMinute();
let second = date.getSeconds();
rend.innerText = `${da}/${month}/${year}, ${hours}:${minute}:${second}`;

