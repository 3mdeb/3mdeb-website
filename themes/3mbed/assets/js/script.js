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
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
    },
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
  });

  backToTop.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Open accordian and scroll to accordion
  let headerHeight = document.querySelector("header").offsetHeight;
  let accordionBtns = document.querySelectorAll(".accordion-button");
  accordionBtns.forEach((btn) => {
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

  // Open accordian and scroll to event accordion
  let eventlinks = document.querySelectorAll(".accordion-links-wrapper a");

  eventlinks.forEach((link) => {
    let targetElement = link.getAttribute("href").split("/").at(-1);

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

  const eventsAccordion = document.querySelectorAll(".events-accordion");
  eventsAccordion.forEach((data) => {
    data.addEventListener("shown.bs.collapse", (event) => {
      let expandedButtons = document.querySelectorAll(
        ".accordion-button[aria-expanded='true']"
      );
      let currentTarget = event.target.getAttribute("id");
      if (expandedButtons.length > 1) {
        expandedButtons.forEach((btn) => {
          if (btn.getAttribute("aria-controls") !== currentTarget) {
            btn.click();
          }
        });
      }
    });
  });
})();
