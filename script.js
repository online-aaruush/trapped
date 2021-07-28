"use strict";

const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const answer = prompt("Your answer");
  if (answer === "ABCD") {
    form.classList.add("formmm1");
    form.classList.remove("formmm");
  } else {
    alert("Wrong");
    form.classList.add("formmm");
    form.classList.remosve("formmm1");
  }
});
