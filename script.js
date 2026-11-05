// ===== 1. Mobile Menu Toggle =====
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});


// ===== 2. Product Card Click =====
let cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    let name = card.querySelector("h3").innerText;
    alert("You selected " + name + ". More details coming soon!");
  });
});


// ===== 3. Counter Animation =====
let counters = document.querySelectorAll(".counter");
let counted = false;

function startCounting() {
  counters.forEach(function (counter) {
    let target = Number(counter.getAttribute("data-target"));
    let count = 0;

    let timer = setInterval(function () {
      count++;
      counter.innerText = count + "+";
      if (count >= target) {
        clearInterval(timer);
      }
    }, 20);
  });
}


// ===== 4. Back to Top Button + Start Counter on Scroll =====
let topBtn = document.getElementById("topBtn");
let customersSection = document.getElementById("customers");

window.addEventListener("scroll", function () {
  // show or hide the top button
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  // start counter when customers section is visible
  let position = customersSection.getBoundingClientRect().top;
  if (position < window.innerHeight && counted == false) {
    startCounting();
    counted = true;
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===== 5. Sign Up Form Validation =====
let form = document.getElementById("signupForm");
let email = document.getElementById("email");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page from reloading

  if (email.value == "") {
    message.innerText = "Please enter your email.";
    message.style.color = "red";
  } else if (!email.value.includes("@")) {
    message.innerText = "Please enter a valid email.";
    message.style.color = "red";
  } else {
    message.innerText = "Thank you for subscribing!";
    message.style.color = "green";
    email.value = "";
  }
});