# PiraTrue SafetyNet

PiraTrue SafetyNet is a small browser extension that acts like a **safety radar for piracy / repack / media sites**.  
When you open a page, it checks the domain against curated trusted and unsafe lists (inspired by the r/Piracy megathread) and shows a clear status:

- 🟢 TRUSTED
- 🔴 UNTRUSTED
- 🟡 UNKNOWN

Everything runs locally in your browser – no servers, no tracking, no data collection.

---

## What this tool does (in short)

- Finds the **current site’s domain**.
- Looks it up in:
  - A **trusted list** of known good domains (community‑approved, plus common safe services).
  - An **unsafe list** of domains or base names linked to scams, malware, or fake repacks.
- Shows the result in:
  - The **toolbar icon** (colored dot).
  - The **popup** (status text + colored indicator).

It is a **companion tool**: it does not download anything or bypass anything – it only helps you quickly judge whether a site looks like part of the “known good” scene or something sketchy.

---

## Tech stack

- **Language:** JavaScript
- **Extension type:** Chrome / Chromium extension (Manifest V3)
- **Frontend:** Plain HTML + CSS for popup and options UI
- **Storage:** `chrome.storage.sync` for custom trusted / unsafe lists
- **Icons:** Custom PNG icons (16x16, 32x32, 48x48, 128x128) referenced from `manifest.json`

No frameworks, no build step – just vanilla JS and the Chrome Extensions API.

---

## UI overview

- **Toolbar icon**
  - Green, red, or yellow depending on the current site status.
  - Clicking it opens the popup.

- **Popup**
  - Shows the current domain.
  - Shows a colored dot + label: `TRUSTED`, `UNTRUSTED`, or `UNKNOWN`.
  - Link to Settings.

- **Settings / Options page**
  - Add custom **trusted hosts**.
  - Add custom **unsafe base names**.
  - Reset lists back to defaults.

---

## Installation (developer / local)

1. Clone this repository:
   ```bash
   git clone https://github.com/Sanjeeth-Prakash/piratrue-safetynet.git
   cd piratrue-safetynet
   ```
2. Open `chrome://extensions` in Chrome (or `edge://extensions` in Edge, etc.).
3. Enable **Developer mode** (top‑right).
4. Click **Load unpacked** and select this project folder (the one containing `manifest.json`).
5. Pin the PiraTrue SafetyNet icon from the extensions menu.

---

## Why it’s not on the Chrome Web Store

PiraTrue SafetyNet is not currently on the Chrome Web Store because publishing there requires a paid developer account, which is not set up yet. You can still run the exact same code locally using Developer mode.

---

## How to load the extension in your browser (no Web Store)

You can install it manually in any Chromium‑based browser (Chrome, Edge, Brave, Vivaldi, etc.):

1. **Download the code**
   - On GitHub, click the green **Code** button.
   - Choose **Download ZIP**.
   - Extract the ZIP to a folder on your computer (you should see `manifest.json` inside).

2. **Open the extensions page**
   - In Chrome / Brave / Vivaldi: go to `chrome://extensions/`.
   - In Edge: go to `edge://extensions/`.

3. **Enable Developer mode**
   - Turn on the **Developer mode** toggle.

4. **Load the unpacked extension**
   - Click **Load unpacked**.
   - Select the folder where you extracted the ZIP.

5. **Pin and test**
   - Pin **PiraTrue SafetyNet** from the extensions menu.
   - Open a few sites and click the icon to see how the status changes.

When you update the code (pull from Git or download a new ZIP), go back to the extensions page and click **Reload** on PiraTrue SafetyNet.

---

## Browser support

- Google Chrome  
- Microsoft Edge  
- Brave, Vivaldi, and other Chromium‑based browsers  

Firefox is not supported yet.

---

## Disclaimer

- Lists are community‑style and may be incomplete or out of date.
- A green “trusted” label is **not a guarantee** of safety.
- Use this as an extra signal, not as your only security check.

---

## License / reuse

This project is shared mainly for **transparency and portfolio purposes**.

The code is **not licensed for reuse, modification, or redistribution**.  
If you want to build a similar tool, please treat this as a reference and write your own implementation.
