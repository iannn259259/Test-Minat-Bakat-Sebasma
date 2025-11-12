const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A: ["Meneliti makhluk hidup atau tumbuhan", "Biologi"],
            B: ["Menganalisis perilaku sosial masyarakat", "Sosiologi"],
            C: ["Mengatur keuangan atau bisnis", "Ekonomi"],
            D: ["Menulis cerita atau menerjemahkan teks", "Sastra Inggris"]
        }
    },
    {
        question: "Hal apa yang menurutmu paling menarik?",
        options: {
            A: ["Penemuan di bidang medis atau bioteknologi", "Biologi"],
            B: ["Hubungan antar manusia dan budaya", "Sosiologi"],
            C: ["Pasar saham dan investasi", "Ekonomi"],
            D: ["Bahasa, komunikasi, dan budaya asing", "Sastra Inggris"]
        }
    },
    {
        question: "Kalau kamu kerja kelompok, kamu biasanya jadi orang yang...",
        options: {
            A: ["Menjelaskan konsep ilmiah", "Biologi"],
            B: ["Menyatukan pendapat teman-teman", "Sosiologi"],
            C: ["Mengatur rencana dan anggaran", "Ekonomi"],
            D: ["Menulis laporan dan memperbaiki bahasa", "Sastra Inggris"]
        }
    }
];

let currentQuestion = 0;
let answers = { Biologi: 0, Sosiologi: 0, Ekonomi: 0, "Sastra Inggris": 0 };

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    for (let key in q.options) {
        const [text, subject] = q.options[key];
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.classList.add("option-btn");
        btn.onclick = () => selectOption(subject);
        optionsEl.appendChild(btn);
    }

    nextBtn.style.display = "none";
}

function selectOption(subject) {
    answers[subject]++;
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";

    const topSubject = Object.keys(answers).reduce((a, b) =>
        answers[a] > answers[b] ? a : b
    );

    resultEl.style.display = "block";
    resultEl.innerHTML = `
    <h2>Hasil Tes Kamu:</h2>
    <p>Minat karir kamu cocok di bidang <b>${topSubject}</b> 🎯</p>
    <p>Kamu bisa lihat rekomendasi pekerjaan dan universitas di bawah ini 👇</p>
  `;
}

// tampilkan pertanyaan pertama saat halaman dimuat
showQuestion();