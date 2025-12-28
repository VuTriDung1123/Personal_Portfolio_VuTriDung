/* --- 1. HIỆU ỨNG GÕ CHỮ --- */
const textElement = document.getElementById('typing-text');
const phrases = ["Software Engineer", "Web Developer", "Tech Lover"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true; typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

/* --- 2. HIỆU ỨNG MATRIX --- */
const canvas = document.getElementById('code-bg');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
const chars = '01ABCDEF<>/{}[]+=*&^%$#@';
const charArray = chars.split('');
const fontSize = 16;
const columns = canvas.width / fontSize; 
const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0'; ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

/* --- 3. ACTIVE MENU KHI SCROLL --- */
// Đoạn này giúp menu sáng lên khi bạn cuộn đến phần tương ứng
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // 100 là khoảng bù trừ để active sớm hơn một chút
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current) && current !== "") {
      a.classList.add("active");
    }
  });
};