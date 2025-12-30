/* --- 1. CẤU HÌNH NGÔN NGỮ (DICTIONARY) --- */
const translations = {
    en: {
        role: "Software Engineer",
        nav_home: "Home", nav_about: "About", nav_profile: "Profile", nav_cert: "Certificates",
        nav_career: "Career", nav_hobby: "Hobby", nav_skills: "Skills", nav_exp: "Experience",
        nav_proj: "Projects", nav_gallery: "Gallery", nav_contact: "Contact",
        
        hero_greeting: "Hello, I am",
        hero_iam: "I am a",
        hero_desc: "> Welcome to my digital space. Where code meets creativity.",
        btn_view_project: "View Projects",
        btn_contact: "Contact Me",

        lbl_en_name: "English Name:",
        lbl_jp_name: "Japanese Name:",

        // About & Hobby Content
        about_line1: "> I am a tech enthusiast who loves to code and create amazing digital experiences.",
        about_line2: "> With logical thinking and problem-solving skills, I aim to build valuable applications.",
        career_desc: "> Aiming to become a Senior Fullstack Developer in the next 3 years, specializing in Cloud Computing.",
        hobby_desc: "> Coding, Gaming (League of Legends), Reading Tech Books, Jogging.",

        sec_about: "// About Me",
        sec_profile: "// User Profile",
        sec_cert: "// Certificates",
        sec_career: "// Career Info",
        sec_hobby: "// Hobby",
        sec_skills: "// Skills",
        sec_exp: "// Experience",
        sec_proj: "// Projects",
        sec_gallery: "// Gallery",
        sec_contact: "// Contact Info",

        // Carousel Categories
        cat_lang: "[ Foreign Languages ]",
        cat_tech: "[ Tech & Professional ]",
        cat_uni_proj: "[ University Projects ]",
        cat_personal_proj: "[ Personal Projects ]",
        cat_it_event: "[ IT Events / Hackathon ]",
        cat_life: "[ Life & Activities ]",

        box_personal: "[ Personal Info ]",
        box_status: "[ Status & Lang ]",
        box_contact_direct: "[ Direct Contact ]",
        box_social: "[ Social Network ]",
        box_it_exp: "[ IT Experience ]",
        box_non_it_exp: "[ Non-IT Experience ]",
        
        lbl_name: "Full Name:",
        lbl_dob: "Birthday:",
        lbl_age: "Age:",
        lbl_nation: "Nationality:", val_nation: "Vietnam",
        lbl_job: "Job:", val_job: "Student",
        lbl_address: "Address:", val_address: "Ho Chi Minh City, VN",
        lbl_lang: "Languages:", val_lang: "Vietnamese, English",
        lbl_status: "Status:", val_status: "Open to work",

        exp_time_1: "2023 - Present:",
        exp_role_1: "Backend Dev (ABC Corp)",
        exp_desc_1: "> Develop API, optimize database...",
        exp_role_2: "Intern Web (XYZ Corp)",
        exp_desc_2: "> Fix bugs, write documentation...",
        exp_role_3: "Volunteer Club Manager",
        exp_desc_3: "> Leadership, event organizing.",
        exp_role_4: "Freelance Translator",
        exp_desc_4: "> En-Vi document translation.",

        lbl_loading: "Loading...",
        lbl_click_detail: "Click for details",
        lbl_view_album: "View Album",
        
        typewriter_texts: ["Software Engineer", "Web Developer", "Tech Enthusiast"]
    },
    vi: {
        role: "Kỹ sư phần mềm",
        nav_home: "Trang chủ", nav_about: "Giới thiệu", nav_profile: "Lý lịch", nav_cert: "Bằng cấp",
        nav_career: "Sự nghiệp", nav_hobby: "Sở thích", nav_skills: "Kỹ năng", nav_exp: "Kinh nghiệm",
        nav_proj: "Dự án", nav_gallery: "Thư viện", nav_contact: "Liên hệ",

        hero_greeting: "Xin chào, mình là",
        hero_iam: "Mình là một",
        hero_desc: "> Chào mừng đến với không gian số của tôi. Nơi dòng code gặp gỡ sự sáng tạo.",
        btn_view_project: "Xem Dự Án",
        btn_contact: "Liên hệ ngay",

        lbl_en_name: "Tên tiếng Anh:",
        lbl_jp_name: "Tên tiếng Nhật:",

        about_line1: "> Tôi là một lập trình viên đam mê công nghệ, luôn tìm tòi học hỏi kỹ thuật mới.",
        about_line2: "> Với tư duy logic và khả năng giải quyết vấn đề, tôi mong muốn tạo ra sản phẩm giá trị.",
        career_desc: "> Định hướng trở thành Senior Fullstack Developer trong 3 năm tới, chuyên sâu về Cloud Computing.",
        hobby_desc: "> Lập trình, Chơi game (LMHT), Đọc sách công nghệ, Chạy bộ.",

        sec_about: "// Giới thiệu", 
        sec_profile: "// Sơ yếu lý lịch", 
        sec_cert: "// Chứng chỉ",
        sec_career: "// Định hướng", 
        sec_hobby: "// Sở thích",
        sec_skills: "// Kỹ năng",
        sec_exp: "// Kinh nghiệm",
        sec_proj: "// Dự án", 
        sec_gallery: "// Thư viện ảnh", 
        sec_contact: "// Liên hệ",

        cat_lang: "[ Ngoại ngữ ]",
        cat_tech: "[ Chuyên môn & Kỹ thuật ]",
        cat_uni_proj: "[ Dự án trường học ]",
        cat_personal_proj: "[ Dự án cá nhân ]",
        cat_it_event: "[ Sự kiện IT / Hackathon ]",
        cat_life: "[ Hoạt động & Đời sống ]",

        box_personal: "[ Thông tin cá nhân ]",
        box_status: "[ Trạng thái & Ngôn ngữ ]",
        box_contact_direct: "[ Liên hệ trực tiếp ]",
        box_social: "[ Mạng xã hội ]",
        box_it_exp: "[ Kinh nghiệm IT ]",
        box_non_it_exp: "[ Kinh nghiệm khác ]",

        lbl_name: "Họ và tên:",
        lbl_dob: "Sinh ngày:",
        lbl_age: "Tuổi:",
        lbl_nation: "Quốc tịch:", val_nation: "Việt Nam",
        lbl_job: "Công việc:", val_job: "Sinh viên",
        lbl_address: "Địa chỉ:", val_address: "TP. Hồ Chí Minh, VN",
        lbl_lang: "Ngôn ngữ:", val_lang: "Tiếng Việt, Tiếng Anh",
        lbl_status: "Trạng thái:", val_status: "Đang tìm kiếm cơ hội",

        exp_time_1: "2023 - Nay:",
        exp_role_1: "Lập trình viên Backend (Cty ABC)",
        exp_desc_1: "> Phát triển API, tối ưu cơ sở dữ liệu...",
        exp_role_2: "Thực tập sinh Web (Cty XYZ)",
        exp_desc_2: "> Hỗ trợ sửa lỗi, viết tài liệu...",
        exp_role_3: "Quản lý CLB Tình nguyện",
        exp_desc_3: "> Kỹ năng lãnh đạo, tổ chức sự kiện.",
        exp_role_4: "Phiên dịch viên tự do",
        exp_desc_4: "> Dịch tài liệu Anh - Việt.",

        lbl_loading: "Đang tính...",
        lbl_click_detail: "Nhấn để xem chi tiết",
        lbl_view_album: "Xem album ảnh",

        typewriter_texts: ["Kỹ sư phần mềm", "Lập trình viên Web", "Người yêu công nghệ"]
    },
    jp: {
        role: "ソフトウェアエンジニア",
        nav_home: "ホーム", nav_about: "自己紹介", nav_profile: "プロフィール", nav_cert: "資格",
        nav_career: "キャリア", nav_hobby: "趣味", nav_skills: "スキル", nav_exp: "経歴",
        nav_proj: "プロジェクト", nav_gallery: "ギャラリー", nav_contact: "連絡先",

        hero_greeting: "こんにちは、私は",
        hero_iam: "私は",
        hero_desc: "> 私のデジタルスペースへようこそ。ここではコードと創造性が出会います。",
        btn_view_project: "プロジェクトを見る",
        btn_contact: "連絡する",
        lbl_en_name: "英語名:",
        lbl_jp_name: "日本名:",

        about_line1: "> 私は技術に情熱を持ち、常に新しい技術を学び、製品を最適化することを目指しています。",
        about_line2: "> 論理的思考と問題解決能力を活かし、価値あるアプリケーションを作成したいと考えています。",
        career_desc: "> 今後3年以内にシニアフルスタック開発者になり、クラウドコンピューティングを専門とすることを目指しています。",
        hobby_desc: "> プログラミング、ゲーム (LoL)、技術書の読書、ジョギング。",

        sec_about: "// 自己紹介", 
        sec_profile: "// プロフィール", 
        sec_cert: "// 資格",
        sec_career: "// キャリア", 
        sec_hobby: "// 趣味", 
        sec_skills: "// スキル",
        sec_exp: "// 経歴",
        sec_proj: "// 制作物", 
        sec_gallery: "// ギャラリー",
        sec_contact: "// 連絡先",


        cat_lang: "[ 外国語 ]",
        cat_tech: "[ 専門技術 ]",
        cat_uni_proj: "[ 大学プロジェクト ]",
        cat_personal_proj: "[ 個人プロジェクト ]",
        cat_it_event: "[ ITイベント / ハッカソン ]",
        cat_life: "[ 生活・活動 ]",

        box_personal: "[ 個人情報 ]",
        box_status: "[ ステータス & 言語 ]",
        box_contact_direct: "[ 直接連絡 ]",
        box_social: "[ ソーシャルネットワーク ]",
        box_it_exp: "[ IT経験 ]",
        box_non_it_exp: "[ その他経験 ]",

        lbl_name: "氏名:",
        lbl_dob: "生年月日:",
        lbl_age: "年齢:",
        lbl_nation: "国籍:", val_nation: "ベトナム",
        lbl_job: "職業:", val_job: "学生",
        lbl_address: "住所:", val_address: "ホーチミン市 (ベトナム)",
        lbl_lang: "言語:", val_lang: "ベトナム語、英語",
        lbl_status: "ステータス:", val_status: "求職中",

        exp_time_1: "2023 - 現在:",
        exp_role_1: "バックエンド開発 (ABC社)",
        exp_desc_1: "> API開発、データベース最適化...",
        exp_role_2: "Webインターン (XYZ社)",
        exp_desc_2: "> バグ修正、ドキュメント作成...",
        exp_role_3: "ボランティアクラブ管理者",
        exp_desc_3: "> リーダーシップ、イベント企画運営。",
        exp_role_4: "フリーランス翻訳者",
        exp_desc_4: "> 英語・ベトナム語翻訳。",

        lbl_loading: "計算中...",
        lbl_click_detail: "詳細をクリック",
        lbl_view_album: "アルバムを見る",

        typewriter_texts: ["ソフトウェアエンジニア", "Web開発者", "技術愛好家"]
    }
};

