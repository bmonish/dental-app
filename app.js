const scriptURL =
  "https://script.google.com/macros/s/AKfycbyRCMwK0vzSHxOVRxzAKblxab-cfsA7wd6wuH_zM9qe2biL5b6-/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("submit-div").style.display = "none";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => (window.location = "thanks.html"))
    .catch((error) => console.error("Error!", error.message));
  alert("Survey Submitted Successfully!");
});
