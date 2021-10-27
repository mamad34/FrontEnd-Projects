window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  let date = new Date();

  //   console.log(date.setTime(50000));

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  /*
  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;
  */
  let time = `${h}:${m}:<small>${s}</small>|${session}`;
  console.log(time);

  document.getElementById("displayclock").innerHTML = time;
  setTimeout(showTime, 1000);

  let bg;

  const userName = "Mamad";
  const user = document.getElementById("user");
  if (h < 8 && session === "AM") {
    bg = `url(morning.jpg)`;
    user.innerHTML = `GoodMorning ${userName}`;
  } else if (h < 11 && session === "AM") {
    bg = `url(morning.jpg)`;
    user.innerHTML = `GoodDay ${userName}`;
  } else if (h < 8 && session === "PM") {
    bg = `url(morning.jpg)`;
    user.innerHTML = `GoodAfterNoon ${userName}`;
  } else {
    bg = `url(morning.jpg)`;
    user.innerHTML = `GoodNight ${userName}`;
  }
  const body = document.querySelector("body");
  body.style.background = `${bg} center/cover`;
}

document
  .querySelector(".focus-container input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const focus = document.querySelector(".focus-container input");
      document.querySelector(
        ".focus-container"
      ).innerHTML = `<h6>Today:</h6><h1>${focus.value}</h1>`;
    }
  });
