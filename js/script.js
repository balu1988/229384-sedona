var bfind = document.querySelector(".btn-find");
var popup = document.querySelector(".index-form");
var arrive = popup.querySelector(".js-arrive");
var form = popup.querySelector(".index-search-form");
var leave = popup.querySelector(".js-leave");
var jsfree = document.querySelector(".no-js");

jsfree.classList.remove("no-js");

bfind.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("js-form-show");
  arrive.focus();
});

form.addEventListener("submit", function(event) {
  if (!arrive.value || !leave.value) {
    event.preventDefault();
    popup.classList.remove("js-modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("js-modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("js-form-show")) {
      popup.classList.remove("js-form-show");
    }
  }
});

