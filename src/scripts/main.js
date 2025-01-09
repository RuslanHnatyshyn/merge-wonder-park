import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease",
  });

  AOS.refresh();
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  modules: [Navigation],
  slidesPerView: "auto",
  spaceBetween: 24,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq__question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
