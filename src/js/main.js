const buttonOn = document.querySelector(".buttonOn");
const buttonOff = document.querySelector(".buttonOff");
const buttonRun = document.querySelector(".buttonRun");
const input = document.querySelector(".inputSpeed");
const lights = document.querySelector(".light-bulbs");
const lightBulbs = lights.querySelectorAll(".light-bulb");

buttonOn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  lights.classList.add("on");
});

buttonOff.addEventListener("click", () => {
  lights.classList = "light-bulbs";

  lightBulbs.forEach((lightBulb) => {
    lightBulb.style.animationDuration = ``;
  });
});

buttonRun.addEventListener("click", () => {
  let inputSpeed = input.value;

  if (inputSpeed <= 5) {
    lightBulbs.forEach((lightBulb) => {
      lightBulb.style.animationDuration = `${inputSpeed}s`;
    });
  } else {
    alert("The allowed speed is up to 5");
  }
});
