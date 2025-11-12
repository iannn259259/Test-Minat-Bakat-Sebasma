const jobsData = {
    "Ekonomi": [
        { title: "Akuntan", desc: "Mencatat, mengelola & menganalisis data keuangan.", gaji: "Pemula: Rp 5-10 jt, Berpengalaman: Rp 10-15 jt", uni: "UI, UGM, UNAIR, UB, UNDIP" },
        { title: "Analis Keuangan", desc: "Menganalisis kondisi keuangan perusahaan & pasar.", gaji: "Pemula: Rp 6-12 jt, Berpengalaman: Rp 12-18 jt", uni: "UI, UGM, ITB, UNAIR, UNDIP" },
        { title: "Ekonom", desc: "Meneliti & memprediksi tren ekonomi.", gaji: "Pemula: Rp 7-12 jt, Berpengalaman: Rp 12-20 jt", uni: "UI, UGM, UNPAD, UB, UNAIR" },
        { title: "Konsultan Bisnis", desc: "Membantu perusahaan mengembangkan strategi.", gaji: "Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-20 jt", uni: "UI, ITB, UGM, UNAIR, BINUS" },
        { title: "Investor / Analis Pasar Modal", desc: "Mengelola portofolio saham & risiko investasi.", gaji: "Pemula: Rp 7-12 jt, Berpengalaman: Rp 12-25 jt", uni: "UI, UGM, ITB, UNDIP, UNAIR" },
        { title: "Auditor Internal", desc: "Memeriksa kepatuhan & risiko perusahaan.", gaji: "Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt", uni: "UI, UNDIP, UNAIR, UGM, UB" },
        { title: "Manajer Pemasaran", desc: "Mengembangkan strategi promosi & meningkatkan penjualan.", gaji: "Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-20 jt", uni: "UI, ITB, UGM, BINUS, UNDIP" }
    ],
    "Biologi": [
        { title: "Ahli Bioteknologi", desc: "Meneliti & mengembangkan teknologi berbasis organisme hidup untuk obat, vaksin, & makanan bernilai tinggi.", gaji: "Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt", uni: "UI, ITB, UGM, UNAIR, UNPAD" },
        { title: "Ahli Ekologi", desc: "Mempelajari hubungan makhluk hidup & lingkungannya.", gaji: "Pemula: Rp 5-8 jt, Berpengalaman: Rp 8-12 jt", uni: "IPB, UGM, UI, UNAIR, UNS" },
        { title: "Ahli Gizi", desc: "Merancang pola makan sehat untuk masyarakat.", gaji: "Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt", uni: "IPB, UGM, UNAIR, UI, UNDIP" },
        { title: "Peneliti Medis", desc: "Mencari inovasi di bidang kesehatan seperti obat & metode pengobatan.", gaji: "Pemula: Rp 6-9 jt, Berpengalaman: Rp 9-14 jt", uni: "UI, UGM, ITB, UNAIR, UNHAS" },
        { title: "Mikrobiolog", desc: "Mempelajari mikroorganisme & perannya dalam kesehatan, makanan, & lingkungan.", gaji: "Pemula: Rp 5-8 jt, Berpengalaman: Rp 8-12 jt", uni: "UGM, UI, ITB, UNAIR, UNPAD" },
        { title: "Ahli Pertanian Modern", desc: "Mengembangkan teknik tanam efisien & pertanian berkelanjutan.", gaji: "Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt", uni: "IPB, UGM, UNPAD, UB, UNAIR" },
        { title: "Ahli Forensik Biologi", desc: "Menganalisis DNA, darah, & jaringan tubuh untuk penyelidikan kejahatan.", gaji: "Pemula: Rp 6-9 jt, Berpengalaman: Rp 9-14 jt", uni: "UI, UGM, UNAIR, UNHAS, ITB" }
    ],
    "Sastra Inggris": [
        { title: "Penulis atau Editor", desc: "Membuat & menyunting teks seperti artikel, novel, atau konten media.", gaji: "Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt", uni: "UI, UGM, UNAIR, UNDIP, UNPAD" },
        { title: "Penerjemah", desc: "Mengubah teks atau percakapan dari Inggris ke Indonesia atau sebaliknya.", gaji: "Pemula: Rp 5-9 jt, Berpengalaman: Rp 9-15 jt", uni: "UI, UGM, UNAIR, UNPAD, UNDIP" },
        { title: "Public Relations (PR)", desc: "Membangun hubungan baik antara perusahaan & publik.", gaji: "Pemula: Rp 5-9 jt, Berpengalaman: Rp 9-15 jt", uni: "UI, UNPAD, BINUS, UGM, UNAIR" },
        { title: "Content Creator atau Copywriter", desc: "Menciptakan konten menarik untuk media sosial, website, atau iklan.", gaji: "Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt", uni: "UI, BINUS, UNPAD, UNAIR, UGM" },
        { title: "Guru Bahasa Inggris", desc: "Mengajar tata bahasa, kosa kata, & keterampilan berbicara & menulis.", gaji: "Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt", uni: "UNJ, UNY, UI, UGM, UPI" },
        { title: "Tour Guide Internasional", desc: "Memandu wisatawan mancanegara & memberikan info sejarah & budaya.", gaji: "Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt", uni: "Udayana, UGM, UI, UNAIR, UNS" },
        { title: "Linguist (Ahli Bahasa)", desc: "Meneliti struktur, sejarah, & penggunaan bahasa.", gaji: "Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt", uni: "UI, UGM, UNAIR, UNDIP, UNHAS" }
    ],
    "Sosiologi": [
        { title: "Sosiolog", desc: "Menganalisis perilaku masyarakat & perubahan sosial.", gaji: "Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt", uni: "UI, UGM, UNAIR, UNPAD, UNS" },
        { title: "Jurnalis Sosial", desc: "Menulis & melaporkan isu sosial, kemanusiaan, & politik.", gaji: "Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt", uni: "UI, UNPAD, UGM, UNAIR, UMN" },
        { title: "Analis Kebijakan Publik", desc: "Menilai dampak program pemerintah & menyusun rekomendasi.", gaji: "Pemula: Rp 5-9 jt, Berpengalaman: Rp 9-14 jt", uni: "UGM, UI, UNAIR, UB, UNDIP" },
        { title: "Konsultan Sosial", desc: "Memberikan saran kepada pemerintah, NGO, atau lembaga sosial.", gaji: "Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt", uni: "UI, UGM, UNAIR, UNHAS, UNPAD" },
        { title: "Peneliti Sosial", desc: "Melakukan penelitian tren sosial, perilaku masyarakat, & ekonomi.", gaji: "Pemula: Rp 5-8 jt, Berpengalaman: Rp 8-13 jt", uni: "UI, UGM, UNAIR, UNPAD, UNS" },
        { title: "Pekerja LSM (NGO)", desc: "Bekerja di lembaga nonpemerintah fokus pada isu sosial.", gaji: "Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-15 jt", uni: "UI, UGM, UNAIR, UNPAD, UNDIP" },
        { title: "Dosen Sosiologi", desc: "Mengajar & meneliti bidang sosiologi di perguruan tinggi.", gaji: "Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt", uni: "UI, UGM, UNAIR, UNPAD, UB" }
    ]
};

