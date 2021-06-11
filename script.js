"use strict";

const knob = document.getElementById("myRange");
const input = document.querySelector(".input");
let pageview = document.querySelector(".pageviews");
let price = document.querySelector(".price");

knob.addEventListener('click', function () {
    if (input.checked === false) {
        if (knob.value === "1") {
            pageview.textContent = "10K PAGEVIEWS";
            price.textContent = "$8.00";
        } else if (knob.value === "2") {
            pageview.textContent = "50K PAGEVIEWS";
            price.textContent = "$12.00";
        } else if (knob.value === "3") {
            pageview.textContent = "100K PAGEVIEWS";
            price.textContent = "$16.00"
        } else if (knob.value === "4") {
            pageview.textContent = "500K PAGEVIEWS";
            price.textContent = "$24.00";
        } else if (knob.value === "5") {
            pageview.textContent = "1M PAGEVIEWS";
            price.textContent = "$36.00";
        }
    } else {
        if (knob.value === "1") {
            pageview.textContent = "10K PAGEVIEWS";
            price.textContent = "$2.00";
        } else if (knob.value === "2") {
            pageview.textContent = "50K PAGEVIEWS";
            price.textContent = "$3.00";
        } else if (knob.value === "3") {
            pageview.textContent = "100K PAGEVIEWS";
            price.textContent = "$4.00"
        } else if (knob.value === "4") {
            pageview.textContent = "500K PAGEVIEWS";
            price.textContent = "$6.00";
        } else if (knob.value === "5") {
            pageview.textContent = "1M PAGEVIEWS";
            price.textContent = "$8.00";
        }
    }
});