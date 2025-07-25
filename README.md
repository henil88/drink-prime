````markdown
# 🥤 Prime by Logan Paul x KSI

A high-performance, interactive product site for the **Prime** brand by Logan Paul and KSI. Featuring 3D visuals, scroll-triggered animations, and a modular, scalable architecture — this project delivers a visually striking and smooth user experience using the latest tools in the modern front-end stack.

---

## 🚀 Tech Stack

- **React** – Component-driven UI library
- **Framer Motion** – Smooth declarative animations
- **GSAP** – Advanced animation engine
  - `ScrollTrigger` – Scroll-based animation control
  - `DrawSVGPlugin` – SVG animation support
- **React Three Fiber (R3F)** – Three.js in React
- **Drei** – R3F helpers
- **Three.js** – WebGL-powered 3D rendering
- **Lenis.js** – Smooth scrolling handler
- **Swiper.js** – Responsive carousels/sliders
- **SCSS Modules** – Modular CSS styling
- **React Router v6** – Routing system

---

## 📁 Project Structure

```text
project-root/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   ├── context/
│   │   └── DrinkContext.jsx
│   ├── hooks/
│   │   ├── lenis.js
│   │   └── lenisInstance.js
│   ├── pages/
│   ├── react-bits-effects/
│   │   ├── ScrollFloat/
│   │   │   ├── ScrollFloat.jsx
│   │   │   ├── ScrollFloat.scss
│   │   └── TiltedCard/
│   │       ├── TiltedCard.jsx
│   │       ├── TiltedCard.css
│   ├── effects/
│   ├── router/
│   │   └── CoinMainRoutes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.scss
````

---

## 🎨 Styling (SCSS Modules + CSS)

SCSS modules are used for component-level encapsulated styling, with global mixins and variables for consistency.

**Key SCSS Files:**

* `Navbar.module.scss`
* `hero_text.module.scss`
* `ReturnPolicy.module.scss`
* `productDetailsSpecific.scss`
* `variables.scss`
* `mixins.scss`

---

## 🧩 React Components

Grouped by drink type:

* `energy/Energy.jsx`
* `hydration/Hydration.jsx`
* `hydrationPlus/HydrationPlus.jsx`
* `Prime-ice/PrimeIce.jsx`
* `rapid-hydration/{CanRotator, DrinkGrid, RapidRehydration}.jsx`
* `ProductShowCase/{Card, ProductShowCase}.jsx`
* Shared UI: `Navbar`, `Hero`, `Footer`, `ProductCard`, `PrimeCanModel`, `TitleHeading`, `MicroInteraction`, `ScrollToTop`

---

## 📄 Pages

```text
About, Home, ContactForm, NotFound
AuthForm/
├── Login.jsx
└── Register.jsx
PrivacyPolicy, ReturnPolicy, ProductDetails
```

---

## 🧠 Context & Hooks

* `DrinkContext` – Manages drink/product type state globally
* `lenis.js` – Custom hook for scroll behavior
* `lenisInstance.js` – Singleton-style Lenis instance setup

---

## 🧬 Custom React Bits + Effects

```text
react-bits-effects/
├── ScrollFloat/
│   ├── ScrollFloat.jsx
│   ├── ScrollFloat.scss
├── TiltedCard/
│   ├── TiltedCard.jsx
│   ├── TiltedCard.css
```

These encapsulate advanced animation/scroll effects using GSAP and Framer Motion. Effects can be reused across product pages and hero sections.

---

## 🧭 Routing

All routes are managed through:

```js
src/router/CoinMainRoutes.jsx
```

---

## ✨ Features

* 🌀 Smooth scrolling with Lenis.js
* 🎮 Interactive 3D drink cans and cards via R3F
* ✍️ Scroll-linked animations powered by GSAP
* 🎨 Full modular styling system with SCSS Modules
* 💡 Context API for product-type logic
* 📱 Fully mobile responsive with Swiper sliders
* 🚦 Route error handling via NotFound route

---

## 📦 Getting Started

### Prerequisites

* Node.js ≥ 16


### Installation

```bash
https://github.com/henil88/drink-prime.git
cd drink-prime.git
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 🙌 Credits

* **Prime** by Logan Paul & KSI
* Built by Henil Rathod
* Special thanks to open-source libraries and sheryians coding school used in this project

---

```