let currentLang = 'en';

/* --- 2. HÀM ĐỔI NGÔN NGỮ (Logic mới: Update cả thẻ Card) --- */
function changeLanguage(lang) {
    currentLang = lang;

    // 1. Cập nhật Text tĩnh trên HTML (data-lang)
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // 2. Cập nhật nội dung trên các thẻ CARD (Projects, Certs, Gallery)
    // Gọi hàm cập nhật này
    updateCardTitles(lang);

    // 3. Cập nhật nút active
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active-lang'));
    document.getElementById(`btn-${lang}`).classList.add('active-lang');

    // 4. Reset hiệu ứng gõ chữ
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;

    // 5. Cập nhật lại tuổi
    calculateAge();
}

/* --- HÀM CẬP NHẬT TIÊU ĐỀ TRÊN CARD --- */
function updateCardTitles(lang) {
    // Duyệt qua Projects
    for (const [key, data] of Object.entries(projectsData)) {
        const titleEl = document.getElementById(`title-${key}`);
        if (titleEl && data[lang]) {
            titleEl.innerText = data[lang].title;
        }
    }
    // Duyệt qua Certificates
    for (const [key, data] of Object.entries(certData)) {
        const titleEl = document.getElementById(`title-${key}`);
        if (titleEl && data[lang]) {
            titleEl.innerText = data[lang].title;
        }
    }
    // Duyệt qua Gallery
    for (const [key, data] of Object.entries(galleryData)) {
        const titleEl = document.getElementById(`title-${key}`);
        if (titleEl && data[lang]) {
            titleEl.innerText = data[lang].title;
        }
    }
}

