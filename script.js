const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A: ["Mengatur keuangan dan menganalisis data", "EKONOMI"],
            B: ["Menulis cerita atau menerjemahkan teks", "SASTRA INGGRIS"],
            C: ["Meneliti tumbuhan atau hewan", "BIOLOGI"],
            D: ["Mengamati perilaku manusia", "SOSIOLOGI"]
        }
    },
    {
        question: "Apa mata pelajaran favoritmu di sekolah?",
        options: {
            A: ["Biologi", "BIOLOGI"],
            B: ["Sosiologi", "SOSIOLOGI"],
            C: ["Ekonomi", "EKONOMI"],
            D: ["Bahasa Inggris", "SASTRA INGGRIS"]
        }
    },
    {
        question: "Kamu lebih suka bekerja di bidang apa?",
        options: {
            A: ["Laboratorium atau riset ilmiah", "BIOLOGI"],
            B: ["Masyarakat dan perilaku sosial", "SOSIOLOGI"],
            C: ["Bisnis dan keuangan", "EKONOMI"],
            D: ["Bahasa dan komunikasi", "SASTRA INGGRIS"]
        }
    },
    {
        question: "Kamu merasa paling kuat dalam hal apa?",
        options: {
            A: ["Berpikir logis dan analitis", "EKONOMI"],
            B: ["Berempati dan memahami orang lain", "SOSIOLOGI"],
            C: ["Menjelaskan fenomena alam", "BIOLOGI"],
            D: ["Berbicara atau menulis dengan lancar", "SASTRA INGGRIS"]
        }
    },
    {
        question: "Kalau ada tugas kelompok, kamu biasanya bagian apa?",
        options: {
            A: ["Menyusun laporan keuangan atau strategi", "EKONOMI"],
            B: ["Menulis teks presentasi", "SASTRA INGGRIS"],
            C: ["Meneliti dan mencari data lapangan", "BIOLOGI"],
            D: ["Mengatur kerja tim", "SOSIOLOGI"]
        }
    },
    {
        question: "Kamu lebih suka menonton film tentang apa?",
        options: {
            A: ["Bisnis dan kesuksesan", "EKONOMI"],
            B: ["Hubungan antar manusia", "SOSIOLOGI"],
            C: ["Petualangan ilmiah", "BIOLOGI"],
            D: ["Kisah budaya dan bahasa", "SASTRA INGGRIS"]
        }
    },
    {
        question: "Kamu ingin berkarier sebagai apa?",
        options: {
            A: ["Analis keuangan", "EKONOMI"],
            B: ["Penulis atau penerjemah", "SASTRA INGGRIS"],
            C: ["Ahli bioteknologi", "BIOLOGI"],
            D: ["Konselor sosial", "SOSIOLOGI"]
        }
    },
    {
        question: "Kamu paling menikmati saat...",
        options: {
            A: ["Menganalisis perilaku masyarakat", "SOSIOLOGI"],
            B: ["Membaca literatur asing", "SASTRA INGGRIS"],
            C: ["Melakukan eksperimen", "BIOLOGI"],
            D: ["Menghitung keuntungan bisnis", "EKONOMI"]
        }
    },
    {
        question: "Apa jenis buku yang kamu sukai?",
        options: {
            A: ["Novel dan puisi", "SASTRA INGGRIS"],
            B: ["Ensiklopedia alam", "BIOLOGI"],
            C: ["Psikologi dan sosial", "SOSIOLOGI"],
            D: ["Bisnis dan investasi", "EKONOMI"]
        }
    },
    {
        question: "Kalau ikut lomba, kamu pilih lomba apa?",
        options: {
            A: ["Debat Bahasa Inggris", "SASTRA INGGRIS"],
            B: ["Olimpiade Biologi", "BIOLOGI"],
            C: ["Kompetisi Ekonomi", "EKONOMI"],
            D: ["Sosiologi kreatif", "SOSIOLOGI"]
        }
    }
];

const jobData = {
    BIOLOGI: [
        "Ahli Bioteknologi",
        "Peneliti Laboratorium",
        "Ahli Lingkungan",
        "Guru Biologi"
    ],
    SOSIOLOGI: [
        "Konselor Sosial",
        "Peneliti Masyarakat",
        "HR Specialist",
        "Dosen Sosiologi"
    ],
    EKONOMI: [
        "Analis Keuangan",
        "Manajer Bisnis",
        "Ekonom",
        "Konsultan Pajak"
    ],
    "SASTRA INGGRIS": [
        "Penerjemah",
        "Penulis",
        "Editor",
        "Guru Bahasa Inggris"
    ]
};

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const mainSubjectSpan = document.getElementById("main-subject");
const showJobsBtn = document.getElementById("show-jobs-btn");
const jobsContainer = document.getElementById("jobs-container");
const subjectSelector = document.getElementById("subject-selector");
const subjectSelect = document.getElementById("subject-select");
const showSelectedJobsBtn = document.getElementById("show-selected-jobs-btn");

let currentQuestion = 0;
let scores = { BIOLOGI: 0, SOSIOLOGI: 0, EKONOMI: 0, "SASTRA INGGRIS": 0 };

function showQuestion() {
    const q = questions[currentQuestion];
    questionContainer.textContent = q.question;
    optionsContainer.innerHTML = "";

    Object.entries(q.options).forEach(([key, [text, subject]]) => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => {
            scores[subject]++;
            nextBtn.disabled = false;
        });
        optionsContainer.appendChild(btn);
    });

    nextBtn.disabled = true;
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const mainSubject = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    mainSubjectSpan.textContent = mainSubject;
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

showJobsBtn.addEventListener("click", () => {
    jobsContainer.innerHTML = "";
    const mainSubject = mainSubjectSpan.textContent;
    const jobs = jobData[mainSubject];
    jobsContainer.innerHTML = `<h3>Pekerjaan yang Sesuai (${mainSubject}):</h3><ul>${jobs.map(j => `<li>${j}</li>`).join("")}</ul>`;
});

document.getElementById("show-other-subjects-btn").addEventListener("click", () => {
    subjectSelector.classList.remove("hidden");
});

showSelectedJobsBtn.addEventListener("click", () => {
    const selected = subjectSelect.value;
    const jobs = jobData[selected];
    jobsContainer.innerHTML = `<h3>Pekerjaan untuk ${selected}:</h3><ul>${jobs.map(j => `<li>${j}</li>`).join("")}</ul>`;
});
