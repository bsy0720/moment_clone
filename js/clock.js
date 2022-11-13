const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// padStart는 string이기 때문에 넘버인 date를 string으로 감싸줘야한다.

getClock(); // 시계를 즉시 호출하는거
setInterval(getClock, 1000); // 이곳이 실시간으로 시간을 보여주고있음.
