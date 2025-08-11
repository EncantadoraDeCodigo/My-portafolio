# Portfolio — Victoria Sánchez

**From prototype to production—secure, scalable, maintainable.**
Personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and custom components. It includes intro, skills (with icons), projects, contact, and social links.

## ✨ Features

* **Modern, responsive UI** with Tailwind CSS
* **Next.js App Router** (`/app`) with proper client/server components
* **Skills section** with icons (includes AWS)
* **Icon set** via `react-icons`
* **Multimedia background** (video) and visual effects
* **Basic SEO** (metadata) and production-ready structure
* **Deployed on Vercel**

## 🧰 Tech Stack

* **Frontend:** Next.js · React · TypeScript · Tailwind CSS
* **Assets/UX:** react-icons, video background
* **Infra & Deploy:** Vercel
* **Tooling:** ESLint, npm, Git/GitHub

## 🗂️ Project Structure (simplified)

```
My-portafolio/
└─ portafolio/
   ├─ app/
   │  ├─ page.tsx
   │  └─ (other layouts/routes)
   ├─ components/
   │  ├─ main/            # sections (Hero, Skills, etc.)
   │  └─ sub/             # subcomponents (SkillDataProvider, SkillText, ...)
   ├─ public/
   │  ├─ icons/           # icons (e.g., aws.svg)
   │  └─ cards-video.webm # video background
   ├─ constants/          # skills/data arrays
   ├─ styles/             # styles (if any)
   ├─ package.json
   └─ next.config.js
```

## 🚀 Getting Started (Local Development)

Requirements: **Node.js ≥ 18.17** (recommend 18 or 20) and **npm**.

```bash
# 1) Clone
git clone https://github.com/EncantadoraDeCodigo/My-portafolio.git

# 2) Go to the project directory
cd My-portafolio/portafolio

# 3) Install dependencies
npm install

# 4) Start dev server
npm run dev
# open http://localhost:3000
```

## 🔧 Build & Production

```bash
# Build
npm run build

# Start in production (local)
npm start
# default: http://localhost:3000
```

## 🌐 Deploy (Vercel)

**Web (GUI):**

1. In Vercel → **New Project** → **Import Git Repository** → `EncantadoraDeCodigo/My-portafolio`
2. Set **Root Directory** to `portafolio/`
3. Framework: **Next.js** (auto-detected)
4. Build: `npm install` → `next build`
5. Deploy. You’ll get a `*.vercel.app` domain.

**CLI:**

```bash
npm i -g vercel
cd My-portafolio/portafolio
vercel
vercel --prod
```

> If you use `next/image` with remote domains, add to `next.config.js`:
>
> ```js
> images: { domains: ["yourdomain.com"] }
> ```

## 🔐 Environment Variables (optional)

If you add APIs or secrets later:

* **Client-side** variables: prefix with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_API_BASE_URL`)
* **Server-side** variables: no prefix; used in server components/routes

## 🧪 Available Scripts

Defined in `package.json`:

* `dev` – development server
* `build` – production build
* `start` – production server
* `lint` – static analysis

```bash
npm run dev
npm run build
npm start
npm run lint
```

## 🧩 Add/Edit Skills

1. Place the icon in `public/icons/` (e.g., `public/icons/aws.svg`).
2. Add an item in `constants` (e.g., within `Other_skill` or your chosen array):

   ```ts
   { skill_name: "AWS", Image: "/icons/aws.svg", width: 60, height: 60 }
   ```
3. Ensure your merge in `Skills.tsx` includes that group.
4. De-duplication is done by `image.Image`.

## 🛠️ Troubleshooting (common cases)

* **LinkedIn link opens a different URL:** often caused by an absolute overlay intercepting clicks.
  Fix: add `pointer-events-none` to the overlay or raise the Footer’s z-index (`relative z-10`).

* **Multiple lockfile warning:** keep **a single** `package-lock.json` inside `portafolio/`.
  Remove lockfiles in parent folders.

* **React Three Fiber / SSR (`ReactCurrentOwner`):** mark 3D components with `'use client'` or import dynamically:

  ```ts
  const StarBackground = dynamic(() => import("@/components/main/StarBackground"), { ssr: false });
  ```

* **Images not loading:** place assets in `public/` and reference with absolute paths (`/icons/aws.svg`).
  For remote images, configure `images.domains` in `next.config.js`.

## 📄 License

This project is distributed under the **MIT** license.

## 👤 Author

**Victoria Sánchez**

* LinkedIn: [[www.linkedin.com/in/victoria-s-ramirez-77a564313](https://www.linkedin.com/in/victoria-s-ramirez-77a564313/)]
* GitHub: [https://github.com/EncantadoraDeCodigo](https://github.com/EncantadoraDeCodigo)

---
