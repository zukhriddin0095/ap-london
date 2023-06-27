

// owl-carausel

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// backtop 


  window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".scrolltop");
    scroll.classList.toggle("active", window.scrollY > 500);
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
