const submit = document.querySelector("#btn-sub");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const answer = document.querySelector("#q2").value;

  if (answer === "ans2") {
    window.location.replace(
      "https://online-aaruush.github.io/trapped/finalhash.html"
    );
  } else {
    alert("Wrong answer, please try again!! :(");
  }
});