/* --- 3. TYPEWRITER EFFECT --- */
const textElement = document.getElementById('typing-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrases = translations[currentLang].typewriter_texts;
    if (phraseIndex >= currentPhrases.length) phraseIndex = 0;
    const currentPhrase = currentPhrases[phraseIndex];
    
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
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % currentPhrases.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

/* --- 4. TỰ ĐỘNG TÍNH TUỔI --- */
function calculateAge() {
    const birthDate = new Date("2005-11-23");
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && now.getDate() < birthDate.getDate())) {
        years--; months += 12;
    }
    
    const ageElement = document.getElementById('auto-age');
    if (ageElement) {
        if (currentLang === 'vi') ageElement.innerText = `${years} Năm, ${months} Tháng`;
        else if (currentLang === 'jp') ageElement.innerText = `${years} 歳, ${months} ヶ月`;
        else ageElement.innerText = `${years} Years, ${months} Months`;
    }
}
document.addEventListener('DOMContentLoaded', calculateAge);

/* --- 5. DATA (PROJECTS, CERTS, GALLERY) --- */

const projectsData = {
    'uni_1': {
        en: { title: "Library Management", desc: "Library borrowing/returning management software.", tech: "Tech: C# .NET, SQL Server." },
        vi: { title: "Quản lý thư viện", desc: "Phần mềm quản lý mượn trả sách thư viện.", tech: "Công nghệ: C# .NET, SQL Server." },
        jp: { title: "図書館管理", desc: "図書館の貸出・返却管理ソフトウェア。", tech: "技術: C# .NET, SQL Server." },
        link: "https://github.com/VuTriDung/LibraryApp"
    },
    'uni_2': {
        en: { title: "E-Commerce Web", desc: "Sales website with Cart and Admin Dashboard.", tech: "Tech: PHP, MySQL." },
        vi: { title: "Web Bán Hàng PHP", desc: "Web thương mại điện tử có giỏ hàng, quản trị.", tech: "Công nghệ: PHP thuần, MySQL." },
        jp: { title: "Eコマースサイト", desc: "カート機能と管理画面を備えた販売サイト。", tech: "技術: PHP, MySQL." },
        link: "#"
    },
    'per_1': {
        en: { title: "Portfolio Website", desc: "Personal site with Matrix/Pixel style.", tech: "Tech: HTML, CSS, JS." },
        vi: { title: "Portfolio Website", desc: "Trang cá nhân phong cách Matrix/Pixel.", tech: "Công nghệ: HTML, CSS, JS." },
        jp: { title: "ポートフォリオ", desc: "Matrix/Pixelスタイルの個人サイト。", tech: "技術: HTML, CSS, JS." },
        link: "#"
    },
    'per_2': {
        en: { title: "Discord Music Bot", desc: "Music bot for Discord Server.", tech: "Tech: Node.js, Discord.js." },
        vi: { title: "Discord Music Bot", desc: "Bot phát nhạc cho Server Discord.", tech: "Công nghệ: Node.js, Discord.js." },
        jp: { title: "Discord音楽ボット", desc: "Discordサーバー用音楽ボット。", tech: "技術: Node.js, Discord.js." },
        link: "#"
    }
};

