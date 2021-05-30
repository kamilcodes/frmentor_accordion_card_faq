"use strict";

const faqItem = document.querySelectorAll(".faq-item");
const accordionPanel = document.querySelectorAll(".accordion-panel");
const accordionContent = document.querySelectorAll(".accordion-content");

const openPanel = function () {};

for (let i = 0; i < accordionPanel.length; i++) {
  accordionPanel[i].addEventListener("click", function () {
    accordionPanel[i].nextElementSibling.classList.toggle("hidden");
    accordionPanel[i].classList.toggle("accordion-panel__active");
    accordionContent[i].style.animation = "animateIn .3s ease-out";
  });
}
