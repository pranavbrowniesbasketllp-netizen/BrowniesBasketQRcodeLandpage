// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document
  .querySelectorAll(
    ".feature-card, .glass-card, .social-card, .gallery-grid img"
  )
  .forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

// =========================
// GALLERY LIGHTBOX
// =========================

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
  <span class="close-lightbox">&times;</span>
  <img class="lightbox-image" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeBtn = lightbox.querySelector(".close-lightbox");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.backdropFilter = "blur(25px)";
    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.08)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// =========================
// FLOATING HERO VIDEO
// =========================

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  window.addEventListener("mousemove", (e) => {
    const x =
      (window.innerWidth / 2 - e.clientX) / 50;

    const y =
      (window.innerHeight / 2 - e.clientY) / 50;

    heroVideo.style.transform =
      `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}

// =========================
// SMOOTH CARD GLOW
// =========================

document
  .querySelectorAll(
    ".feature-card, .social-card, .glass-card"
  )
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `
      radial-gradient(
      circle at ${x}px ${y}px,
      rgba(244,194,107,.35),
      rgba(255,255,255,.85) 35%
      )`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background =
        "rgba(255,255,255,.75)";
    });
  });

// =========================
// HERO FADE IN
// =========================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
