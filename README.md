# PiraTrue SafetyNet

PiraTrue SafetyNet is a browser extension that shows a quick **safety status** for piracy / repack / media sites using a curated trusted / unsafe list inspired by the r/Piracy megathread.

The goal is simple: when you open a site, the toolbar icon and popup immediately tell you whether the domain is **trusted**, **unsafe**, or **unknown**, without sending any browsing data to a server.

## How it works

- The extension keeps an internal list of:
  - **Trusted hosts** – known good domains from the r/Piracy Wiki and other commonly used safe services.
  - **Unsafe base names** – domains and clones that are commonly associated with scams, malware, impersonation, or low‑quality repacks.
- On each page load, it:
  - Extracts the domain from the current tab URL.
  - Classifies it as `trusted`, `unsafe`, or `unknown`.
  - Updates the toolbar icon color and popup UI.

All checks run **locally in your browser**.  
No network requests are made to validate a site, and no browsing history is uploaded anywhere.

## Status levels

- 🟢 **TRUSTED** – Domain is in the trusted list.
- 🔴 **UNTRUSTED** – Domain matches a known unsafe base name.
- 🟡 **UNKNOWN** – Domain is not in either list.

These labels are **not guarantees** of safety; they are just a convenience layer built on top of public community resources.

## Features

- Curated trusted / unsafe lists (seeded from the r/Piracy megathread)
- Simple popup showing:
  - Current domain
  - Status dot + label (`TRUSTED`, `UNTRUSTED`, `UNKNOWN`)
- Options page to:
  - Add custom trusted hosts
  - Add custom unsafe base names
  - Reset to defaults
- Lightweight and privacy‑respecting: runs fully offline

## Installation (developer / local)

1. Clone this repository:
   ```bash
   git clone https://github.com/Sanjeeth-Prakash/piratrue-safetynet.git
   cd piratrue-safetynet
   ```
2. Open `chrome://extensions` in Chrome (or any Chromium browser).
3. Enable **Developer mode** (top‑right).
4. Click **Load unpacked** and select the project folder.
5. Open any site and click the toolbar icon to see its status.

## Browser support

- Google Chrome (recommended)
- Microsoft Edge
- Brave, Vivaldi, and other Chromium‑based browsers

Firefox is not currently supported.

## Disclaimer

- This project is a personal / educational tool and may contain inaccuracies.
- The trusted / unsafe lists are **not** official, complete, or guaranteed.
- Always use your own judgment and good security practices.

## License / reuse

This code is published mainly for **transparency and portfolio purposes**.

It is **not licensed for reuse, modification, or redistribution**.  
If you want to build something similar, please treat this as inspiration and implement your own version.