const certData = {
    'lang_1': {
        en: { title: "English: IELTS 7.0", issuer: "Issuer: IDP", desc: "Reading 7.5, Listening 7.0." },
        vi: { title: "Tiếng Anh: IELTS 7.0", issuer: "Cấp bởi: IDP", desc: "Reading 7.5, Listening 7.0. Giao tiếp tốt." },
        jp: { title: "英語: IELTS 7.0", issuer: "発行: IDP", desc: "Reading 7.5, Listening 7.0." },
        date: "2024"
    },
    'lang_2': {
        en: { title: "Japanese: JLPT N3", issuer: "Issuer: Japan Foundation", desc: "Intermediate Japanese." },
        vi: { title: "Tiếng Nhật: JLPT N3", issuer: "Cấp bởi: Japan Foundation", desc: "Tiếng Nhật trung cấp." },
        jp: { title: "日本語: JLPT N3", issuer: "発行: Japan Foundation", desc: "日本語能力試験 N3." },
        date: "2023"
    },
    'lang_3': {
        en: { title: "Basic Chinese", issuer: "Self-study", desc: "Basic communication." },
        vi: { title: "Tiếng Trung Cơ Bản", issuer: "Tự học", desc: "Giao tiếp cơ bản." },
        jp: { title: "中国語 (基礎)", issuer: "独学", desc: "基本的なコミュニケーション." },
        date: "2023"
    },
    'tech_1': {
        en: { title: "University Degree", issuer: "HUST University", desc: "GPA: 3.2/4.0" },
        vi: { title: "Bằng Kỹ Sư CNTT", issuer: "Đại học Bách Khoa (HUST)", desc: "GPA: 3.2/4.0. Chuyên ngành phần mềm." },
        jp: { title: "情報工学士", issuer: "ハノイ工科大学 (HUST)", desc: "GPA: 3.2/4.0. ソフトウェア専攻。" },
        date: "2026 (Expected)"
    },
    'tech_2': {
        en: { title: "AWS Solutions Arch", issuer: "Amazon AWS", desc: "Cloud Architecture." },
        vi: { title: "AWS Solutions Arch", issuer: "Amazon AWS", desc: "Kiến trúc đám mây." },
        jp: { title: "AWSソリューション", issuer: "Amazon AWS", desc: "クラウドアーキテクチャ." },
        date: "2024"
    },
    'tech_3': {
        en: { title: "Fullstack Web Dev", issuer: "Udemy", desc: "React, Node, MongoDB." },
        vi: { title: "Fullstack Web Dev", issuer: "Udemy", desc: "React, Node, MongoDB." },
        jp: { title: "フルスタック開発", issuer: "Udemy", desc: "React, Node, MongoDB." },
        date: "2024"
    }
};

