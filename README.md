# Interactive Birthday Card — Ready-to-Deploy Next.js Site

## What you have
A small Next.js website that contains the interactive birthday card:
- Click **Open Card** to reveal the animated message.
- Confetti, floating hearts, and letter-by-letter animated text.
- Background music (plays when the user clicks to open the card).
- Mobile-friendly and responsive.

## Quick start (run locally)

**Prerequisites**
- Node.js 18+ (or latest LTS)
- npm (comes with Node)

**Steps**
1. Unzip the project and open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000`.
   - To open on your phone: make sure your phone and computer are on the same Wi‑Fi. Use your computer's local IP (e.g. `http://192.168.1.5:3000`) or deploy to a hosting provider (recommended).

## Deploying (recommended: Vercel)

1. Create a GitHub repository and push this project.
2. Sign in to https://vercel.com with your GitHub account.
3. Import the repository; Vercel auto-detects Next.js and will deploy.
4. After deployment, share the generated URL — it opens on any phone browser.

## Notes about mobile autoplay
- Browsers often block audio until the user interacts. This project starts audio after you click **Open Card**, which counts as user interaction on mobile.

## Customize
- Change the message in `pages/index.js`.
- Replace the audio source URL (default: Bensound `bensound-romantic.mp3`) with your own hosted file if you prefer.
