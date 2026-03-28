const form = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = parsedData;

  form.elements.email.value = parsedData.email || "";
  form.elements.message.value = parsedData.message || "";
}


form.addEventListener("input", onInputChange);

function onInputChange(event) {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = { email: "", message: "" };

  form.reset();
}