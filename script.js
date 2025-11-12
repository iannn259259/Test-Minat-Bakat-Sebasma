const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A: ["Mengatur keuangan atau menganalisis data", "Ekonomi"],
            B: ["Menulis cerita, artikel, atau menerjemahkan teks", "Sastra Inggris"],
            C: ["Meneliti makhluk hidup dan eksperimen", "Biologi"],
            D: ["Mempelajari masyarakat dan perilaku sosial", "Sosiologi"]
        }
    },
    {
        question: "Apa pelajaran yang paling kamu nikmati di sekolah?",
        options: {
            A: ["Matematika atau Akuntansi", "Ekonomi"],
            B: ["Bahasa Inggris atau Bahasa Indonesia", "Sastra Inggris"],
            C: ["IPA atau Biologi", "Biologi"],
            D: ["Sosiologi atau Sejarah", "Sosiologi"]
        }
    },
    {
        question: "Kalau kerja nanti, kamu ingin pekerjaan seperti apa?",
        options: {
            A: ["Kantoran dengan data dan angka", "Ekonomi"],
            B: ["Penulis, editor, atau penerjemah", "Sastra Inggris"],
            C: ["Peneliti atau tenaga medis", "Biologi"],
            D: ["Psikolog, guru, atau konselor", "Sosiologi"]
        }
    }
];

let currentQuestion = 0;
let scores = { Ekonomi: 0, "Sastra Inggris": 0, Biologi: 0, Sosiologi: 0 };

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function showQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        let html = `<h2>${q.question}</h2>`;
        for (const key in q.options) {
            html += `<button onclick="selectOption('${q.options[key][1]}')">${q.options[key][0]}</button>`;
        }
        quizContainer.innerHTML = html;
    } else {
        showResult();
    }
}

function selectOption(subject) {
    scores[subject]++;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    const maxScore = Math.max(...Object.values(scores));
    const recommended = Object.keys(scores).find(key => scores[key] === maxScore);
    quizContainer.innerHTML = "";
    resultContainer.innerHTML = `
    <h2>Rekomendasi Jurusan Kamu: ${recommended}</h2>
    <p>Kamu cocok di bidang <b>${recommended}</b> berdasarkan jawaban kamu.</p>
  `;
}

showQuestion();