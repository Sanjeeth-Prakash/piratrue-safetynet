## Why it’s not on the Chrome Web Store

Right now PiraTrue SafetyNet is **not** published on the Chrome Web Store because the developer registration requires a paid account, which I do not have yet.

You can still use the extension safely by loading it in **Developer mode**.  
This runs the exact same code locally, just without going through the Web Store.

## How to load the extension in your browser

Follow these steps in any Chromium‑based browser (Chrome, Edge, Brave, Vivaldi, etc.):

1. **Download the code**
   - Click the green **Code** button on this repo.
   - Choose **Download ZIP**.
   - Extract the ZIP to a folder on your computer (you should see `manifest.json` inside that folder).

2. **Open the extensions page**
   - In Chrome / Brave / Vivaldi: go to `chrome://extensions/`.
   - In Edge: go to `edge://extensions/`.

3. **Enable Developer mode**
   - Turn on the **Developer mode** toggle (usually in the top‑right corner).

4. **Load the unpacked extension**
   - Click **Load unpacked**.
   - Select the folder where you extracted the ZIP (the one containing `manifest.json`).

5. **Pin the extension**
   - Click the puzzle‑piece icon (Extensions) in the toolbar.
   - Pin **PiraTrue SafetyNet** so its icon is always visible.

6. **Test it**
   - Open any site (trusted / unsafe / unknown).
   - Click the PiraTrue icon to see the status for the current domain.
   - Try the **Settings / Options** page to add your own trusted or unsafe entries.

If you ever update this repo, you can:
- Pull the latest changes or download a new ZIP.
- Go back to `chrome://extensions` and click **Reload** on PiraTrue SafetyNet to pick up the new version.
