function parseLines(text) {
  return text
    .split("\n")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 0);
}

function showStatus(message) {
  const statusEl = document.getElementById("status");
  statusEl.textContent = message;
  setTimeout(() => {
    statusEl.textContent = "";
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const trustedEl = document.getElementById("trusted-custom");
  const unsafeEl = document.getElementById("unsafe-custom");
  const saveBtn = document.getElementById("save-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Load existing settings
  chrome.storage.sync.get(["trustedCustom", "unsafeCustom"], (data) => {
    if (Array.isArray(data.trustedCustom)) {
      trustedEl.value = data.trustedCustom.join("\n");
    }
    if (Array.isArray(data.unsafeCustom)) {
      unsafeEl.value = data.unsafeCustom.join("\n");
    }
  });

  saveBtn.addEventListener("click", () => {
    const trustedList = parseLines(trustedEl.value);
    const unsafeList = parseLines(unsafeEl.value);

    chrome.storage.sync.set(
      {
        trustedCustom: trustedList,
        unsafeCustom: unsafeList
      },
      () => {
        showStatus("Settings saved.");
      }
    );
  });

  resetBtn.addEventListener("click", () => {
    chrome.storage.sync.remove(["trustedCustom", "unsafeCustom"], () => {
      trustedEl.value = "";
      unsafeEl.value = "";
      showStatus("Reset to defaults.");
    });
  });
});