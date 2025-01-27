// Count-Down starts
let valueDisplays = document.querySelectorAll(".counter");
let interval = 700;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
// Count-Down ends
// BMI Calculator starts
document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      document.getElementById('result').innerText = `Your BMI is:${bmi.toFixed(2)}`;
  } else {
      document.getElementById('result').innerText = 'Please enter valid weight and height.';
    }
});
// BMI Calculator ends
// Navbar starts
const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Navbar ends
// spinner
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
},);
//spinner







    