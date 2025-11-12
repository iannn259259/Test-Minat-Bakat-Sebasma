const questions = [
    {question: "Apa yang paling kamu suka?", options: {A: "Bekerja dengan makhluk hidup", B: "Mempelajari perilaku manusia", C: "Mengelola angka dan uang", D: "Menulis atau menerjemahkan teks"} },
    {question: "Aktivitas favoritmu?", options: {A: "Eksperimen lab", B: "Mengamati masyarakat", C: "Analisis data ekonomi", D: "Menulis cerita atau artikel"} },
    {question: "Kamu paling tertarik dengan?", options: {A: "Biologi & kesehatan", B: "Sosial & budaya", C: "Bisnis & ekonomi", D: "Bahasa & sastra"} },
    {question: "Pekerjaan impianmu?", options: {A: "Ahli Bioteknologi", B: "Sosiolog", C: "Akuntan", D: "Penulis"} },
    {question: "Kegiatan yang paling membuatmu senang?", options: {A: "Penelitian ilmiah", B: "Mengamati interaksi sosial", C: "Investasi & pasar modal", D: "Menyusun artikel"} },
    {question: "Keahlianmu yang paling menonjol?", options: {A: "Analisis organisme", B: "Analisis perilaku manusia", C: "Mengelola keuangan", D: "Menguasai bahasa"} },
    {question: "Jenis buku favorit?", options: {A: "Buku sains", B: "Sosiologi & psikologi", C: "Ekonomi & bisnis", D: "Novel & literatur"} },
    {question: "Lebih suka bekerja?", options: {A: "Lab / penelitian", B: "Lapangan / masyarakat", C: "Kantor / analisis", D: "Menulis / kreativitas"} },
    {question: "Proyek yang paling kamu nikmati?", options: {A: "Eksperimen biologi", B: "Survei sosial", C: "Analisis laporan keuangan", D: "Membuat konten kreatif"} },
    {question: "Nilai yang paling penting bagimu?", options: {A: "Inovasi ilmiah", B: "Pemahaman sosial", C: "Keuntungan & strategi", D: "Kreativitas bahasa"} },
];

const jobs = {
    "BIOLOGI": [
        {title: "Ahli Bioteknologi", desc: "Ahli bioteknologi meneliti dan mengembangkan teknologi berbasis organisme hidup untuk menciptakan produk seperti obat, vaksin, dan makanan bernilai tinggi.", gaji: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-15 jt", uni: "UI, ITB, UGM, UNAIR, UNPAD"},
        {title: "Ahli Ekologi", desc: "Ahli ekologi mempelajari hubungan antar makhluk hidup dan lingkungannya untuk menjaga keseimbangan ekosistem dan keberlanjutan alam.", gaji: "Pemula: Rp5-8 jt, Berpengalaman: Rp8-12 jt", uni: "IPB, UGM, UI, UNAIR, UNS"},
        // bisa ditambah semua pekerjaan BIOLOGI
    ],
    "SOSIOLOGI": [
        {title: "Sosiolog", desc: "Menganalisis perilaku masyarakat dan perubahan sosial untuk memahami pola interaksi sosial.", gaji: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-12 jt", uni: "UI, UGM, UNAIR, UNPAD, UNS"},
        // bisa ditambah semua pekerjaan SOSIOLOGI
    ],
    "EKONOMI": [
        {title: "Akuntan", desc: "Mencatat, mengelola, dan menganalisis data keuangan suatu organisasi.", gaji: "Pemula: Rp5-10 jt, Berpengalaman: Rp10-15 jt", uni: "UNAIR, UI, UGM, UNDIP, UB"},
    ],
    "SASTRA INGGRIS": [
        {title: "Penulis", desc: "Membuat dan menyunting teks seperti artikel, novel, atau konten media.", gaji: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-12 jt", uni: "UI, UGM, UNAIR, UNDIP, UNPAD"},
    ]
};

let currentQuestion = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const mainSubjectSpan = document.getElementById("main-subject");
const showJobsBtn = document.getElementById("show-jobs-btn");
const showOtherSubjectsBtn = document.getElementById("show-other-subjects-btn");
const jobsContainer = document.getElementById("jobs-container");
const subjectSelector = document.getElementById("subject-selector");
const subjectSelect = document.getElementById("subject-select");
const showSelectedJobsBtn = document.getElementById("show-selected-jobs-btn");

function showQuestion() {
    const q = questions[currentQuestion];
    questionContainer.innerText = `${currentQuestion + 1}. ${q.question}`;
    optionsContainer.innerHTML = "";
    for (let key in q.options) {
        const btn = document.createElement("button");
        btn.innerText = `${key}. ${q.options[key]}`;
        btn.addEventListener("click", () => selectAnswer(key));
        optionsContainer.appendChild(btn);
    }
}

function selectAnswer(answer) {
    answers.push(answer);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    const counts = {A:0,B:0,C:0,D:0};
    answers.forEach(a => counts[a]++);
    let max = "A";
    for (let key in counts) {
        if (counts[key] > counts[max]) max = key;
    }
    const mapelMap = {A: "BIOLOGI", B: "SOSIOLOGI", C: "EKONOMI", D: "SASTRA INGGRIS"};
    mainSubjectSpan.innerText = mapelMap[max];
}

function displayJobs(subject) {
    jobsContainer.innerHTML = "";
    if (!jobs[subject]) return;
    jobs[subject].forEach(job => {
        const div = document.createElement("div");
        div.className = "job-card";
        div.innerHTML = `<h4>${job.title}</h4><p>${job.desc}</p><p><strong>Gaji:</strong> ${job.gaji}</p><p><strong>Rekomendasi Universitas:</strong> ${job.uni}</p>`;
        jobsContainer.appendChild(div);
    });
}

showQuestion();

showJobsBtn.addEventListener("click", () => {
    displayJobs(mainSubjectSpan.innerText);
});

showOtherSubjectsBtn.addEventListener("click", () => {
    subjectSelector.classList.remove("hidden");
});

showSelectedJobsBtn.addEventListener("click", () => {
    const selectedSubject = subjectSelect.value;
    displayJobs(selectedSubject);
});
