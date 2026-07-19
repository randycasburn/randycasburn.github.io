const platforms = new Set(["apple", "android"]);
const defaultPlatform = "apple";

function getRequestedPlatform() {
  const params = new URLSearchParams(window.location.search);
  const queryPlatform = params.get("platform");
  const appPlatform = params.get("app");
  const savedPlatform = window.localStorage.getItem("iwind-platform");

  if (platforms.has(queryPlatform)) {
    return queryPlatform;
  }

  if (platforms.has(appPlatform)) {
    return appPlatform;
  }

  if (platforms.has(savedPlatform)) {
    return savedPlatform;
  }

  return defaultPlatform;
}

function setPlatform(platform) {
  if (!platforms.has(platform)) {
    return;
  }

  document.body.dataset.platform = platform;
  window.localStorage.setItem("iwind-platform", platform);

  document.querySelectorAll("[data-platform-option]").forEach((button) => {
    const isSelected = button.dataset.platformOption === platform;
    button.setAttribute("aria-pressed", String(isSelected));
  });

  document.querySelectorAll("[data-platform-src-apple]").forEach((image) => {
    const src = image.dataset[`platformSrc${capitalize(platform)}`];
    const alt = image.dataset[`platformAlt${capitalize(platform)}`];

    if (src) {
      image.src = src;
    }

    if (alt) {
      image.alt = alt;
    }
  });

  document.querySelectorAll("[data-platform-text-apple]").forEach((element) => {
    const text = element.dataset[`platformText${capitalize(platform)}`];

    if (text) {
      element.textContent = text;
    }
  });

  document.querySelectorAll("[data-platform-href-apple]").forEach((link) => {
    const href = link.dataset[`platformHref${capitalize(platform)}`];

    if (href) {
      link.href = href;
    }
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function bindPlatformSwitcher() {
  document.querySelectorAll("[data-platform-option]").forEach((button) => {
    button.addEventListener("click", () => {
      setPlatform(button.dataset.platformOption);
    });
  });
}

function bindStorePopover() {
  const button = document.querySelector(".play-store-badge");
  const popover = document.getElementById("android-approval-popover");

  if (!button || !popover) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    popover.hidden = isOpen;
  });

  document.addEventListener("click", (event) => {
    if (popover.hidden || button.contains(event.target) || popover.contains(event.target)) {
      return;
    }

    button.setAttribute("aria-expanded", "false");
    popover.hidden = true;
  });
}

bindPlatformSwitcher();
bindStorePopover();
setPlatform(getRequestedPlatform());
