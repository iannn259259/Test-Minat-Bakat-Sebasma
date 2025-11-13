const questions = [
    { question: "Kamu paling suka kegiatan apa?", options: { A: ["Mengatur keuangan atau menganalisis data", "Ekonomi"], B: ["Menulis cerita atau menerjemahkan teks", "Sastra Inggris"], C: ["Meneliti makhluk hidup dan lingkungan", "Biologi"], D: ["Mengamati perilaku masyarakat", "Sosiologi"] } },
    { question: "Mata pelajaran apa yang paling kamu kuasai?", options: { A: ["Matematika dan Ekonomi", "Ekonomi"], B: ["Bahasa Inggris", "Sastra Inggris"], C: ["Biologi", "Biologi"], D: ["Sosiologi", "Sosiologi"] } },
    { question: "Kamu lebih suka bekerja di lingkungan seperti apa?", options: { A: ["Perusahaan dengan data finansial", "Ekonomi"], B: ["Studio kreatif atau penerbitan", "Sastra Inggris"], C: ["Laboratorium penelitian", "Biologi"], D: ["Lapangan sosial dan komunitas", "Sosiologi"] } },
    { question: "Jika kamu diberi tugas kelompok, peran apa yang kamu ambil?", options: { A: ["Meneliti data", "Biologi"], B: ["Mengatur komunikasi dan kerja sama", "Sosiologi"], C: ["Menulis laporan", "Sastra Inggris"], D: ["Membagi tugas dan jadwal", "Ekonomi"] } },
    { question: "Jenis berita apa yang paling menarik?", options: { A: ["Penemuan ilmiah", "Biologi"], B: ["Budaya dan karya kreatif", "Sastra Inggris"], C: ["Ekonomi dan bisnis", "Ekonomi"], D: ["Isu sosial", "Sosiologi"] } },
    { question: "Teman-teman mengenal kamu sebagai orang yang...", options: { A: ["Imajinatif", "Sastra Inggris"], B: ["Logis", "Ekonomi"], C: ["Empatik", "Sosiologi"], D: ["Teliti", "Biologi"] } },
    { question: "Kamu lebih suka membaca tentang...", options: { A: ["Tokoh sosial", "Sosiologi"], B: ["Penelitian ilmiah", "Biologi"], C: ["Cerita sastra", "Sastra Inggris"], D: ["Strategi bisnis", "Ekonomi"] } },
    { question: "Kalau ada masalah di sekitar kamu, hal pertama yang kamu pikirkan?", options: { A: ["Solusi finansial", "Ekonomi"], B: ["Cara komunikasinya", "Sastra Inggris"], C: ["Penyebab ilmiah", "Biologi"], D: ["Dampak sosialnya", "Sosiologi"] } },
    { question: "Kalau ke tempat baru, apa yang kamu perhatikan?", options: { A: ["Aktivitas masyarakat", "Sosiologi"], B: ["Keindahan alam", "Biologi"], C: ["Desain bangunan", "Sastra Inggris"], D: ["Usaha dan bisnis", "Ekonomi"] } },
    { question: "Kamu paling suka suasana belajar yang...", options: { A: ["Tenang dan fokus", "Sastra Inggris"], B: ["Diskusi ramai", "Sosiologi"], C: ["Langsung praktik", "Biologi"], D: ["Tertata dan jelas", "Ekonomi"] } }
];

const bidangInfo = {
    Ekonomi: { jurusan: ["Akuntansi", "Manajemen", "Ekonomi Pembangunan"], kampus: ["UI", "UGM", "UNAIR"], deskripsi: "💼 Akuntan, Manajer Keuangan, Konsultan Pajak." },
    "Sastra Inggris": { jurusan: ["Sastra Inggris", "Linguistik", "Penerjemahan"], kampus: ["UI", "UNPAD", "UNDIP"], deskripsi: "📝 Penulis, Editor, atau Penerjemah teks profesional." },
    Biologi: { jurusan: ["Bioteknologi", "Biologi Murni", "Ekologi"], kampus: ["UGM", "IPB", "ITB"], deskripsi: "🔬 Ahli Bioteknologi, Ahli Gizi, Peneliti Lingkungan." },
    Sosiologi: { jurusan: ["Sosiologi", "Antropologi", "Kebijakan Publik"], kampus: ["UI", "UNPAD", "UNAIR"], deskripsi: "🌍 Peneliti Sosial, Konsultan Komunitas, Dosen Sosiologi." }
};

let current = 0;
let scores = { Ekonomi: 0, "Sastra Inggris": 0, Biologi: 0, Sosiologi: 0 };

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const facultyList = document.getElementById("faculty-list");
const mainField = document.getElementById("main-field");
const recommendedCampus = document.getElementById("recommended-campus");
const descContainer = document.getElementById("desc-container");
const showDescBtn = document.getElementById("show-desc-btn");
const showOtherBtn = document.getElementById("show-other-btn");
const restartBtn = document.getElementById("restart-btn");
const subjectSelector = document.getElementById("subject-selector");
const subjectSelect = document.getElementById("subject-select");
const showSelectedBtn = document.getElementById("show-selected-btn");

function showQuestion() {
    const q = questions[current];
    questionContainer.innerHTML = `<h3>${q.question}</h3>`;
    optionsContainer.innerHTML = "";
    Object.entries(q.options).forEach(([key, [text, bidang]]) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = text;
        btn.onclick = () => selectAnswer(bidang);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(bidang) {
    scores[bidang]++;
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const maxScore = Math.max(...Object.values(scores));
    const hasilList = Object.keys(scores).filter((b) => scores[b] === maxScore);
    const bidangUtama = hasilList[0];
    const info = bidangInfo[bidangUtama];

    facultyList.textContent = info.jurusan.join(", ");
    mainField.textContent = bidangUtama;
    recommendedCampus.textContent = info.kampus.join(", ");

    showDescBtn.onclick = () => showDescription(bidangUtama);
    showOtherBtn.onclick = () => showOtherSubjects();
    restartBtn.onclick = () => location.reload();
}

function showDescription(field) {
    const info = bidangInfo[field];
    descContainer.innerHTML = `
    <div class="desc-box">
      <h3>${field}</h3>
      <p>${info.deskripsi}</p>
    </div>
  `;
}

function showOtherSubjects() {
    resultContainer.classList.add("hidden");
    subjectSelector.classList.remove("hidden");
}

showSelectedBtn.onclick = () => {
    const selected = subjectSelect.value;
    const info = bidangInfo[selected];
    subjectSelector.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    descContainer.innerHTML = `
    <div class="desc-box">
      <h3>${selected}</h3>
      <p>${info.deskripsi}</p>
    </div>
  `;
};

showQuestion();
