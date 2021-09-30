const dailyPeriod = document.getElementById("daily");
const weeklyPeriod = document.getElementById("weekly");
const monthlyPeriod = document.getElementById("monthly");
const cardFooter = document.querySelectorAll(".card-footer");
const timePeriods = [dailyPeriod, weeklyPeriod, monthlyPeriod];

var myData = "";

fetch("./data.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    myData = data;
  });

var count = 0;

setTimeout(() => {
  cardFooter.forEach((card) => {
    card.children[0].innerHTML = `${myData[count].timeframes.weekly.current}hrs`;
    card.children[1].innerHTML = `Last Week- ${myData[count].timeframes.weekly.previous}hrs`;
    count++;
  });
}, 1000);

dailyPeriod.addEventListener("click", () => {
  toggleActive(dailyPeriod);
});
weeklyPeriod.addEventListener("click", () => {
  toggleActive(weeklyPeriod);
});
monthlyPeriod.addEventListener("click", () => {
  toggleActive(monthly);
});

function toggleActive(timePeriod) {
  timePeriod.classList.toggle("active");
  count = 0;
  if (timePeriod === dailyPeriod) {
    cardFooter.forEach((card) => {
      card.children[0].innerHTML = `${myData[count].timeframes.daily.current}hrs`;
      card.children[1].innerHTML = `Last Week- ${myData[count].timeframes.daily.previous}hrs`;
      count++;
    });
  } else if (timePeriod === weeklyPeriod) {
    cardFooter.forEach((card) => {
      card.children[0].innerHTML = `${myData[count].timeframes.weekly.current}hrs`;
      card.children[1].innerHTML = `Last Week- ${myData[count].timeframes.weekly.previous}hrs`;
      count++;
    });
  } else {
    cardFooter.forEach((card) => {
      card.children[0].innerHTML = `${myData[count].timeframes.monthly.current}hrs`;
      card.children[1].innerHTML = `Last Week- ${myData[count].timeframes.monthly.previous}hrs`;
      count++;
    });
  }
  timePeriods.forEach((value) => {
    if (value !== timePeriod) {
      value.classList.remove("active");
    }
  });
}
