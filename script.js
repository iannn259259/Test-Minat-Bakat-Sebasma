// =====================
// DATA PERTANYAAN
// =====================
const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A:["Mengatur keuangan atau menganalisis data","Ekonomi"],
            B:["Menulis cerita, artikel, atau menerjemahkan teks","Sastra Inggris"],
            C:["Meneliti makhluk hidup dan lingkungan","Biologi"],
            D:["Mengamati perilaku sosial dan masyarakat","Sosiologi"]
        }
    },
    {
        question: "Mata pelajaran apa yang paling kamu kuasai?",
        options: {
            A:["Matematika dan Ekonomi","Ekonomi"],
            B:["Bahasa Inggris","Sastra Inggris"],
            C:["Biologi","Biologi"],
            D:["Sosiologi","Sosiologi"]
        }
    },
    {
        question: "Kamu lebih suka bekerja di lingkungan seperti apa?",
        options: {
            A:["Perusahaan atau kantor dengan data finansial","Ekonomi"],
            B:["Studio kreatif atau penerbitan","Sastra Inggris"],
            C:["Laboratorium penelitian","Biologi"],
            D:["Lapangan sosial dan komunitas","Sosiologi"]
        }
    },
    {
        question: "Jika kamu diberi tugas kelompok, peran apa yang paling kamu ambil?",
        options: {
            A:["Meneliti data dan mencari fakta","Biologi"],
            B:["Mengatur komunikasi dan kerja sama kelompok","Sosiologi"],
            C:["Mendesain atau menulis laporan","Sastra Inggris"],
            D:["Mengatur rencana dan pembagian tugas","Ekonomi"]
        }
    },
    {
        question: "Jenis berita atau konten apa yang paling menarik perhatianmu?",
        options: {
            A:["Penemuan ilmiah dan teknologi baru","Biologi"],
            B:["Budaya pop, sastra, atau karya kreatif","Sastra Inggris"],
            C:["Tren ekonomi dan bisnis","Ekonomi"],
            D:["Isu sosial, politik, dan kemasyarakatan","Sosiologi"]
        }
    },
    {
        question: "Teman-teman biasanya mengenal kamu sebagai orang yang...",
        options: {
            A:["Imajinatif dan suka bercerita","Sastra Inggris"],
            B:["Logis dan penuh perhitungan","Ekonomi"],
            C:["Empatik dan suka menolong","Sosiologi"],
            D:["Teliti dan suka meriset","Biologi"]
        }
    },
    {
        question: "Kamu lebih suka membaca tentang...",
        options: {
            A:["Kisah tokoh perubahan sosial","Sosiologi"],
            B:["Penelitian ilmiah dan teknologi","Biologi"],
            C:["Cerita sastra atau budaya","Sastra Inggris"],
            D:["Strategi bisnis sukses","Ekonomi"]
        }
    },
    {
        question: "Kalau ada masalah di sekitar kamu, hal pertama yang kamu pikirkan?",
        options: {
            A:["Bagaimana mengomunikasikannya dengan baik","Sastra Inggris"],
            B:["Bagaimana solusinya secara finansial","Ekonomi"],
            C:["Apa penyebab ilmiahnya","Biologi"],
            D:["Bagaimana dampaknya bagi orang lain","Sosiologi"]
        }
    },
    {
        question: "Kalau kamu lagi jalan-jalan ke tempat baru, hal pertama yang kamu perhatiin apa?",
        options: {
            A:["Aktivitas dan kebiasaan orang-orang di sana","Sosiologi"],
            B:["Keindahan alam atau jenis tumbuhan/hewan uniknya","Biologi"],
            C:["Arsitektur dan desain bangunannya","Sastra Inggris"],
            D:["Perkembangan usaha atau toko-toko di sekitarnya","Ekonomi"]
        }
    },
    {
        question: "Kamu paling suka suasana belajar yang...",
        options: {
            A:["Tenang, bisa fokus eksplorasi sendiri","Sastra Inggris"],
            B:["Ramai, banyak diskusi dan tukar pikiran","Sosiologi"],
            C:["Praktikal, langsung praktik dan eksperimen","Biologi"],
            D:["Tertata, jelas langkah-langkah dan targetnya","Ekonomi"]
        }
    }
];

