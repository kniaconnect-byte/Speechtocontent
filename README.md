# Speechtocontent
Speech to Content - Planner - Content Library

## Hook: AI (BYOK) atau Template

Di editor ide, bagian **Hook** punya dua pilihan:

- **Pakai AI** — generate 5 hook dari ide kamu lewat Gemini API, pakai API key Google AI Studio milik sendiri (BYOK).
- **Pakai Template** — pilih dari 60 hook siap pakai atau 10 template viral (gratis, tanpa API key).

Pilihan terakhir diingat per perangkat.

### Setup API key
1. Bikin key di https://aistudio.google.com/apikey
2. Buka ikon pengaturan di pojok kanan atas (atau tombol "Atur" di bagian Hook), tempel key, simpan.

Key disimpan **hanya di `localStorage` browser** (tidak masuk Firestore, tidak lewat server lain). Request dikirim langsung dari browser ke `generativelanguage.googleapis.com`.

Model default: `gemini-3.5-flash-lite`. Nama model bisa diganti di Pengaturan AI kalau Google mengubahnya.