function finishQuiz(subject) {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");
    document.getElementById("dominant-subject").innerText = subject;

    const jobsList = document.getElementById("jobs-list");
    jobsList.innerHTML = '';
    jobsData[subject].forEach(job => {
        const div = document.createElement("div");
        div.className = "job-detail";
        div.innerHTML = `<strong>${job.title}</strong><p>${job.desc}</p><p>${job.gaji}</p><p>Rekomendasi Universitas: ${job.uni}</p>`;
        jobsList.appendChild(div);
    });
}

document.getElementById("show-jobs-btn").addEventListener("click", () => {
    document.getElementById("jobs-list").classList.toggle("hidden");
    document.getElementById("show-all-btn").classList.toggle("hidden");
});

document.getElementById("show-all-btn").addEventListener("click", () => {
    const allJobsDiv = document.getElementById("all-jobs");
    allJobsDiv.innerHTML = '';
    for (const subject in jobsData) {
        const h3 = document.createElement("h3");
        h3.textContent = subject;
        allJobsDiv.appendChild(h3);

        jobsData[subject].forEach(job => {
            const div = document.createElement("div");
            div.className = "job-detail";
            div.innerHTML = `<strong>${job.title}</strong><p>${job.desc}</p><p>${job.gaji}</p><p>Rekomendasi Universitas: ${job.uni}</p>`;
            allJobsDiv.appendChild(div);
        });
    }
    allJobsDiv.classList.remove("hidden");
});

function restartQuiz() {
    document.getElementById("quiz-section").classList.remove("hidden");
    document.getElementById("result-section").classList.add("hidden");
    document.getElementById("jobs-list").classList.add("hidden");
    document.getElementById("all-jobs").classList.add("hidden");
    document.getElementById("show-all-btn").classList.add("hidden");
}
