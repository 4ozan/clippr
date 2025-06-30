🎬 Video Clipper
A modern video clipper web app built with Bun, Hono, and Astro.
Upload a video and instantly download the first 10 seconds—fast, simple, and beautiful.

✨ Features
⚡ Ultra-fast backend with Bun + Hono

🌌 Modern frontend with Astro

🎥 Clip any video: Upload and get the first 10 seconds as a new file

🎨 Enhanced UI delight (see below!)

🖼️ Preview
Screenshots of your UI can go here!
For a truly delightful UI, consider using the official Astro logo from its CDN and replacing the generic background with something more modern and engaging (e.g., a subtle gradient, an abstract pattern, or a blurred video still).
(If you want to add actual screenshots, save them in public/ or assets/ and reference them here.)

🛠️ Project Structure
/
├── client/         # Astro frontend
│   ├── src/
│   │   ├── components/Clip.astro
│   │   ├── assets/astro.svg     # (Consider removing if using CDN)
│   │   └── assets/background.svg # (Consider removing if using CDN)
│   └── public/
├── server/         # Bun + Hono backend
│   ├── index.ts
│   └── ...

🚀 Getting Started
1. Backend (Bun + Hono)
cd server
bun install
bun run index.ts

The server will run on http://localhost:3001

2. Frontend (Astro)
cd client
npm install
npm run dev

The frontend will run on http://localhost:4321

📦 Usage
Open http://localhost:4321 in your browser.

Upload a video file.

Click Clip Video.

Download your 10-second clip!

🖼️ Assets
Astro Logo: https://docs.astro.build/assets/full-logo.svg (Official CDN)

Background: For improved UI delight, consider a modern and visually appealing background. You might use a subtle gradient, an abstract design, or a high-quality, publicly available image that complements your app's aesthetic.

Favicon: client/public/favicon.svg

🧑‍💻 Tech Stack
Bun – Backend runtime

Hono – Backend framework

Astro – Frontend framework

ffmpeg-static – Video processing
