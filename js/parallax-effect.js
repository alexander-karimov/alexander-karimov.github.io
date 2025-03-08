let targetX = 0,
    targetY = 0;
let velocityX = 0,
    velocityY = 0;

const speed = 0.1;
const friction = 1;

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

window.addEventListener("resize", updateCenter);
function updateCenter() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
}

document.addEventListener("mousemove", onMouseMove, { passive: true });
function onMouseMove(e) {
    targetX = (e.clientX - centerX) * -0.005;
    targetY = (e.clientY - centerY) * -0.01;
}

(function animate() {
    velocityX += (targetX - velocityX) * speed;
    velocityY += (targetY - velocityY) * speed;

    velocityX *= friction;
    velocityY *= friction;

    document.documentElement.style.setProperty("--move-x", `${velocityX}deg`);
    document.documentElement.style.setProperty("--move-y", `${velocityY}deg`);

    requestAnimationFrame(animate);
})();
