# 📝 Retno Eka Triatry — Developer Portfolio

An interactive, responsive developer portfolio built with **Next.js 16 (App Router)** and **TypeScript**, designed with a **Neo-Brutalist Retro-Tech & Digital Scrapbook Mac OS** aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)

---

## ✨ Features

- **macOS Window Frame Header:** Traffic light buttons (🔴 🟡 🟢), navigation pills, and dynamic live clock.
- **Notebook Paper Texture:** Ruled lined paper background with responsive scaling across mobile and desktop.
- **Neo-Brutalist Visuals:** Hard-edge shadows, pastel sticky notes (post-it), and washi tape decor.
- **Clean Architecture:** Single source of truth in `src/data/portfolioData.ts` for quick content updates.
- **Interactive Retro Macintosh 128k:** Clickable/tappable 1984 Mac homage with scanline CRT effects and easter egg message cycles.
- **Mobile-First Responsive Design:** Optimized touch targets, stacked metric cards, and horizontal scroll containment.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout & SEO metadata
│   │   ├── page.tsx               # Main assembly page with scroll tracking
│   │   └── globals.css            # Font imports & base utilities
│   ├── components/
│   │   ├── common/                # WindowHeader, StickyNote, TapeSticker, Icons
│   │   ├── sections/              # Hero, About, Projects, Playground, Contact
│   │   └── ui/                    # ProjectFolderCard, TechTag
│   ├── data/
│   │   └── portfolioData.ts       # Central data configuration
│   ├── styles/
│   │   ├── notebook.css           # Notebook paper background & texture
│   │   └── scrap-effects.css      # Brutalist shadows, post-its & tape styles
│   └── types/
│       └── portfolio.ts           # TypeScript interfaces
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👤 Author

**Retno Eka Triatry**
- Fullstack Developer based in Jakarta, Indonesia
- Focus: Next.js, Laravel, Golang
- GitHub: [@retnoekaaaa](https://github.com/retnoekaaaa)
