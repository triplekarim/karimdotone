// Springs `[data-reveal]` elements into view the first time they scroll in.
// Children of `[data-reveal-stagger]` get an increasing delay.
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
    [...group.querySelectorAll(":scope > [data-reveal]")].forEach((child, i) => {
      child.style.setProperty("--reveal-i", String(i));
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );

  els.forEach((el) => io.observe(el));
}

// View transitions: an element morphing in from the previous page (e.g. a post title shrinking
// back into its card) must be visible when the new page is captured, so skip its reveal.
const viewNames = (root) =>
  new Set(
    [...root.querySelectorAll("[data-astro-transition-scope]")]
      .map((el) => getComputedStyle(el).viewTransitionName)
      .filter((n) => n && n !== "none"),
  );

let outgoing = new Set();
document.addEventListener("astro:before-swap", () => {
  outgoing = viewNames(document);
});
document.addEventListener("astro:after-swap", () => {
  if (!outgoing.size) return;
  for (const el of document.querySelectorAll("[data-reveal]:not(.is-visible)")) {
    const named = [...el.querySelectorAll("[data-astro-transition-scope]")];
    if (named.some((n) => outgoing.has(getComputedStyle(n).viewTransitionName))) {
      el.classList.add("is-visible", "is-shown");
    }
  }
  outgoing = new Set();
});

initReveal();
document.addEventListener("astro:page-load", initReveal);
