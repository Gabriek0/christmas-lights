const button_on = document.querySelector(".turnOn");
const button_off = document.querySelector(".turnOff");
const buttonInterval = document.querySelector(".buttonInterval");
const inputInterval = document.querySelector(".inputSpeed");
const light_bulbs = document.querySelector(".light-bulbs");
const light_bulb = light_bulbs.querySelectorAll(".light-bulb");

button_on.addEventListener("click", () => {
  light_bulbs.classList.add("on");
});

button_off.addEventListener("click", () => {
  light_bulbs.classList.remove("on");

  light_bulb.forEach((lights) => {
    lights.style.animationDuration = `1s`;
  });
});

buttonInterval.addEventListener("click", () => {
  let inputSpeed = inputInterval.value;

  if (inputSpeed <= 5) {
    light_bulb.forEach((lights) => {
      lights.style.animationDuration = `${inputSpeed}s`;
    });
  } else {
    light_bulb.forEach((lights) => {
      lights.style.animationDuration = `5s`;
    });
  }
});
