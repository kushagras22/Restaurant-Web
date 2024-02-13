// Home Carousel
$(".home-carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3500,
  animateOut: "fadeOut",
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// Navbar
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  // Toggles fixed class in navbar on scroll
  navbar.classList.toggle("fixed", this.window.scrollY > 0);
});
// Nav Buttons
let menuBtn = document.querySelector(".menu-btn");
let searchBtn = document.querySelector(".searchbtn");
let cartBtn = document.querySelector(".cartbtn");
let darkBtn = document.querySelector(".darkbtn");
let signImg = document.getElementById("signImh");

menuBtn.onclick = function () {
  // Toggles active class in nav items on click
  document.getElementById("nav-items").classList.toggle("active");

  // Changes Icon on click
  if (document.getElementById("nav-items").classList.contains("active")) {
    menuBtn.classList.remove("bx-menu");
    menuBtn.classList.add("bx-x");
  } else {
    menuBtn.classList.remove("bx-x");
    menuBtn.classList.add("bx-menu");
  }
};

searchBtn.onclick = function () {
  // Toggles active class in search form on click
  document.getElementById("search-form").classList.toggle("active");

  // Changes Icon on click
  if (document.getElementById("search-form").classList.contains("active")) {
    searchBtn.classList.remove("bx-search-alt-2");
    searchBtn.classList.add("bx-x");
  } else {
    searchBtn.classList.remove("bx-x");
    searchBtn.classList.add("bx-search-alt-2");
  }
};

cartBtn.onclick = function () {
  // Toggles active class in cart on click
  document.getElementById("cart").classList.toggle("active");

  // Changes Icon on click
  if (document.getElementById("cart").classList.contains("active")) {
    cartBtn.classList.remove("bx-cart");
    cartBtn.classList.add("bx-x");
  } else {
    cartBtn.classList.remove("bx-x");
    cartBtn.classList.add("bx-cart");
  }
};

darkBtn.onclick = function () {
  // Toggles dark mode class to body on click
  document.body.classList.toggle("dark-mode");

  // If body contains dark mode class
  if (document.body.classList.contains("dark-mode")) {
    //Changes Dark Mode Button Icon to Sun
    darkBtn.classList.remove("bx-moon");
    darkBtn.classList.add("bx-sun");

    //Changes Sign Img for Dark Bg
    signImg.src = "/Images/sign1-dark.png";
  }
  // If body does not contains dark mode class
  else {
    //Changes Dark Mode Button Icon to Moon
    darkBtn.classList.remove("bx-sun");
    darkBtn.classList.add("bx-moon");

    //Changes Sign Img for Light Bg
    signImg.src = "/Images/sign1-light.png";
  }
};

// Menu Section
let menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  // If clicked tab does not containa active class
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    // Gets data attribute
    const target = e.target.getAttribute("data-target");

    // Removes active class from active tabs
    menuTabs.querySelector(".active").classList.remove("active");
    // Add active class from clicked tab
    e.target.classList.add("active");
    let menuSection = document.querySelector(".menu-section");

    // Removes show class from active tab content
    menuSection
      .querySelector(".menu-tab-content.show")
      .classList.remove("show");

    // Adds show class to clicked tab content
    menuSection.querySelector(target).classList.add("show");
  }
  // If clicked tab does not containa active class
  else {
    return; // Returns nothing
  }
});

// Events Carousel
$(".events-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// Review Carousel
$(".review-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