const galleryData = {
    'it_1': {
        en: { title: "Hackathon 2023" },
        vi: { title: "Hackathon 2023" },
        jp: { title: "ハッカソン 2023" },
        images: ["https://placehold.co/400x300/000/fff?text=Hackathon+Team"]
    },
    'it_2': {
        en: { title: "FPT Tech Day" },
        vi: { title: "FPT Tech Day" },
        jp: { title: "FPTテックデー" },
        images: ["https://placehold.co/400x300/000/fff?text=FPT+Tech+Day"]
    },
    'life_1': {
        en: { title: "Football K16" },
        vi: { title: "Giải bóng đá K16" },
        jp: { title: "サッカー大会 K16" },
        images: ["https://placehold.co/400x300/000/fff?text=Football"]
    },
    'life_2': {
        en: { title: "Green Summer 2022" },
        vi: { title: "Mùa hè xanh 2022" },
        jp: { title: "ボランティア 2022" },
        images: ["https://placehold.co/400x300/000/fff?text=Green+Summer"]
    }
};

function openProjectModal(id) {
    const dataObj = projectsData[id];
    if (!dataObj) return;
    const data = dataObj[currentLang];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 class="modal-title">${data.title}</h2>
        <p class="modal-desc">${data.desc}</p>
        <p class="modal-tech">${data.tech}</p>
        <a href="${dataObj.link}" target="_blank" class="btn btn-primary">Source Code</a>
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function openCertModal(id) {
    const dataObj = certData[id];
    if (!dataObj) return;
    const data = dataObj[currentLang];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2 class="modal-title" style="color: #fff;">${data.title}</h2>
        <p style="color: var(--accent-color); font-weight: bold;">${data.issuer}</p>
        <p style="color: #aaa;">${dataObj.date}</p>
        <div style="border-top: 1px dashed #333; padding-top: 15px;">
            <p class="modal-desc">${data.desc}</p>
        </div>
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function openGalleryModal(id) {
    const dataObj = galleryData[id];
    if (!dataObj) return;
    const data = dataObj[currentLang];
    const modalBody = document.getElementById('modal-body');
    
    // Check nếu có images
    let imagesHTML = '<div class="modal-gallery-grid">';
    if(dataObj.images){
         dataObj.images.forEach(imgSrc => {
            imagesHTML += `<img src="${imgSrc}" alt="Gallery Image">`;
        });
    }
    imagesHTML += '</div>';

    modalBody.innerHTML = `
        <h2 class="modal-title">${data.title}</h2>
        ${imagesHTML}
    `;
    document.getElementById('modal-overlay').style.display = 'flex';
}

/* --- MATRIX RAIN & CAROUSEL --- */
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

function scrollCarousel(id, direction) {
    const container = document.getElementById(id);
    container.scrollBy({ left: direction * 300, behavior: 'smooth' });
}
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}