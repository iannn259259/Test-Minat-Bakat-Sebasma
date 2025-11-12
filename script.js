const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A: ["Mengatur keuangan atau menganalisis data", "Ekonomi"],
            B: ["Menulis cerita, artikel, atau menerjemahkan teks", "Sastra Inggris"],
            C: ["Meneliti makhluk hidup atau eksperimen laboratorium", "Biologi"],
            D: ["Mempelajari perilaku masyarakat dan sosial", "Sosiologi"]
        }
    },
    {
        question: "Kamu lebih suka suasana kerja seperti apa?",
        options: {
            A: ["Kantor dan sistematis", "Ekonomi"],
            B: ["Kreatif dan fleksibel", "Sastra Inggris"],
            C: ["Laboratorium atau lapangan penelitian", "Biologi"],
            D: ["Interaksi dengan masyarakat", "Sosiologi"]
        }
    },
    {
        question: "Kalau dapat tugas kelompok, kamu biasanya jadi apa?",
        options: {
            A: ["Pengatur strategi dan pembagian tugas", "Ekonomi"],
            B: ["Penulis laporan atau penyusun kata", "Sastra Inggris"],
            C: ["Penyusun data dan analisis hasil", "Biologi"],
            D: ["Penghubung antaranggota atau mediator", "Sosiologi"]
        }
    }
];

let currentQuestion = 0;
let scores = { Ekonomi: 0, "Sastra Inggris": 0, Biologi: 0, Sosiologi: 0 };

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    for (const [key, [text, major]] of Object.entries(q.options)) {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.textContent = text;
        btn.onclick = () => selectOption(major);
        optionsContainer.appendChild(btn);
    }
}

function selectOption(major) {
    scores[major]++;
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextBtn.style.display = "none";

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("question-container").style.display = "none";
    const topMajor = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    resultContainer.innerHTML = `
    <h2>Hasil Tes Kamu:</h2>
    <p>Kamu cocok di jurusan <strong>${topMajor}</strong>.</p>
  `;
}

showQuestion();