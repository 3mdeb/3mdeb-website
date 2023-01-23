// main script
(function () {
  "use strict";

  // swiper slider
  new Swiper(".image-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-navigation-next",
      prevEl: ".swiper-navigation-prev",
    },
  });

  // swiper slider
  new Swiper(".testimonial-slider", {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 480px
      0: {
        slidesPerView: 1
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2
      },
    }
  });

  // Sticky Header and Back to Top
  let header = document.querySelector("header");
  let backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      backToTop.classList.add("active");
      header.classList.add("sticky");
    } else {
      backToTop.classList.remove("active");
      header.classList.remove("sticky");
    }
  })

  backToTop.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })

  // When user click accordian then accordian details will be opened and scroll to top after header
  let headerHeight = document.querySelector("header").offsetHeight;
  let accordionBtns = document.querySelectorAll(".accordion-button");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("collapsed")) {
        setTimeout(() => {
          window.scrollTo({
            top: btn.offsetTop - (headerHeight + 25),
            behavior: "smooth",
          });
        }, 500);
      }
    });
  });

  // When user click event link then user will scroll to corresponding event of clicked event and open that event accordian 
  let eventlinks = document.querySelectorAll(".accordion-links-wrapper a");

  eventlinks.forEach(link => {
    let targetElement = link.getAttribute("href").split("/")[2];

    link.addEventListener("click", (e) => {
      let accordion = document.querySelector(`${targetElement}`);
      let accordionDetails = accordion.querySelector(".accordion-collapse");
      let accordionButton = accordion.querySelector(".accordion-button");

      if (!accordionDetails.classList.contains("show")) {
        setTimeout(() => {
          accordionButton.click();
        }, 500);
      }
    });
  });

  if (window.location.hash.match("#")) {
    let accordion = document.querySelector(window.location.hash.split("/")[0]);
    let accordionDetails = accordion.querySelector(".accordion-collapse");
    let accordionButton = accordion.querySelector(".accordion-button");

    if (accordionDetails && !accordionDetails.classList.contains("show")) {
      setTimeout(() => {
        accordionButton.click();
      }, 500);
    }
  }

})();
