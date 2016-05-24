var link = document.querySelector(".search-btn");
var popup = document.querySelector(".entrance-form");
var form = popup.querySelector("form");
var datemain = popup.querySelector("[name=date-main]");
var date = popup.querySelector("[name=date]");
var quantity = popup.querySelector("[name=quantity]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("entrance-form-show");
  date.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("entrance-form-show");
  popup.classList.remove("entrance-error");
});

form.addEventListener("submit", function(event) {
  if (!(datemain.value && date.value && quantity.value)) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("entrance-form-show")) {
      popup.classList.remove("entrance-form-show");
      popup.classList.remove("entrance-error");
    }
  }
});
