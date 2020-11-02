const card1 = document.querySelector(".card-1");
const kasse1 = document.querySelector("#kasse-1");

const card2 = document.querySelector(".card-2");
const kasse2 = document.querySelector("#kasse-2");

const card3 = document.querySelector(".card-3");
const kasse3 = document.querySelector("#kasse-3");

const close = document.querySelectorAll(".close");

card1.addEventListener("click", () => {
    kasse1.style.display = "block";
});

card2.addEventListener("click", () => {
    kasse2.style.display = "block";
});

card3.addEventListener("click", () => {
    kasse3.style.display = "block";
});

close.forEach((item) => {
    item.addEventListener("click", () => {
        kasse1.style.display = "none";
        kasse2.style.display = "none";
        kasse3.style.display = "none";
    });
});
