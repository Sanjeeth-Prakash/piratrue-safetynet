// ===== SAME TRUSTED / UNSAFE DATA AS background.js =====

const BASE_TRUSTED_HOSTS = new Set([
  // Everyday global trusted sites (general)
  "google.com",
  "www.google.com",
  "gmail.com",
  "www.gmail.com",
  "youtube.com",
  "www.youtube.com",
  "reddit.com",
  "www.reddit.com",
  "github.com",
  "www.github.com",
  "sanjeeth-prakash.github.io",   // <--- your PiraTrue site
  "github.io",                    // optional, for any other github.io pages
  "gitlab.com",
  "www.gitlab.com",
  "linkedin.com",
  "www.linkedin.com",
  "instagram.com",
  "www.instagram.com",
  "twitter.com",
  "www.twitter.com",
  "x.com",
  "www.x.com",
  "facebook.com",
  "www.facebook.com",
  "discord.com",
  "www.discord.com",
  "stackoverflow.com",
  "www.stackoverflow.com",
  "cloudflare.com",
  "www.cloudflare.com",

  // Messaging & communication
  "whatsapp.com",
  "www.whatsapp.com",
  "web.whatsapp.com",
  "telegram.org",
  "web.telegram.org",
  "t.me",
  "signal.org",
  "web.skype.com",
  "skype.com",
  "zoom.us",
  "meet.google.com",

  // AI tools & LLM sites
  "openai.com",
  "chat.openai.com",
  "platform.openai.com",
  "claude.ai",
  "perplexity.ai",
  "gemini.google.com",
  "bard.google.com",
  "copilot.microsoft.com",
  "huggingface.co",
  "poe.com",
  "character.ai",
  "cursor.sh",
  "replit.com",
  "notion.so",

  // Dev & infra tools
  "developer.chrome.com",
  "superuser.com",
  "serverfault.com",
  "npmjs.com",
  "pypi.org",
  "python.org",
  "nodejs.org",
  "docker.com",
  "hub.docker.com",
  "ubuntu.com",
  "debian.org",

  // Megathread trusted sites (paste your big list here, EXACTLY the same as in background.js)
  "123anime.info",
  "1337x-status.org",
  "1337x.to",
  // ... keep the rest of your big list here ...
  "zerofs.link"

]);

const BASE_UNSAFE_BASE_NAMES = new Set([
  "1377x",
  "kickasstorrents",
  "rargb",
  "thepiratebay",
  "therarbg",
  "torrentlite",
  "animixplay",
  "zoro",
  "soap2day",
  "vegamovies",
  "zlibrary",
  "coolrom",
  "aimhaven",
  "apunkagames",
  "blackboxrepacke",
  "crohasit",
  "crotorrents",
  "descargagame",
  "elamigos",
  "empresstorrents",
  "gamepciso",
  "game3rb",
  "gamefabrique",
  "gamestorrents",
  "gogunlocked",
  "igg",
  "nexus",
  "nosteamgames",
  "oceansofgamess",
  "qoob",
  "steam",
  "wifi4games",
  "allpcworld",
  "appvalley",
  "crackedfully",
  "crackshash",
  "ftuapps",
  "getintopc",
  "haxnode",
  "haxpc",
  "karanpc",
  "kolompc",
  "portable4pc",
  "s0ft4pc",
  "sadeempc",
  "sampledrive",
  "tutubox",
  "vfxdownload",
  "vfxdownloads",
  "yasdl",
  "watchsomuch",
  "yts"
]);

let trustedHosts = new Set(BASE_TRUSTED_HOSTS);
let unsafeBaseNames = new Set(BASE_UNSAFE_BASE_NAMES);

// ===== SAME HELPERS AS background.js =====

function normalizeHost(hostname) {
  return hostname.toLowerCase().replace(/^www\./, "");
}

function getBaseLabel(hostname) {
  const h = normalizeHost(hostname);
  const parts = h.split(".");
  if (parts.length < 2) return h;
  return parts[parts.length - 2];
}

function classifyDomain(hostname) {
  const normalized = normalizeHost(hostname);
  const base = getBaseLabel(hostname);

  if (trustedHosts.has(hostname) || trustedHosts.has(normalized)) {
    return "safe";
  }
  if (unsafeBaseNames.has(base)) {
    return "unsafe";
  }
  return "unknown";
}

function extractDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname;
  } catch (e) {
    return "unknown";
  }
}

// ===== LOAD CUSTOM LISTS INTO POPUP TOO =====

function refreshListsFromStorage(callback) {
  trustedHosts = new Set(BASE_TRUSTED_HOSTS);
  unsafeBaseNames = new Set(BASE_UNSAFE_BASE_NAMES);

  chrome.storage.sync.get(["trustedCustom", "unsafeCustom"], (data) => {
    if (Array.isArray(data.trustedCustom)) {
      data.trustedCustom.forEach((host) => {
        if (typeof host === "string" && host.length > 0) {
          trustedHosts.add(host.toLowerCase());
        }
      });
    }

    if (Array.isArray(data.unsafeCustom)) {
      data.unsafeCustom.forEach((base) => {
        if (typeof base === "string" && base.length > 0) {
          unsafeBaseNames.add(base.toLowerCase());
        }
      });
    }

    if (callback) callback();
  });
}

// ===== UI WIRING =====

function setStatusUI(status) {
  const dot = document.getElementById("status-dot");
  const label = document.getElementById("status-label");

  dot.className = "status-dot " + status;
  label.className = "status-label " + status;

  if (status === "safe") {
    label.textContent = "STATUS · TRUSTED";
  } else if (status === "unsafe") {
    label.textContent = "STATUS · UNTRUSTED";
  } else {
    label.textContent = "STATUS · UNKNOWN";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const settingsLink = document.getElementById("open-settings");
  if (settingsLink) {
    settingsLink.addEventListener("click", (e) => {
      e.preventDefault();
      chrome.runtime.openOptionsPage();
    });
  }

  refreshListsFromStorage(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const domainEl = document.getElementById("domain");

      if (!tab || !tab.url) {
        domainEl.textContent = "unknown";
        setStatusUI("unknown");
        return;
      }

      const domain = extractDomain(tab.url);
      domainEl.textContent = domain;

      const status = classifyDomain(domain);
      setStatusUI(status);
    });
  });
});