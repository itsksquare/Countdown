const countdown = () => {
  const countDate = new Date("January 1, 2022 00:00:00").getTime();
  const today = new Date().getTime();
  const difference = countDate - today;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const finalDay = Math.floor(difference / day);
  const finalHour = Math.floor((difference % day) / hour);
  const finalMinute = Math.floor((difference % hour) / minute);
  const finalSecond = Math.floor((difference % minute) / second);

  document.querySelector(".day").innerText = finalDay;
  document.querySelector(".hour").innerText = finalHour;
  document.querySelector(".minute").innerText = finalMinute;
  document.querySelector(".second").innerText = finalSecond;
};

setInterval(countdown, 1000);