// =====================
// DATA BIDANG / KERJA LENGKAP
// =====================
const bidangInfo = {
    Ekonomi: {
        jurusan:["Akuntansi","Manajemen","Ekonomi Pembangunan"],
        kampus:["UI","UGM","UNAIR","UNDIP","UB"],
        pekerjaan: {
            "Akuntan":`💼 Pekerjaan: Akuntan
Deskripsi Pekerjaan:
Akuntan bertugas mencatat, mengelola, dan menganalisis data keuangan suatu organisasi atau individu. Tanggung jawabnya meliputi penyusunan laporan keuangan, pemeriksaan kepatuhan terhadap peraturan pajak, serta memberikan saran finansial untuk membantu pengambilan keputusan yang tepat.

Kisaran Gaji:
Pemula (0–3 tahun): Rp 5.000.000 – Rp 10.000.000/bulan
Berpengalaman (3–5 tahun): Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2 (5–10 tahun): Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3 (10–20 tahun): Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
1. Universitas Airlangga (UNAIR) – Fakultas Ekonomi dan Bisnis (FEB)
2. Universitas Indonesia (UI) – Fakultas Ekonomi dan Bisnis (FEB)
3. Universitas Gadjah Mada (UGM) – Fakultas Ekonomika dan Bisnis (FEB)
4. Universitas Diponegoro (UNDIP) – Fakultas Ekonomika dan Bisnis (FEB)
5. Universitas Brawijaya (UB) – Fakultas Ekonomi dan Bisnis (FEB)`,

            "Analis Keuangan":`💼 Pekerjaan: Analis Keuangan
Deskripsi Pekerjaan:
Menganalisis kondisi keuangan perusahaan, tren pasar, dan laporan keuangan untuk membantu manajemen membuat keputusan investasi dan strategi bisnis.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 12.000.000/bulan
Berpengalaman: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S2: Rp 18.000.000 – Rp 25.000.000/bulan
Lulusan S3: Rp 25.000.000 – Rp 35.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FEB
UGM – FEB
ITB – SBM
UNAIR – FEB`,

            "Ekonom":`💼 Pekerjaan: Ekonom
Deskripsi Pekerjaan:
Meneliti, menganalisis, dan memprediksi tren ekonomi serta memberikan saran kebijakan ekonomi untuk pemerintah atau perusahaan.

Kisaran Gaji:
Pemula: Rp 7.000.000 – Rp 12.000.000/bulan
Berpengalaman: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S2: Rp 20.000.000 – Rp 30.000.000/bulan
Lulusan S3: Rp 30.000.000 – Rp 40.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FEB
UGM – FEB
UNPAD – FEB
UB – FEB
UNAIR – FEB`,

            "Konsultan Bisnis":`💼 Pekerjaan: Konsultan Bisnis
Deskripsi Pekerjaan:
Membantu perusahaan meningkatkan efisiensi, mengatasi masalah keuangan, dan mengembangkan strategi pertumbuhan melalui analisis data dan perencanaan strategis.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 20.000.000/bulan
Lulusan S2: Rp 20.000.000 – Rp 30.000.000/bulan
Lulusan S3: Rp 30.000.000 – Rp 40.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FEB
ITB – SBM
UGM – FEB
UNAIR – FEB
Bina Nusantara – Fakultas Bisnis dan Manajemen`,

            "Investor / Analis Pasar Modal":`💼 Pekerjaan: Investor / Analis Pasar Modal
Deskripsi Pekerjaan:
Mengelola portofolio saham, menganalisis risiko investasi, serta mencari peluang keuntungan di pasar keuangan.

Kisaran Gaji:
Pemula: Rp 7.000.000 – Rp 12.000.000/bulan
Berpengalaman: Rp 12.000.000 – Rp 25.000.000/bulan
Lulusan S2: Rp 25.000.000 – Rp 40.000.000/bulan
Lulusan S3: Rp 40.000.000 – Rp 60.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FEB
UGM – FEB
ITB – SBM
UNDIP – FEB
UNAIR – FEB`,

            "Auditor Internal":`💼 Pekerjaan: Auditor Internal
Deskripsi Pekerjaan:
Memeriksa dan memastikan kepatuhan perusahaan terhadap prosedur keuangan, menganalisis risiko, serta memberikan rekomendasi perbaikan sistem manajemen keuangan.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FEB
UNDIP – FEB
UNAIR – FEB
UGM – FEB
UB – FEB`,

            "Manajer Pemasaran":`💼 Pekerjaan: Manajer Pemasaran
Deskripsi Pekerjaan:
Mengembangkan strategi promosi, meningkatkan penjualan produk, dan membangun citra merek perusahaan melalui analisis pasar dan tren konsumen.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 20.000.000/bulan
Lulusan S2: Rp 20.000.000 – Rp 30.000.000/bulan
Lulusan S3: Rp 30.000.000 – Rp 40.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FEB
ITB – SBM
UGM – FEB
Bina Nusantara – Fakultas Ekonomi dan Komunikasi
UNDIP – FEB`
        },

        Biologi: {
            jurusan:["Bioteknologi","Biologi Murni","Ekologi"],
            kampus:["UGM","IPB","ITB","UNAIR","UI","UNPAD","UNS"],
            pekerjaan: {
                "Ahli Bioteknologi":`💼 Pekerjaan: Ahli Bioteknologi
Deskripsi Pekerjaan:
Meneliti dan mengembangkan teknologi berbasis organisme hidup untuk menciptakan produk seperti obat, vaksin, dan makanan bernilai tinggi.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 25.000.000/bulan
Lulusan S3: Rp 25.000.000 – Rp 40.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FMIPA
ITB – Sekolah Ilmu dan Teknologi Hayati
UGM – Fakultas Biologi
UNAIR – Fakultas Sains dan Teknologi
UNPAD – FMIPA`,

                "Ahli Ekologi":`💼 Pekerjaan: Ahli Ekologi
Deskripsi Pekerjaan:
Mempelajari hubungan antar makhluk hidup dan lingkungannya untuk menjaga keseimbangan ekosistem dan keberlanjutan alam.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
IPB – Fakultas Kehutanan dan Lingkungan
UGM – Fakultas Biologi
UI – FMIPA
UNAIR – FST
UNS – Fakultas Biologi`,

                "Ahli Gizi":`💼 Pekerjaan: Ahli Gizi
Deskripsi Pekerjaan:
Memantau dan merancang pola makan sehat untuk meningkatkan kesehatan individu dan masyarakat.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
IPB – Fakultas Ekologi Manusia
UGM – FK-KMK
UNAIR – FKM
UI – FKM
UNDIP – FKM`,

                "Peneliti Medis":`💼 Pekerjaan: Peneliti Medis
Deskripsi Pekerjaan:
Mencari inovasi di bidang kesehatan seperti obat, vaksin, dan metode pengobatan baru.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 9.000.000/bulan
Berpengalaman: Rp 9.000.000 – Rp 14.000.000/bulan
Lulusan S2: Rp 14.000.000 – Rp 22.000.000/bulan
Lulusan S3: Rp 22.000.000 – Rp 35.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – Fakultas Kedokteran
UGM – Fakultas Kedokteran
ITB – Sekolah Farmasi
UNAIR – Fakultas Kedokteran
UNHAS – Fakultas Kedokteran`,

                "Mikrobiolog":`💼 Pekerjaan: Mikrobiolog
Deskripsi Pekerjaan:
Mempelajari mikroorganisme seperti bakteri dan virus, serta perannya dalam kesehatan, makanan, dan lingkungan.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UGM – Fakultas Biologi
UI – FMIPA Biologi
ITB – Sekolah Hayati
UNAIR – FST
UNPAD – FMIPA`,

                "Ahli Pertanian Modern":`💼 Pekerjaan: Ahli Pertanian Modern
Deskripsi Pekerjaan:
Mengembangkan teknik tanam efisien dengan bioteknologi dan sistem pertanian berkelanjutan.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 28.000.000/bulan

Rekomendasi Universitas dan Fakultas:
IPB – Fakultas Pertanian
UGM – Fakultas Pertanian
UNPAD – Fakultas Pertanian
UB – Fakultas Pertanian
UNAIR – FST`,

                "Ahli Forensik Biologi":`💼 Pekerjaan: Ahli Forensik Biologi
Deskripsi Pekerjaan:
Menganalisis DNA, darah, dan jaringan tubuh untuk membantu penyelidikan kejahatan.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 9.000.000/bulan
Berpengalaman: Rp 9.000.000 – Rp 14.000.000/bulan
Lulusan S2: Rp 14.000.000 – Rp 22.000.000/bulan
Lulusan S3: Rp 22.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – Fakultas Kedokteran
UGM – Fakultas Biologi
UNAIR – Fakultas Kedokteran
UNHAS – Fakultas Kedokteran
ITB – Sekolah Hayati`
            },

            "Sastra Inggris": {
                jurusan:["Sastra Inggris","Linguistik","Penerjemahan"],
                kampus:["UI","UNPAD","UNDIP"],
                pekerjaan: {
                    "Penulis / Editor":`💼 Pekerjaan: Penulis / Editor
Deskripsi Pekerjaan:
Membuat dan menyunting teks seperti artikel, novel, atau konten media. Profesi ini membutuhkan kemampuan bahasa, tata tulis, dan kreativitas tinggi.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FIB
UGM – FIB
UNAIR – FIB
UNDIP – FIB
UNPAD – FIB`,

                    "Penerjemah":`💼 Pekerjaan: Penerjemah
Deskripsi Pekerjaan:
Mengubah teks atau percakapan dari bahasa Inggris ke bahasa Indonesia atau sebaliknya.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 9.000.000/bulan
Berpengalaman: Rp 9.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FIB
UGM – FIB
UNAIR – FIB
UNPAD – FIB
UNDIP – FIB`,

                    "Public Relations (PR)":`💼 Pekerjaan: Public Relations (PR)
Deskripsi Pekerjaan:
Membangun hubungan baik antara perusahaan dan publik melalui komunikasi efektif, event, dan media.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 9.000.000/bulan
Berpengalaman: Rp 9.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 22.000.000/bulan
Lulusan S3: Rp 22.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UNPAD – Ilmu Komunikasi
UI – FISIP (Komunikasi)
Bina Nusantara – Ilmu Komunikasi
UGM – Ilmu Komunikasi
UNAIR – Ilmu Komunikasi`,

                    "Content Creator / Copywriter":`💼 Pekerjaan: Content Creator / Copywriter
Deskripsi Pekerjaan:
Menciptakan konten menarik untuk media sosial, website, atau iklan dengan kemampuan menulis persuasif dan kreatif.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FIB
Bina Nusantara – Komunikasi
UNPAD – Ilmu Komunikasi
UNAIR – FIB
UGM – FIB`,

                    "Guru Bahasa Inggris":`💼 Pekerjaan: Guru Bahasa Inggris
Deskripsi Pekerjaan:
Mengajar tata bahasa, kosa kata, serta keterampilan berbicara dan menulis dalam bahasa Inggris kepada siswa di sekolah atau lembaga kursus.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UNJ – Fakultas Bahasa dan Seni
UNY – Fakultas Bahasa dan Seni
UI – FIB
UGM – FIB
UPI – Fakultas Bahasa dan Sastra`,

                    "Tour Guide Internasional":`💼 Pekerjaan: Tour Guide Internasional
Deskripsi Pekerjaan:
Memandu wisatawan mancanegara, memberikan informasi sejarah dan budaya, serta memastikan perjalanan berjalan lancar.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
Udayana – Fakultas Pariwisata
UGM – FIB
UI – FIB
UNAIR – FIB
UNS – FIB`,

                    "Linguist (Ahli Bahasa)":`💼 Pekerjaan: Linguist (Ahli Bahasa)
Deskripsi Pekerjaan:
Meneliti struktur, sejarah, dan penggunaan bahasa untuk keperluan akademik, teknologi bahasa, atau pendidikan.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FIB (Linguistik)
UGM – FIB
UNAIR – FIB
UNDIP – FIB
UNHAS – FIB`
                },

                Sosiologi: {
                    jurusan:["Sosiologi","Ilmu Politik","Antropologi"],
                    kampus:["UI","UGM","UNAIR","UNPAD","UNS"],
                    pekerjaan: {
                        "Sosiolog":`💼 Pekerjaan: Sosiolog
Deskripsi Pekerjaan:
Menganalisis perilaku masyarakat dan perubahan sosial untuk memahami pola interaksi sosial.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNPAD – FISIP
UNS – FISIP`,

                        "Jurnalis Sosial":`💼 Pekerjaan: Jurnalis Sosial
Deskripsi Pekerjaan:
Menulis dan melaporkan isu-isu sosial, kemanusiaan, dan politik yang mempengaruhi masyarakat luas.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – Ilmu Komunikasi
UNPAD – FIKOM
UGM – FISIPOL
UNAIR – FISIP
UMN – FIKOM`,

                        "Analis Kebijakan Publik":`💼 Pekerjaan: Analis Kebijakan Publik
Deskripsi Pekerjaan:
Menilai dampak program pemerintah dan menyusun rekomendasi untuk kebijakan sosial yang lebih baik.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 9.000.000/bulan
Berpengalaman: Rp 9.000.000 – Rp 14.000.000/bulan
Lulusan S2: Rp 14.000.000 – Rp 22.000.000/bulan
Lulusan S3: Rp 22.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UGM – FISIPOL
UI – FISIP
UNAIR – FISIP
UB – FISIP
UNDIP – FISIP`,

                        "Konsultan Sosial":`💼 Pekerjaan: Konsultan Sosial
Deskripsi Pekerjaan:
Memberikan saran kepada pemerintah, NGO, atau lembaga sosial dalam menangani masalah masyarakat.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNHAS – FISIP
UNPAD – FISIP`,

                        "Peneliti Sosial":`💼 Pekerjaan: Peneliti Sosial
Deskripsi Pekerjaan:
Melakukan penelitian terhadap tren sosial, perilaku masyarakat, dan dinamika ekonomi untuk lembaga riset atau universitas.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 13.000.000/bulan
Lulusan S2: Rp 13.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNPAD – FISIP
UNS – FISIP`,

                        "Pekerja LSM (NGO)":`💼 Pekerjaan: Pekerja LSM (NGO)
Deskripsi Pekerjaan:
Bekerja di lembaga nonpemerintah yang fokus pada isu sosial seperti kemiskinan, lingkungan, dan pendidikan.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 28.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNPAD – FISIP
UNDIP – FISIP`,

                        "Dosen Sosiologi":`💼 Pekerjaan: Dosen Sosiologi
Deskripsi Pekerjaan:
Mengajar dan meneliti dalam bidang sosiologi untuk mengembangkan ilmu pengetahuan sosial di perguruan tinggi.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 22.000.000/bulan
Lulusan S3: Rp 22.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNPAD – FISIP
UB – FISIP`
                    }
                };

// =====================
// LOGIKA QUIZ
// =====================
                let currentQuestion = 0;
                let score = {Ekonomi:0, Biologi:0, "Sastra Inggris":0, Sosiologi:0};

                const quizEl = document.getElementById("quiz");
                const resultEl = document.getElementById("result");
                const descBox = document.querySelector(".desc-box");

                function loadQuestion(){
    const q = questions[currentQuestion];
    quizEl.innerHTML = `<h2>${q.question}</h2>
        <button class="option-btn" data-val="A">${q.options.A[0]}</button>
        <button class="option-btn" data-val="B">${q.options.B[0]}</button>
        <button class="option-btn" data-val="C">${q.options.C[0]}</button>
        <button class="option-btn" data-val="D">${q.options.D[0]}</button>
    `;

    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const selected = q.options[btn.dataset.val][1];
            score[selected]++;
            currentQuestion++;
            if(currentQuestion < questions.length){
                loadQuestion();
            }else{
                showResult();
            }
        });
    });
}

function showResult(){
    quizEl.style.display = "none";
    resultEl.style.display = "block";

    // cari score tertinggi
    let top = Object.keys(score).reduce((a,b)=> score[a]>=score[b]?a:b);
    resultEl.innerHTML = `<h2>Hasil Tes: ${top}</h2>
    <p>Kamu cocok di bidang <b>${top}</b>. Pilih pekerjaan di bawah untuk lihat deskripsi lengkapnya:</p>
    <div class="job-btns">
        ${Object.keys(bidangInfo[top].pekerjaan).map(job=> `<button class="job-btn">${job}</button>`).join('')}
    </div>
    <div class="desc-box"></div>
    `;

    const jobBtns = document.querySelectorAll(".job-btn");
    const descBox = document.querySelector(".desc-box");

    jobBtns.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const jobName = btn.textContent;
            descBox.innerText = bidangInfo[top].pekerjaan[jobName];
        });
    });
}

loadQuestion();
