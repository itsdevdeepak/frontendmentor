const formCard = document.getElementById("newsletterForm");
const thanksMsgCard = document.getElementById("newsletterThanksMsg");
const elForm = formCard.getElementsByTagName("form")[0];
const elEmail = document.getElementById("email");
const elEmailErrorMsg = document.getElementById("emailErrorMsg");
const elSubscriberEmail = document.getElementById("subscriberEmail");
const elDismissMsgBtn = document.querySelector("#newsletterThanksMsg .button")
const emailRegex = /\S+@\S+\.\S+/; // not much ??
// Use this then
// (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]);

const validateEmailAndReturnError = () => {
  const isEmpty = elEmail.value.trim() === "";
  
  if(isEmpty) return "Required Field";

  if(!elEmail.value.match(emailRegex)) return "Valid email required"
  
  return;
}


elForm.addEventListener("submit", (event) => {
  event.preventDefault();

  elEmailErrorMsg.innerText = "";
  elEmail.classList.remove("invalid")
  elEmail.removeAttribute("aria-invalid");

  const error = validateEmailAndReturnError();

  if(error) {
    elEmailErrorMsg.innerText = error;
    elEmail.classList.add("invalid")
    elEmail.setAttribute("aria-invalid", "true");
    elEmail.focus();
    return;
  }

  elSubscriberEmail.innerText = elEmail.value.trim();
  thanksMsgCard.classList.remove("is-hidden");
  formCard.classList.add("is-hidden");
})

elDismissMsgBtn.addEventListener("click", () => {
  elEmail.value = "";
  formCard.classList.remove("is-hidden");
  thanksMsgCard.classList.add("is-hidden");
})