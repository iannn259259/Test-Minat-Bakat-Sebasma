const jobsData = {
    Biologi: [
        { name: "Ahli Bioteknologi", desc: "Meneliti & mengembangkan teknologi berbasis organisme hidup.", salary: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-15 jt", universities: "UI, ITB, UGM, UNAIR, UNPAD" },
        { name: "Ahli Ekologi", desc: "Mempelajari hubungan makhluk hidup & lingkungannya.", salary: "Pemula: Rp5-8 jt, Berpengalaman: Rp8-12 jt", universities: "IPB, UGM, UI, UNAIR, UNS" },
        { name: "Ahli Gizi", desc: "Memantau & merancang pola makan sehat.", salary: "Pemula: Rp4-7 jt, Berpengalaman: Rp7-12 jt", universities: "IPB, UGM, UNAIR, UI, UNDIP" },
        { name: "Peneliti Medis", desc: "Mencari inovasi di bidang kesehatan.", salary: "Pemula: Rp6-9 jt, Berpengalaman: Rp9-14 jt", universities: "UI, UGM, ITB, UNAIR, UNHAS" },
        { name: "Mikrobiolog", desc: "Mempelajari mikroorganisme & perannya.", salary: "Pemula: Rp5-8 jt, Berpengalaman: Rp8-12 jt", universities: "UGM, UI, ITB, UNAIR, UNPAD" },
        { name: "Ahli Pertanian Modern", desc: "Mengembangkan teknik tanam efisien & berkelanjutan.", salary: "Pemula: Rp4-7 jt, Berpengalaman: Rp7-12 jt", universities: "IPB, UGM, UNPAD, UB, UNAIR" },
        { name: "Ahli Forensik Biologi", desc: "Menganalisis DNA & jaringan tubuh untuk penyelidikan.", salary: "Pemula: Rp6-9 jt, Berpengalaman: Rp9-14 jt", universities: "UI, UGM, UNAIR, UNHAS, ITB" }
    ],
    Sosiologi: [
        { name: "Sosiolog", desc: "Menganalisis perilaku masyarakat & perubahan sosial.", salary: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-12 jt", universities: "UI, UGM, UNAIR, UNPAD, UNS" },
        { name: "Jurnalis Sosial", desc: "Menulis & melaporkan isu sosial & politik.", salary: "Pemula: Rp4-7 jt, Berpengalaman: Rp7-12 jt", universities: "UI, UNPAD, UGM, UNAIR, UMN" },
        { name: "Analis Kebijakan Publik", desc: "Menilai program pemerintah & rekomendasi kebijakan.", salary: "Pemula: Rp5-9 jt, Berpengalaman: Rp9-14 jt", universities: "UGM, UI, UNAIR, UB, UNDIP" },
        { name: "Konsultan Sosial", desc: "Memberikan saran untuk lembaga sosial & pemerintah.", salary: "Pemula: Rp4-7 jt, Berpengalaman: Rp7-12 jt", universities: "UI, UGM, UNAIR, UNHAS, UNPAD" },
        { name: "Peneliti Sosial", desc: "Melakukan penelitian tren sosial & perilaku masyarakat.", salary: "Pemula: Rp5-8 jt, Berpengalaman: Rp8-13 jt", universities: "UI, UGM, UNAIR, UNPAD, UNS" },
        { name: "Pekerja LSM (NGO)", desc: "Bekerja di lembaga nonpemerintah fokus isu sosial.", salary: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-15 jt", universities: "UI, UGM, UNAIR, UNPAD, UNDIP" },
        { name: "Dosen Sosiologi", desc: "Mengajar & meneliti bidang sosiologi.", salary: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-15 jt", universities: "UI, UGM, UNAIR, UNPAD, UB" }
    ],
    Ekonomi: [
        { name: "Akuntan", desc: "Mencatat, mengelola & menganalisis data keuangan.", salary: "Pemula: Rp5-10 jt, Berpengalaman: Rp10-15 jt", universities: "UI, UGM, UNAIR, UNDIP, UB" },
        { name: "Analis Keuangan", desc: "Menganalisis kondisi keuangan perusahaan & pasar.", salary: "Pemula: Rp6-12 jt, Berpengalaman: Rp12-18 jt", universities: "UI, UGM, ITB, UNDIP, UNAIR" },
        { name: "Ekonom", desc: "Meneliti & memprediksi tren ekonomi.", salary: "Pemula: Rp7-12 jt, Berpengalaman: Rp12-20 jt", universities: "UI, UGM, UNPAD, UB, UNAIR" },
        { name: "Konsultan Bisnis", desc: "Membantu perusahaan mengembangkan strategi.", salary: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-20 jt", universities: "UI, ITB, UGM, UNAIR, BINUS" },
        { name: "Investor / Analis Pasar Modal", desc: "Mengelola portofolio saham & risiko investasi.", salary: "Pemula: Rp7-12 jt, Berpengalaman: Rp12-25 jt", universities: "UI, UGM, ITB, UNDIP, UNAIR" },
        { name: "Auditor Internal", desc: "Memeriksa kepatuhan & risiko perusahaan.", salary: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-15 jt", universities: "UI, UNDIP, UNAIR, UGM, UB" },
        { name: "Manajer Pemasaran", desc: "Mengembangkan strategi promosi & meningkatkan penjualan.", salary: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-20 jt", universities: "UI, ITB, UGM, BINUS, UNDIP" }
    ],
    "Sastra Inggris": [
        { name: "Penulis atau Editor", desc: "Membuat & menyunting teks, artikel, novel.", salary: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-12 jt", universities: "UI, UGM, UNAIR, UNDIP, UNPAD" },
        { name: "Penerjemah", desc: "Mengubah teks dari bahasa Inggris ke Indonesia & sebaliknya.", salary: "Pemula: Rp5-9 jt, Berpengalaman: Rp9-15 jt", universities: "UI, UGM, UNAIR, UNPAD, UNDIP" },
        { name: "Public Relations (PR)", desc: "Membangun hubungan perusahaan & publik.", salary: "Pemula: Rp5-9 jt, Berpengalaman: Rp9-15 jt", universities: "UNPAD, UI, BINUS, UGM, UNAIR" },
        { name: "Content Creator atau Copywriter", desc: "Menciptakan konten untuk media sosial & website.", salary: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-12 jt", universities: "UI, BINUS, UNPAD, UNAIR, UGM" },
        { name: "Guru Bahasa Inggris", desc: "Mengajar tata bahasa, kosa kata & kemampuan berbicara.", salary: "Pemula: Rp4-7 jt, Berpengalaman: Rp7-12 jt", universities: "UNJ, UNY, UI, UGM, UPI" },
        { name: "Tour Guide Internasional", desc: "Memandu wisatawan mancanegara.", salary: "Pemula: Rp4-8 jt, Berpengalaman: Rp8-12 jt", universities: "Udayana, UGM, UI, UNAIR, UNS" },
        { name: "Linguist (Ahli Bahasa)", desc: "Meneliti struktur & penggunaan bahasa.", salary: "Pemula: Rp6-10 jt, Berpengalaman: Rp10-15 jt", universities: "UI, UGM, UNAIR, UNDIP, UNHAS" }
    ]
};

const showJobsBtn = document.getElementById("showJobsBtn");
const showAllBtn = document.getElementById("showAllBtn");
const jobList = document.getElementById("jobList");
const jobDetails = document.getElementById("jobDetails");
const restartBtn = document.getElementById("restartBtn");

function displayJobs(subjects) {
    jobList.innerHTML = "";
    subjects.forEach(sub => {
        jobsData[sub].forEach(job => {
            const li = document.createElement("li");
            li.textContent = job.name;
            li.addEventListener("click", () => showJobDetails(job));
            jobList.appendChild(li);
        });
    });
    jobList.classList.remove("hidden");
}

function showJobDetails(job) {
    jobDetails.innerHTML = `
        <h3>${job.name}</h3>
        <p><strong>Deskripsi:</strong> ${job.desc}</p>
        <p><strong>Gaji:</strong> ${job.salary}</p>
        <p><strong>Rekomendasi Universitas:</strong> ${job.universities}</p>
    `;
    jobDetails.classList.remove("hidden");
}

showJobsBtn.addEventListener("click", () => {
    const dominant = document.getElementById("dominantSubject").textContent;
    displayJobs([dominant]);
});

showAllBtn.addEventListener("click", () => {
    displayJobs(Object.keys(jobsData));
});

restartBtn.addEventListener("click", () => {
    jobList.classList.add("hidden");
    jobDetails.classList.add("hidden");
    alert("Quiz di-reset. Mulai ulang quiz.");
});
