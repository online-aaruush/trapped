const submit = document.querySelector("#btn-sub");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const answer = document.querySelector("#q1").value;

  if (answer === "ans1") {
    window.location.replace(
      "https://online-aaruush.github.io/trapped/hashxy.html"
    );
  } else {
    alert("Wrong answer, please try again!! :(");
  }
});
