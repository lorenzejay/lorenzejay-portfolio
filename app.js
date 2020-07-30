// nav-bar
const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
});

// modal-popup
const openModalBtn = document.querySelector(".get-in-touch-btn");
const modalForm = document.querySelector(".form-container");
const modalSubmit = document.querySelector(".modal-submit-btn");
const firstName = document.getElementById("modal-fname");
const lastName = document.getElementById("modal-Lname");
const email = document.getElementById("modal-email");
const error = document.querySelector(".modal-error");
const closeModal = document.querySelector(".close-modal-btn");

openModalBtn.addEventListener("click", () => {
  modalForm.classList.toggle("form-container-display");
});
closeModal.addEventListener("click", () => {
  modalForm.classList.remove("form-container-display");
});

modalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let allErrors = [];
  if (firstName.value === "" || firstName.value === null) {
    allErrors.push("Please Enter First Name");
  }
  if (lastName.value === "" || lastName.value === null) {
    allErrors.push("Please enter Last Name");
  }
  if (email.value === "" || email.value === null) {
    allErrors.push("Please enter an Email");
  }

  allErrors.join(" ");
  error.innerText = allErrors;
  console.log(firstName.value);
});
