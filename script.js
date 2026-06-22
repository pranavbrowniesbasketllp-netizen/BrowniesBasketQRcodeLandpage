// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// =========================
// MOBILE MENU
// =========================

const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =========================
// SMOOTH SCROLL
// =========================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        if (navLinks) {
          navLinks.classList.remove("active");
        }
      }
    });
  });

// =========================
// SCROLL REVEAL
// =========================

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });

    },

    {
      threshold: 0.15
    }

  );

document
  .querySelectorAll(
    ".feature-card, .glass-card, .social-card, .gallery-grid img"
  )
  .forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

  });

// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current =
        section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active");
    }

  });

});

// =========================
// GALLERY LIGHTBOX
// =========================

const images =
  document.querySelectorAll(
    ".gallery-grid img"
  );

const lightbox =
  document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
  <span class="close-lightbox">&times;</span>
  <img class="lightbox-image" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImage =
  lightbox.querySelector(
    ".lightbox-image"
  );

const closeBtn =
  lightbox.querySelector(
    ".close-lightbox"
  );

images.forEach(img => {

  img.addEventListener("click", () => {

    lightboxImage.src = img.src;

    lightbox.classList.add("active");

    document.body.style.overflow =
      "hidden";

  });

});

closeBtn.addEventListener("click", () => {

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

});

lightbox.addEventListener("click", e => {

  if (e.target === lightbox) {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

  }

});

// =========================
// ESC KEY CLOSE LIGHTBOX
// =========================

document.addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape" &&
      lightbox.classList.contains("active")
    ) {

      lightbox.classList.remove("active");

      document.body.style.overflow = "";

    }

  }
);

// =========================
// NAVBAR EFFECT
// =========================

window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.backdropFilter =
      "blur(25px)";

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.08)";

  } else {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.06)";

  }

});

// =========================
// HERO PARALLAX
// =========================

const heroVideo =
  document.querySelector(
    ".hero-video"
  );

if (heroVideo) {

  window.addEventListener(
    "mousemove",
    e => {

      const x =
        (window.innerWidth / 2 -
          e.clientX) / 120;

      const y =
        (window.innerHeight / 2 -
          e.clientY) / 120;

      heroVideo.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    }
  );

}

// =========================
// CARD GLOW EFFECT
// =========================

document
  .querySelectorAll(
    ".feature-card, .social-card, .glass-card"
  )
  .forEach(card => {

    card.addEventListener(
      "mousemove",
      e => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        card.style.background = `
          radial-gradient(
            circle at ${x}px ${y}px,
            rgba(244,194,107,.35),
            rgba(255,255,255,.90) 35%
          )
        `;

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        if (
          card.classList.contains(
            "glass-card"
          )
        ) {

          card.style.background =
            "rgba(255,255,255,.75)";

        } else {

          card.style.background =
            "#ffffff";

        }

      }
    );

  });

// =========================
// FLOATING WHATSAPP PULSE
// =========================

const whatsapp =
  document.querySelector(
    ".floating-whatsapp"
  );

if (whatsapp) {

  setInterval(() => {

    whatsapp.animate(
      [
        {
          transform: "scale(1)"
        },
        {
          transform: "scale(1.08)"
        },
        {
          transform: "scale(1)"
        }
      ],
      {
        duration: 1200
      }
    );

  }, 5000);

}
