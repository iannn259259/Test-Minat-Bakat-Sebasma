const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A: ["Mengatur keuangan atau menganalisis data", "Ekonomi"],
            B: ["Menulis cerita atau artikel", "Sastra Inggris"],
            C: ["Meneliti makhluk hidup", "Biologi"],
            D: ["Mempelajari perilaku manusia", "Sosiologi"]
        }
    },
    {
        question: "Kamu lebih suka bekerja di...",
        options: {
            A: ["Kantor dengan analisis dan angka", "Ekonomi"],
            B: ["Lingkungan dengan komunikasi bahasa", "Sastra Inggris"],
            C: ["Laboratorium atau lapangan penelitian", "Biologi"],
            D: ["Lembaga sosial atau pendidikan", "Sosiologi"]
        }
    },
    {
        question: "Kegiatan apa yang menurutmu paling menarik?",
        options: {
            A: ["Menghitung dan membuat rencana bisnis", "Ekonomi"],
            B: ["Membaca dan menerjemahkan teks bahasa asing", "Sastra Inggris"],
            C: ["Melihat mikroskop dan melakukan eksperimen", "Biologi"],
            D: ["Menganalisis perilaku masyarakat", "Sosiologi"]
        }
    }
];

let currentQuestion = 0;
const scores = { Ekonomi: 0, "Sastra Inggris": 0, Biologi: 0, Sosiologi: 0 };

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function showQuestion() {
    const q = questions[currentQuestion];
    questionContainer.textContent = q.question;
    optionsContainer.innerHTML = "";

    for (const key in q.options) {
        const [text, category] = q.options[key];
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.onclick = () => selectAnswer(category);
        optionsContainer.appendChild(btn);
    }
}

function selectAnswer(category) {
    scores[category]++;
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    nextBtn.style.display = "none";

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionContainer.textContent = "";
    optionsContainer.innerHTML = "";
    nextBtn.style.display = "none";

    let best = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    resultContainer.innerHTML = `
    <h3>Hasil Tes Kamu:</h3>
    <p>Kamu cocok di jurusan <strong>${best}</strong>!</p>
    <p>Pekerjaan yang sesuai: ${
        best === "Ekonomi" ? "Analis Keuangan, Akuntan, Manajer Bisnis" :
            best === "Sastra Inggris" ? "Penerjemah, Penulis, Editor" :
                best === "Biologi" ? "Ahli Bioteknologi, Peneliti, Dosen" :
                    "Konselor, Guru, Peneliti Sosial"
    }</p>
  `;
}

showQuestion();