let myDays = document.querySelector(".days");
let myBars = document.querySelector(".bars");

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "data.json");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(myRequest.responseText);
    data.forEach((e) => {
      let div = document.createElement("div");
      let myDay = document.createTextNode(e.day);
      div.appendChild(myDay);
      myDays.appendChild(div);
    });
    data.forEach((e) => {
      let myHeight = e.amount / 7;
      let mydivAmount = document.createElement("div");
      mydivAmount.style.height = `${myHeight}rem`;
      mydivAmount.classList.add(`${e.day}`);
      mydivAmount.setAttribute("data-amount", `${e.amount}`);
      myBars.appendChild(mydivAmount);
    });
  }
};
