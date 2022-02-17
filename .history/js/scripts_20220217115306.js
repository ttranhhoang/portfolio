// Scroll Page tọa độ Y
const navbar = document.getElementById("mainNav");
const scrollTop = document.querySelector(".scrollTop");
const navbarCollapse = () => {
  var y = window.pageYOffset;
  if (y > 100) {
    navbar.classList.add("navbar-scrolled");
    scrollTop.classList.add("sticky");
  } else {
    navbar.classList.remove("navbar-scrolled");
    scrollTop.classList.remove("sticky");
  }
};
// window.onscroll = () => navbarCollapse();
window.addEventListener("scroll", () => {
  navbarCollapse();
});
// Scroll to Top page
scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
// // Closes responsive menu when a scroll trigger link is clicked
// $(".js-scroll-trigger").click(function () {
//   $(".navbar-collapse").collapse("hide");
// });

// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
//   // setup back to top link

//   if (scrollHeight > 500) {
//     console.log("helo");

//     topLink.classList.add("show-link");
//   } else {
//     topLink.classList.remove("show-link");
//   }
// });
// Active link
const menuLink = document.querySelectorAll(".menu-link");
const mainSection = document.querySelector("section");

menuLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    //   // prevent default
    //   e.preventDefault();
    //   // navigate to specific spot
    //   const id = e.currentTarget.getAttribute("href").slice(1);
    //   const element = document.getElementById(id);
    //   const navHeight = navbar.getBoundingClientRect().height;
    //   const containerHeight = mainSection.getBoundingClientRect().height;
    //   const fixedNav = navbar.classList.contains("navbar-scrolled");
    //   let position = element.offsetTop - navHeight;
    //   if (!fixedNav) {
    //     position = position - navHeight;
    //   }
    //   if (navHeight > 82) {
    //     position = position + containerHeight;
    //   }
  });
});

const activeLink = (menuLink, fromTop) => {
  menuLink.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (!section) {
      return;
    }
    console.log("link", [section]);
    if (
      section.offsetTop - 1 <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};
window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;
  console.log("Fromtop", fromTop);
  activeLink(menuLink, fromTop);
  // navbarLink.forEach((link) => {
  //   console.log(link.hash);
  //   let section = document.querySelector(link.hash);
  //   if (!section) {
  //     return;
  //   }
  //   console.log("link", [section]);
  //   if (
  //     section.offsetTop - 1 <= fromTop &&
  //     section.offsetTop + section.offsetHeight > fromTop
  //   ) {
  //     link.classList.add("active");
  //   } else {
  //     link.classList.remove("active");
  //   }
  // });
});

// show sidebar responsive
const social = document.querySelector(".navbar_social");

const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".menu-bg");
const menuToggle = document.querySelector(".menu-toggle");
//const menuClose = document.querySelector(".menu-close");
// menuToggle.onclick = function () {
//   menuBg.classList.add("is-active");
//   menu.classList.add("is-active");
//   menuClose.classList.add("is-active");
// };
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  body.classList.toggle("menu-active");

  social.classList.toggle("is-active");
});

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("is-active");
    menu.classList.remove("is-active");
    body.classList.remove("menu-active");
  });
});
const prevent = document.querySelector("form");
prevent.onsubmit = function (e) {
  e.preventDefault();
};

// Typing text

var typingText = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

typingText.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = `<span class="hero_typing">${this.txt}</span>`;
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new typingText(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewrite > .hero_typing { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme);


// Slider images
window.load