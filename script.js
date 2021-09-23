"use strict";

const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if (form.style.opacity === "0") {
    form.style.opacity = "1";
  } else {
    form.style.opacity = "0";
  }
});

const submit = document.querySelector("#btn-sub");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const answer = document.querySelector("#q").value;

  if (answer === "ans1") {
    window.location.hash =
      "https://online-aaruush.github.io/trapped/hashxy.html";
  }
  if (answer === "ans2") {
    window.location.hash =
      "https://online-aaruush.github.io/trapped/finalhash.html";
  } else {
    alert("Wrong answer, please try again!! :(");
  }
});
