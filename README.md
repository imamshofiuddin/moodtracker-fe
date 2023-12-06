# React Project Template for Agile PdBL

# Cara Penggunaan
1. Pastikan Node.js sudah terinstall. Download [disini](https://nodejs.org/en/download).
2. Install PNPM. Baca lebih lanjut [disini](https://pnpm.io/installation#using-npm).
   ```
   npm install -g pnpm
   ```
3. Buat repo baru dengan repo ini sebagai template. Baca dokumentasinya
   [disini](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
4. Clone repository baru yang berhasil dibuat ke komputer kalian.
   ```
   git clone URL_REPO.git
   ```
5. Buat file `.env` pada root project kemudian copy semua isi file `.env.example` ke file `.env`.
6. Install dependensi yang diperlukan menggunakan perintah
   ```
   pnpm install
   ```
7. Jalankan project dengan menggunakan perintah
   ```
   pnpm run dev
   ```

# Struktur Template
## `.env` file
File ini berfungsi untuk menyimpan environment variable milik project kalian.
Pastikan untuk menambah prefix `VITE_` agar environment variable kalian dapat terbaca.
Misal `VITE_BASE_API_URL`, `VITE_APP_URL`, `VITE_APP_TITLE`, dsb.

## `src/api` folder
Folder ini digunakan untuk menyimpan file-file yang berkaitan dengan API.
Misalnya base URL, endpoint, dan fungsi untuk mengambil data dari API
(bisa menggunakan [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
atau [`axios`](https://axios-http.com/)).

## `src/assets` folder
Folder ini digunakan untuk menyimpan file-file yang berkaitan dengan CSS dan media (gambar, video, audio, dll.).

## `src/components` folder
Folder ini digunakan untuk menyimpan _reusable component_ yang dapat dipakai
ke berbagai `Page` maupun komponen lain.

## `src/hooks` folder
Folder ini digunakan untuk menyimpan
[`custom hook`](https://react.dev/learn/reusing-logic-with-custom-hooks) yang reusable.

## `src/pages` folder
Folder ini digunakan untuk menyimpan komponen yang berfungsi sebagai halaman yang bisa diakses melalui URL
dan didaftarkan pada `router`. Misalnya `LoginPage`, `RegisterPage`, `ProfilePage`, dll.

## `src/routes` folder
Folder ini digunakan untuk menyimpan `route` dari aplikasi. Route tersebut nantinya akan dapat diakses via browser.
Misalnya `/login`, `/register`, `/profile`, dll.

# Tools yang Dipakai
1. [React](https://react.dev/) sebagai Javascript framework.
2. [React Router](https://reactrouter.com/) untuk route handling.
3. [SWR](https://swr.vercel.app/) untuk
   [Data Fetching](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
4. [Tailwind CSS](https://tailwindcss.com/) sebagai CSS framework.
5. [Typescript](https://www.typescriptlang.org/) agar kodingan Javascript lebih terstruktur.
6. [ESLint](https://eslint.org/) dengan [Airbnb Javascript Rule](https://github.com/airbnb/javascript)
   sebagai Static Code Analysis Tool.
7. [Vite](https://vitejs.dev/) sebagai tool untuk asset
   [compiling](https://nextjs.org/learn/foundations/how-nextjs-works/compiling),
   [bundling](https://nextjs.org/learn/foundations/how-nextjs-works/bundling),
   & [minifying](https://nextjs.org/learn/foundations/how-nextjs-works/minifying).
