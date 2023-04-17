const textarea = document.getElementById("textarea");
const total = document.getElementById("total-counter");
const remanin = document.getElementById("remaining-counter");

updateCounter();

textarea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  const enes = textarea.value.length;
  total.innerText = enes;
  remanin.innerText = textarea.getAttribute("maxlength") - enes;
}
