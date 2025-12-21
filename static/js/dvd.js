const dvd = document.getElementById("dvd");
const screen = document.getElementById("screen");

let x = 100;
let y = 100;
let dx = 2.5;
let dy = 2.5;

function moveDVD() {
    const dvdRect = dvd.getBoundingClientRect();
    const screenRect = screen.getBoundingClientRect();

    x += dx;
    y += dy;

    if (x + dvdRect.width >= screenRect.width || x <= 0) {
        dx *= -1;
    }

    if (y + dvdRect.height >= screenRect.height || y <= 0) {
        dy *= -1;
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(moveDVD);
}

moveDVD();
