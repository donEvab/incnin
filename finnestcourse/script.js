function showContactPopup() {
  const popup = document.getElementById("popupContact");
  popup.classList.remove("hidden");
  popup.classList.add("show");
}

function hideContactPopup() {
  const popup = document.getElementById("popupContact");
  popup.classList.add("animate-out");
  setTimeout(() => {
    popup.classList.remove("show", "animate-out");
    popup.classList.add("hidden");
  }, 400);
}

function openExternal(url) {
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  });

  document.querySelectorAll(".animate-fade, .animate-slide").forEach((el) => {
    observer.observe(el);
  });
});
