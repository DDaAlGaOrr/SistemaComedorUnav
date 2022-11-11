const inputDate = document.getElementById("date");

const btnDesayuno = document.getElementById("btnDesayuno");
const btnDesayunoVisita = document.getElementById("btnDesayunoVisita");
const btnDesayunoExterno = document.getElementById("btnDesayunoExterno");

const btnComidaVisita = document.getElementById("btnComidaVisita");
const btnComidaExterno = document.getElementById("btnComidaExterno");
const btnComidaInterno = document.getElementById("btnComidaInterno");

const btnVisitaCena = document.getElementById("btnCenaVisita");
const btnInternoCena = document.getElementById("btnInternoCena");
const btnCenaExterno = document.getElementById("btnCenaExterno");

btnDesayuno.addEventListener("click", () => {
  inputDate.setAttribute("form", "formDesayuno");
});
btnDesayunoVisita.addEventListener("click", () => {
  inputDate.setAttribute("form", "formDesayunoVisita");
});
btnDesayunoExterno.addEventListener("click", () => {
  inputDate.setAttribute("form", "formDesayunoExterno");
});

btnComidaInterno.addEventListener("click", () => {
  inputDate.setAttribute("form", "formComida");
});
btnComidaVisita.addEventListener("click", () => {
  inputDate.setAttribute("form", "formComidaVisita");
});
btnComidaExterno.addEventListener("click", () => {
  inputDate.setAttribute("form", "formComidaExterno");
});

btnInternoCena.addEventListener("click", () => {
  inputDate.setAttribute("form", "formCenaInterno");
});
btnVisitaCena.addEventListener("click", () => {
  inputDate.setAttribute("form", "formCenaVisita");
});
btnCenaExterno.addEventListener("click", () => {
  inputDate.setAttribute("form", "formCenaExterno");
});
