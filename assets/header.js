document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const hamburger = document.querySelector(".hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");

  if (!hamburger || !mobileMenu || !closeMenu) return;

  // Open mobile menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  // Close mobile menu
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // Optional: close menu if clicked outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
});



//mega menu code starts from here 
document.querySelectorAll(".links").forEach(link => {
  link.addEventListener("mouseenter", () => {
    const index = link.dataset.index;

    document.querySelectorAll(".overlay").forEach(overlay => {
      overlay.style.display = overlay.dataset.index === index ? "block" : "none";
    });
  });
});
document.querySelector(".overlay").addEventListener("mouseleave", () => {
  document.querySelectorAll(".overlay").forEach(o => o.style.display = "none");
});

