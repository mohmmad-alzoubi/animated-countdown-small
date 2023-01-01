const numbers = document.querySelectorAll(".number");
const counter = document.querySelector(".parent");
const finalMsg = document.querySelector(".final");
const replayBtn = document.querySelector(".btn");

startAnimation();

function startAnimation() {
  numbers.forEach((number, idx) => {
    const lastItem = numbers.length - 1;
    number.addEventListener("animationend", (e) => {
      if (e.animationName === "in" && idx != lastItem) {
        number.classList.remove("active");
        number.classList.add("inactive");
      } else if (e.animationName === "out" && number.nextElementSibling) {
        number.nextElementSibling.classList.add("active");
      } else {
        counter.classList.add("hide");
        finalMsg.classList.remove("hide");
      }
    });
  });
}

replayBtn.addEventListener("click", () => {
  numbers.forEach((number) => {
    number.classList.remove("active");
    number.classList.remove("inactive");
  });
  numbers[0].classList.add("active");
  counter.classList.remove("hide");
  finalMsg.classList.add("hide");
  startAnimation();
});
