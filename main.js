function t11(event) {
  let keyboard = document.querySelectorAll(".btn");
  let capsLock = document.querySelector(".capslock");

  if (event.code === capsLock.getAttribute("data")) {
    capsLock.classList.toggle("active");
  }
  for (let key of keyboard) {
    if (key.getAttribute("data") === event.code) {
      key.classList.add("active");
    }
  }
}

function t12(event) {
  let keyboard = document.querySelectorAll(".btn");
  for (let key of keyboard) {
    key.classList.remove("active");
  }
}

document.querySelector(".i-11").addEventListener("keydown", t11);
document.querySelector(".i-11").addEventListener("keyup", t12);
