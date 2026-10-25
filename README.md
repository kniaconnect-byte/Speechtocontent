# Speechtocontent
Speech to Content - Planner - Content Library

## Alur bikin konten (editor ide)

Buka sebuah ide (dari Inbox, Planner, atau tombol "Tambah ide"), lalu ikuti 3 langkah:

1. **Ide** — tulis hook/ide kamu, pilih mau bikin konten apa (Reels, TikTok, YouTube, Carousel, Story), dan isi **referensi** kalau ada (opsional).
2. **Hook** — tekan *Generate hook dengan AI*, pilih salah satu dari 5 hasilnya, lalu edit kalau perlu. Bisa juga pakai Template / 60 Hook siap pakai tanpa API key.
3. **Caption** — tekan *Generate caption dengan AI* (atau tulis sendiri), jadwalkan kalau mau, lalu **Simpan**.

Kalau **referensi** diisi, hook dan caption yang di-generate mengikuti gaya, pola, panjang, dan nada referensi itu (isinya tetap tentang ide kamu, bukan menyalin referensi). Kalau kosong, AI memakai gaya library hook bawaan.

Langkah bisa dilompati lewat tab di atas, dan tombol *Simpan dulu, lanjutin nanti* tersedia di langkah 1-2. Ide, hook, referensi, dan caption tersimpan bareng.

## AI (BYOK)

Generate hook dan caption memakai Gemini API dengan API key Google AI Studio milik sendiri (BYOK). Mode Template tetap gratis tanpa API key.

### Setup API key
1. Bikin key di https://aistudio.google.com/apikey
2. Buka ikon pengaturan di pojok kanan atas (atau tombol "Atur" di langkah Hook/Caption), tempel key, simpan.

Key disimpan **hanya di `localStorage` browser** (tidak masuk Firestore, tidak lewat server lain). Request dikirim langsung dari browser ke `generativelanguage.googleapis.com`.

Model default: `gemini-3.5-flash-lite`. Nama model bisa diganti di Pengaturan AI kalau Google mengubahnya.
