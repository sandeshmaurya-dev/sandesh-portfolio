# Sandesh Maurya — Interactive 3D Portfolio

The interactive 3D portfolio and architectural web experience of **Sandesh Maurya** — 2nd Year B.Tech CSE (Data Science & AI) Student & Developer.

Built with Svelte 5 / SvelteKit, Three.js with TSL (Three Shading Language), real-time relativistic raymarching shaders, and a custom unified frame loop engine.

---

## 🚀 Quick Start: Run Locally Offline

You can run the fully functional site directly:

```bash
# Option 1: Run via Python
python serve.py

# Option 2: Double-click serve.bat on Windows
```

Then open your browser at **`http://localhost:8080`**.

---

## 📁 Directory Structure

* **`downloaded/`**: The complete production assets and web experience:
  * `index.html`: Entry HTML with localized hydration nodes.
  * `_app/immutable/`: SvelteKit application bundle, chunks, and CSS modules.
  * `generated/fonts/`: Webfonts (`cast-latin`, `mono-latin`, `sans-latin`, `serif-display-latin`).
  * `api/sheet/`: Extracted JSON data sheets for all supported languages (`en`, `ckb`, `fa`, `fi`, `kmr`).
* **`beautified/`**: Formatted unminified source code for architectural analysis and study.
* **`insights.json`**: Extracted structured metadata, projects list, skills, and scene configurations.
* **`analysis_summary.json`**: Summary of detected WebGL primitives, components, and libraries.
* **`serve.py` / `serve.bat`**: Zero-dependency local web server with CORS and cache headers configured.

---

## ⚡ Architectural Breakdown

### 1. Framework & Core Stack
* **UI Framework:** **Svelte 5 / SvelteKit** — minimal runtime footprint, fine-grained reactivity.
* **Build System:** **Vite** — chunked dynamic imports (`import()`) for high-performance lazy loading.
* **Rendering Loop:** Proprietary unified frame loop engine dubbed **`WormHoleKernel`** (*"one frame loop under everything, built from small kits"*).

### 2. The 3D Graphics Engine & Shaders
The 3D canvas is powered by **Three.js with TSL (Three Shading Language)** node materials and raw GLSL raymarching routines across four primary interactive environments:

1. **Singularity (`singularity` | Motion: `fall` | Interaction: `dive`):**
   * **Physics Model:** General relativistic raymarching around a Schwarzschild black hole.
   * **Key Metrics:**
     * Schwarzschild Radius ($r_s$): `1.0`
     * Photon Sphere: `1.5` ($1.5 r_s$)
     * Critical Impact Parameter ($b_{crit}$): `2.598076` ($\approx \sqrt{27}/2$)
     * ISCO (Innermost Stable Circular Orbit): `3.0` ($3 r_s$)
     * Temperature Peak: `4.0833`
   * **Optics:** 32-sample gravitational light deflection table (`FIELD_DEFLECTION`) and chromatic dispersion (`GROOVE_COMB`) across wavelengths 427nm to 677nm.

2. **Galaxy (`galaxy` | Motion: `orbit` | Interaction: `wind`):**
   * **Astrophysical Simulation:** Multi-component galaxy structure comprising:
     * `GALAXY_NUCLEUS`, `GALAXY_BAR`, `GALAXY_INNER`, `GALAXY_ARM`, `GALAXY_OUTER`
     * Young blue star clusters (`GALAXY_YOUNG`), H-II emission nebulae (`GALAXY_NEBULA`)
     * Interstellar dust extinction and reddening (`GALAXY_DUST_REDDENING`)

3. **Meadow (`meadow` | Motion: `wind` | Interaction: `dive`):**
   * **Procedural Botanical Model:** A physical dandelion clock responding to cursor wind dynamics.
   * **Parameters:** 168 seeds, 88 bristles per seed, and 15,161 animated fibers.

4. **Still Life Lens (`lens`):**
   * **Raymarching:** Analytical Signed Distance Field (SDF) of a porcelain cup, saucer, liquid surface, handle fillet, table, and day/night illumination models.

---

### 3. Dynamic Cursor System
* High-precision SVG pointer with dynamic geometry:
  * `--ring`: circle radius (14px - 46px)
  * `--arm`: crosshair length (9px - 66px)
  * `--gap`: space between center and crosshair
* Blending: `mix-blend-mode: difference` for automatic high contrast against dark and light canvas regions.
* State Modes: `link`, `lens`, `disabled`.

---

### 4. Developer & Contact
- **Developer:** Sandesh Maurya
- **Email:** [sandeshmaurya2006@gmail.com](mailto:sandeshmaurya2006@gmail.com)
- **GitHub:** [sandeshmaurya-dev](https://github.com/sandeshmaurya-dev)
- **Telegram:** [@Innocent_zero737](https://t.me/Innocent_zero737)
