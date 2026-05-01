# My Personal Website

A clean, minimal website designed as a personal portfolio and learning project.

## About

This is a small static website that introduces me, lists my skills, and shows
how to contact me. The project is intentionally small so the focus stays on
practicing a real Git workflow (branches, merges, conflicts, tags, and recovery).

## Features

- Clean, minimal design
- Responsive layout (works on phones and desktops)
- Fast loading — no frameworks, just HTML and CSS
- Easy to customize

## How to Run

No build tools are required. Just open the website in any browser:

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. Open `index.html` in your browser by double-clicking it,
   or run a local server:
   ```
   python3 -m http.server 8000
   ```
   Then visit http://localhost:8000 in your browser.

## Project Structure

- `index.html` — main page (intro + sections)
- `about.html` — about page
- `css/style.css` — site-wide styles
- `js/main.js` — small interactive script
- `CHANGELOG.md` — version history
- `.gitignore` — files Git should ignore

## Author

Created as part of a practical Git assignment.