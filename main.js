let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_1omoftk", "template_ixr7c8w", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No....",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "Thank you for expressing interest, I'll get back to you ASAP!",
    icon: "success",
  });
}
// Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

function toggle(){
  let overlay = document.getElementById("overlay1")
  overlay.classList.toggle("mystyle")
  
}

function toggle2(){
  let overlay = document.getElementById("overlay2")
  overlay.classList.toggle("mystyle")
  
}

function toggle3(){
  let overlay = document.getElementById("overlay3")
  overlay.classList.toggle("mystyle")
  
}

function toggle4(){
  let overlay = document.getElementById("overlay4")
  overlay.classList.toggle("mystyle")
  
}




function untoggle(){
  let overlay = document.getElementById("overlay1")
  overlay.classList.remove("mystyle")

  
}

function untoggle2(){
  let overlay = document.getElementById("overlay2")
  overlay.classList.remove("mystyle")

  
}
function untoggle3(){
  let overlay = document.getElementById("overlay3")
  overlay.classList.remove("mystyle")

  
}
function untoggle4(){
  let overlay = document.getElementById("overlay4")
  overlay.classList.remove("mystyle")

  
}