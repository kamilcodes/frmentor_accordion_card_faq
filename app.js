"use strict";

const accordionPanel = document.querySelectorAll(".accordion-panel");
const accordionContent = document.querySelectorAll(".accordion-content");

const openPanel = function () {};

for (let i = 0; i < accordionPanel.length; i++) {
  accordionPanel[i].addEventListener("click", function () {
    accordionPanel[i].nextElementSibling.classList.toggle("hidden");
    accordionContent[i].style.animation = "animateIn .2s ease-out";
  });
}
