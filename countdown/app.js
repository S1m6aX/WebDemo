const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

const endDate = new Date("July 17, 2024 16:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  // 计算剩余天数、小时、分钟和秒数
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // 更新HTML中的元素
  dayEl.innerText = days;
    hourEl.innerText = hours;
    minEl.innerText = minutes;
    secEl.innerText = seconds

   // 倒计时结束时的处理
   if (timeLeft < 0) {
    clearInterval(countdownInterval);
    dayEl.innerText = 0;
    hourEl.innerText = 0;
    minEl.innerText = 0;
    secEl.innerText = 0;
    alert("Giveaway has ended!");
}
}
// 每秒更新一次倒计时
const countdownInterval = setInterval(updateCountdown, 1000);

// 初始化倒计时
window.addEventListener('load', updateCountdown)