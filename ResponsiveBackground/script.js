// Flip the card between profile and contact — vanilla JS, no libraries
const card = document.getElementById("flipCard");

document.querySelectorAll("[data-flip]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");

    // Update aria-hidden for both faces based on the state (matters for screen readers)
    const front = card.querySelector(".side--front");
    const back = card.querySelector(".side--back");
    front.setAttribute("aria-hidden", flipped ? "true" : "false");
    back.setAttribute("aria-hidden", flipped ? "false" : "true");
  });
});

// Copy the email on click instead of opening a link
document.querySelectorAll(".copy").forEach((el) => {
  el.addEventListener("click", async () => {
    const value = el.dataset.copy;
    const hint = el.querySelector(".copy__hint");

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback for browsers that don't support the Clipboard API
      const t = document.createElement("textarea");
      t.value = value;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }

    el.classList.add("is-copied");
    if (hint) hint.textContent = "Copied ✓";
    setTimeout(() => {
      el.classList.remove("is-copied");
      if (hint) hint.textContent = "click to copy";
    }, 1500);
  });
});