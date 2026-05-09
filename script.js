window.addEventListener("load", () => {

    let futbol = document.querySelector(".futbol");
    let basket = document.querySelector(".basket");
    let tenis = document.querySelector(".tenis");

    setTimeout(() => {
        futbol.style.width = "95%";
    }, 500);

    setTimeout(() => {
        basket.style.width = "85%";
    }, 900);

    setTimeout(() => {
        tenis.style.width = "75%";
    }, 1300);

});

/* Animación hover dinámica */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        card.style.transform = `
            rotateY(${(x - rect.width/2)/20}deg)
            rotateX(${-(y - rect.height/2)/20}deg)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            rotateY(0deg)
            rotateX(0deg)
            scale(1)
        `;
    });

});