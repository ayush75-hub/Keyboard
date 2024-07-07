const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const delete_btn = document.querySelector(".delete");
const shift_btn = document.querySelector(".shift");
const space_btn = document.querySelector(".space");
const capslock = document.querySelector(".capslock");
const tab = document.querySelector(".tab");
const enter = document.querySelector(".enter");
let chars = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

delete_btn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

space_btn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});
tab.addEventListener("click", () => {
  chars.push("    ");
  textarea.value = chars.join("");
});

shift_btn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("lower");
  });
});

capslock.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("lower");
  });
});

// enter.addEventListener("click", () => {
//   buttons.forEach((btn) => {
//     chars.pust("");
//     textarea.value = chars.join("");
//   });
// });
