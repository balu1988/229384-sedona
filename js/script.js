/* Попап */

var bfind = document.querySelector(".btn-find");
var popup = document.querySelector(".index-form");
var arrive = popup.querySelector("[name=arrive]");
var form = popup.querySelector(".index-search-form");
var leave = popup.querySelector("[name=leave]");



bfind.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("index-form-show");
  arrive.focus();
});

form.addEventListener("submit", function(event) {
  if (!arrive.value || !leave.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("index-form-show")) {
      popup.classList.remove("index-form-show");
    }
  }
});
