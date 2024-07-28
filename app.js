// Store elements in variables
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

//----------- handles form submission ---------------//
// Script for connecting to google form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyRptFgPV2-jyTbDZFd2aELuzNiebuBnFIr5Pdnl4N3ggI3HSoy73qsKSV-CqQZg6iySQ/exec";

// Add event listener to form submission
form.addEventListener("submit", (e) => {
  submitButton.disabled = true; // prevent double clicks
  e.preventDefault(); // prevent refresh
  let requestBody = new FormData(form);
  //   make post request
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
      location.reload();
    })
    .catch((error) => {
      alert("Error in form submission!", error.message);
      submitButton.disabled = false;
      location.reload();
    });
});
