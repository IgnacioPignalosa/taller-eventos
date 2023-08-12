document.addEventListener("DOMContentLoaded", function () {
    const holadiv = document.getElementById("divbutt");

    holadiv.addEventListener("click", function () {
        alert('Hola! Soy el div');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const holabutt = document.getElementById("butt");

    holabutt.addEventListener("click", function () {
        alert('Hola!');
    });
});