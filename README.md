# 🎬 Video Clipper

A modern video clipper web app built with **Bun**, **Hono**, and **Astro**.
Upload a video and instantly download the first 10 seconds—fast, simple, and beautiful.

---

## ✨ Features

- ⚡ **Ultra-fast backend** with Bun + Hono
- 🌌 **Modern frontend** with Astro
- 🎥 **Clip any video**: Upload and get the first 10 seconds as a new file
- 🎨 **Beautiful UI** (see below!)

---

## 🖼️ Preview

![Astro Logo](client/src/assets/astro.svg)
![Background](client/src/assets/background.svg)

> _Screenshots of your UI can go here!_
> (If you want to add actual screenshots, save them in `public/` or `assets/` and reference them here.)

---

## 🛠️ Project Structure

```
/
├── client/         # Astro frontend
│   ├── src/
│   │   ├── components/Clip.astro
│   │   ├── assets/astro.svg
│   │   └── assets/background.svg
│   └── public/
├── server/         # Bun + Hono backend
│   ├── index.ts
│   └── ...
```

---

## 🚀 Getting Started

### 1. **Backend (Bun + Hono)**

```bash
cd server
bun install
bun run index.ts
```
- The server will run on [http://localhost:3001](http://localhost:3001)

### 2. **Frontend (Astro)**

```bash
cd client
npm install
npm run dev
```
- The frontend will run on [http://localhost:4321](http://localhost:4321)

---

## 📦 Usage

1. Open [http://localhost:4321](http://localhost:4321) in your browser.
2. Upload a video file.
3. Click **Clip Video**.
4. Download your 10-second clip!

---

## 🖼️ Assets

- ![Astro Logo](client/src/assets/astro.svg)
- ![Background](client/src/assets/background.svg)
- Favicon: `client/public/favicon.svg`

---

## 🧑‍💻 Tech Stack

- [Bun](https://bun.sh) – Backend runtime
- [Hono](https://hono.dev) – Backend framework
- [Astro](https://astro.build) – Frontend framework
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static) – Video processing


