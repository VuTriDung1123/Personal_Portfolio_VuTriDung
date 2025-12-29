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


/* --- 4. TỰ ĐỘNG TÍNH TUỔI --- */
function calculateAge() {
    const birthDate = new Date("2005-11-23"); // Ngày sinh của bạn
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    const days = now.getDate() - birthDate.getDate();

    // Điều chỉnh nếu chưa tới tháng sinh hoặc ngày sinh trong năm nay
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Điều chỉnh ngày lẻ để tính tháng chính xác hơn
    if (days < 0) {
        months--;
        if (months < 0) {
            months += 12;
            // Đã trừ năm ở bước trên rồi nên không trừ nữa
        }
    }

    const ageElement = document.getElementById('auto-age');
    if (ageElement) {
        // Hiển thị dạng: 19 Năm, 5 Tháng
        ageElement.innerText = `${years} Năm, ${months} Tháng`;
        // Hoặc nếu muốn ngắn gọn chỉ hiện năm:
        // ageElement.innerText = `${years} Tuổi`; 
    }
}

// Gọi hàm tính tuổi ngay khi web load
document.addEventListener('DOMContentLoaded', calculateAge);



/* --- 5. CAROUSEL & MODAL LOGIC --- */

// Hàm trượt Carousel (Trái/Phải)
function scrollCarousel(id, direction) {
    const container = document.getElementById(id);
    const scrollAmount = 300; // Khoảng cách trượt mỗi lần bấm
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// === DATA DỰ ÁN (PROJECTS) ===
// Bạn sửa thông tin dự án ở đây
const projectsData = {
    'uni_1': {
        title: "Quản lý thư viện (C#)",
        desc: "Phần mềm quản lý mượn trả sách, quản lý độc giả và thống kê báo cáo. Tích hợp chức năng in thẻ thư viện.",
        tech: "Công nghệ: C# .NET, SQL Server, Entity Framework.",
        link: "https://github.com/VuTriDung/LibraryApp"
    },
    'uni_2': {
        title: "Web Bán Hàng PHP",
        desc: "Website thương mại điện tử với đầy đủ chức năng: Giỏ hàng, Thanh toán, Admin Dashboard quản lý sản phẩm.",
        tech: "Công nghệ: PHP Thuần, MySQL, Bootstrap.",
        link: "#"
    },
    'per_1': {
        title: "Personal Portfolio",
        desc: "Trang web cá nhân phong cách Matrix/Hacker. Tối ưu SEO và hiệu năng.",
        tech: "Công nghệ: HTML5, CSS3, JavaScript (Canvas).",
        link: "#"
    },
    'per_2': {
        title: "Discord Music Bot",
        desc: "Bot nghe nhạc cho Server Discord, hỗ trợ Youtube, Spotify.",
        tech: "Công nghệ: Node.js, Discord.js v14, FFmpeg.",
        link: "#"
    }
};

// === DATA THƯ VIỆN ẢNH (GALLERY) ===
// Bạn sửa link ảnh ở đây (Mỗi sự kiện có thể có nhiều ảnh)
const galleryData = {
    'it_1': {
        title: "Hackathon 2023",
        images: [
            "https://placehold.co/400x300/000/fff?text=Hackathon+Team",
            "https://placehold.co/400x300/000/fff?text=Coding",
            "https://placehold.co/400x300/000/fff?text=Award"
        ]
    },
    'it_2': {
        title: "FPT Tech Day",
        images: [
            "https://placehold.co/400x300/000/fff?text=Checkin",
            "https://placehold.co/400x300/000/fff?text=Booth"
        ]
    },
    'life_1': {
        title: "Giải bóng đá K16",
        images: [
            "https://placehold.co/400x300/001133/fff?text=Team+Photo",
            "https://placehold.co/400x300/001133/fff?text=Goal"
        ]
    },
    'life_2': {
        title: "Mùa hè xanh 2022",
        images: [
            "https://placehold.co/400x300/113311/fff?text=Volunteering",
            "https://placehold.co/400x300/113311/fff?text=Group"
        ]
    }
};

// Hàm mở Modal Dự án
function openProjectModal(id) {
    const data = projectsData[id];
    if (!data) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 class="modal-title">${data.title}</h2>
        <p class="modal-desc">${data.desc}</p>
        <p class="modal-tech">${data.tech}</p>
        <a href="${data.link}" target="_blank" class="btn btn-primary">Xem Source Code</a>
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Hàm mở Modal Gallery (Album ảnh)
function openGalleryModal(id) {
    const data = galleryData[id];
    if (!data) return;

    const modalBody = document.getElementById('modal-body');
    
    // Tạo danh sách thẻ img từ mảng images
    let imagesHTML = '<div class="modal-gallery-grid">';
    data.images.forEach(imgSrc => {
        imagesHTML += `<img src="${imgSrc}" alt="Gallery Image">`;
    });
    imagesHTML += '</div>';

    modalBody.innerHTML = `
        <h2 class="modal-title">Album: ${data.title}</h2>
        ${imagesHTML}
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Hàm đóng Modal
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}