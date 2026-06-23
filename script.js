// ===================================
// PAGE LOAD ANIMATION
// ===================================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ===================================
// MOBILE MENU
// ===================================

const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");

if (menuToggle) {

  menuToggle.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle("active");

    }
  );

}

// ===================================
// SMOOTH SCROLL
// ===================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener(
      "click",
      function (e) {

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
            navLinks.classList.remove(
              "active"
            );
          }

        }

      }
    );

  });

// ===================================
// SCROLL REVEAL
// ===================================

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "show"
          );

        }

      });

    },

    {
      threshold: 0.15
    }

  );

document
  .querySelectorAll(
    ".product-card, .feature-card, .stat-card, .showcase-item, .gallery-grid img, .cta-card"
  )
  .forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

  });

// ===================================
// ACTIVE NAVIGATION
// ===================================

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 180;

      if (
        window.scrollY >= sectionTop
      ) {

        current =
          section.getAttribute("id");

      }

    });

    navItems.forEach(link => {

      link.classList.remove(
        "active"
      );

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  }
);

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

window.addEventListener(
  "scroll",
  () => {

    const navbar =
      document.querySelector(
        ".nav-container"
      );

    if (!navbar) return;

    if (window.scrollY > 50) {

      navbar.style.backdropFilter =
        "blur(25px)";

      navbar.style.boxShadow =
        "0 15px 40px rgba(0,0,0,.10)";

    } else {

      navbar.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.08)";

    }

  }
);

// ===================================
// HERO PARALLAX VIDEO
// ===================================

const heroMedia =
  document.querySelector(
    ".hero-media"
  );

if (heroMedia) {

  window.addEventListener(
    "mousemove",
    e => {

      const x =
        (window.innerWidth / 2 -
          e.clientX) / 120;

      const y =
        (window.innerHeight / 2 -
          e.clientY) / 120;

      heroMedia.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    }
  );

}

// ===================================
// PRODUCT CARD GLOW
// ===================================

document
  .querySelectorAll(
    ".product-card, .feature-card, .stat-card"
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

        card.style.background =
          `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(244,194,107,.25),
            rgba(255,255,255,1) 45%
          )`;

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.background =
          "#ffffff";

      }
    );

  });

// ===================================
// GALLERY LIGHTBOX
// ===================================

const galleryImages =
  document.querySelectorAll(
    ".gallery-grid img"
  );

if (galleryImages.length > 0) {

  const lightbox =
    document.createElement("div");

  lightbox.className =
    "lightbox";

  lightbox.innerHTML = `
    <span class="close-lightbox">&times;</span>
    <img class="lightbox-image" src="" alt="">
  `;

  document.body.appendChild(
    lightbox
  );

  const lightboxImage =
    lightbox.querySelector(
      ".lightbox-image"
    );

  const closeBtn =
    lightbox.querySelector(
      ".close-lightbox"
    );

  galleryImages.forEach(img => {

    img.addEventListener(
      "click",
      () => {

        lightboxImage.src =
          img.src;

        lightbox.classList.add(
          "active"
        );

        document.body.style.overflow =
          "hidden";

      }
    );

  });

  closeBtn.addEventListener(
    "click",
    () => {

      lightbox.classList.remove(
        "active"
      );

      document.body.style.overflow =
        "";

    }
  );

  lightbox.addEventListener(
    "click",
    e => {

      if (
        e.target === lightbox
      ) {

        lightbox.classList.remove(
          "active"
        );

        document.body.style.overflow =
          "";

      }

    }
  );

  document.addEventListener(
    "keydown",
    e => {

      if (
        e.key === "Escape"
      ) {

        lightbox.classList.remove(
          "active"
        );

        document.body.style.overflow =
          "";

      }

    }
  );

}

// ===================================
// COUNTER ANIMATION
// ===================================

const counters =
  document.querySelectorAll(
    ".counter"
  );

const counterObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          const counter =
            entry.target;

          const target =
            parseInt(
              counter.dataset.target
            );

          let count = 0;

          const speed =
            target / 80;

          const update = () => {

            count += speed;

            if (
              count < target
            ) {

              counter.innerText =
                Math.floor(count);

              requestAnimationFrame(
                update
              );

            } else {

              if (
                target === 5000
              ) {

                counter.innerText =
                  "5000+";

              } else if (
                target === 100
              ) {

                counter.innerText =
                  "100+";

              } else {

                counter.innerText =
                  target;

              }

            }

          };

          update();

          counterObserver.unobserve(
            counter
          );

        }

      });

    },

    {
      threshold: 0.5
    }

  );

counters.forEach(counter => {

  counterObserver.observe(
    counter
  );

});

// ===================================
// AUTO HIDE MOBILE MENU
// ===================================

document.addEventListener(
  "click",
  e => {

    if (
      navLinks &&
      navLinks.classList.contains(
        "active"
      )
    ) {

      if (
        !navLinks.contains(
          e.target
        ) &&
        !menuToggle.contains(
          e.target
        )
      ) {

        navLinks.classList.remove(
          "active"
        );

      }

    }

  }
);

// ===================================
// WHATSAPP FLOATING BUTTON
// ===================================

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
          transform: "scale(1.12)"
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
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
