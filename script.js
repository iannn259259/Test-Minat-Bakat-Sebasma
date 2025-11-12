const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A: ["Meneliti makhluk hidup dan lingkungan", "Biologi"],
            B: ["Menganalisis perilaku sosial dan budaya masyarakat", "Sosiologi"],
            C: ["Mengatur keuangan atau menganalisis data ekonomi", "Ekonomi"],
            D: ["Menulis cerita, artikel, atau menerjemahkan teks", "Sastra Inggris"]
        }
    },
    {
        question: "Mata pelajaran apa yang paling kamu kuasai?",
        options: {
            A: ["Biologi", "Biologi"],
            B: ["Sosiologi", "Sosiologi"],
            C: ["Ekonomi", "Ekonomi"],
            D: ["Bahasa Inggris", "Sastra Inggris"]
        }
    },
    {
        question: "Kegiatan mana yang paling menarik bagimu?",
        options: {
            A: ["Mengamati eksperimen di laboratorium", "Biologi"],
            B: ["Menganalisis fenomena sosial", "Sosiologi"],
            C: ["Membuat laporan keuangan", "Ekonomi"],
            D: ["Menulis puisi atau menerjemahkan teks", "Sastra Inggris"]
        }
    }
];

let currentQuestion = 0;
let scores = { "Biologi": 0, "Sosiologi": 0, "Ekonomi": 0, "Sastra Inggris": 0 };

function showQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        const qTitle = document.createElement("h2");
        qTitle.textContent = q.question;
        quizDiv.appendChild(qTitle);

        for (const key in q.options) {
            const btn = document.createElement("div");
            btn.textContent = q.options[key][0];
            btn.className = "option";
            btn.onclick = () => {
                const subject = q.options[key][1];
                scores[subject]++;
                currentQuestion++;
                showQuestion();
            };
            quizDiv.appendChild(btn);
        }
    } else {
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById("result");
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    const bestSubject = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    resultDiv.innerHTML = generateCareerInfo(bestSubject);
}

function generateCareerInfo(subject) {
    const careers = {
        "Biologi": [
            {
                icon: "🧬",
                title: "Ahli Bioteknologi",
                desc: "Meneliti dan mengembangkan teknologi berbasis makhluk hidup.",
                gaji: "Rp 8.000.000 – Rp 20.000.000",
                univ: ["UI – Fakultas MIPA", "UGM – Fakultas Biologi", "UNAIR – Fakultas Sains dan Teknologi"]
            },
            {
                icon: "🏥",
                title: "Analis Medis",
                desc: "Melakukan analisis sampel biologis untuk diagnosa medis.",
                gaji: "Rp 6.000.000 – Rp 15.000.000",
                univ: ["UNDIP – Fakultas Kedokteran", "UB – Fakultas Kedokteran"]
            }
        ],
        "Sosiologi": [
            {
                icon: "👥",
                title: "Peneliti Sosial",
                desc: "Menganalisis fenomena sosial dan memberikan solusi kebijakan.",
                gaji: "Rp 5.000.000 – Rp 12.000.000",
                univ: ["UI – Fakultas Ilmu Sosial dan Ilmu Politik", "UGM – Fakultas ISIPOL"]
            },
            {
                icon: "🏛️",
                title: "Konsultan Masyarakat",
                desc: "Membantu lembaga memahami dinamika sosial masyarakat.",
                gaji: "Rp 6.000.000 – Rp 14.000.000",
                univ: ["UNAIR – Fakultas Ilmu Sosial", "UNPAD – FISIP"]
            }
        ],
        "Ekonomi": [
            {
                icon: "💼",
                title: "Akuntan",
                desc: "Mencatat dan menganalisis keuangan perusahaan.",
                gaji: "Rp 5.000.000 – Rp 20.000.000",
                univ: ["UI – FEB", "UGM – FEB", "UNAIR – FEB"]
            },
            {
                icon: "📊",
                title: "Analis Keuangan",
                desc: "Menganalisis data ekonomi untuk keputusan bisnis.",
                gaji: "Rp 8.000.000 – Rp 25.000.000",
                univ: ["UNDIP – FEB", "UB – FEB"]
            }
        ],
        "Sastra Inggris": [
            {
                icon: "📝",
                title: "Penulis & Editor",
                desc: "Menulis artikel, naskah, atau menerjemahkan teks.",
                gaji: "Rp 4.000.000 – Rp 15.000.000",
                univ: ["UI – Fakultas Ilmu Budaya", "UGM – Fakultas Ilmu Budaya"]
            },
            {
                icon: "🎙️",
                title: "Penerjemah & Interpreter",
                desc: "Menerjemahkan teks atau percakapan antar bahasa.",
                gaji: "Rp 6.000.000 – Rp 18.000.000",
                univ: ["UNPAD – Fakultas Sastra", "UNAIR – Fakultas Humaniora"]
            }
        ]
    };

    const selectedCareers = careers[subject];
    let html = `<h2>Hasil Kamu: ${subject}</h2>`;
    selectedCareers.forEach(c => {
        html += `
      <div class="career-card">
        <h3>${c.icon} ${c.title}</h3>
        <p>${c.desc}</p>
        <p><strong>Kisaran Gaji:</strong> ${c.gaji}</p>
        <p><strong>Rekomendasi Universitas:</strong></p>
        <ul>${c.univ.map(u => `<li>${u}</li>`).join("")}</ul>
      </div>
    `;
    });
    html += `<button onclick="location.reload()">🔄 Coba Lagi</button>`;
    return html;
}

showQuestion()