/* =========================================================
   ZIKTECH PORTFOLIO JAVASCRIPT
========================================================= */

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const mobileNav = document.getElementById("mobileNav");

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");

    const icon = mobileMenuBtn.querySelector("i");

    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("bi-list");

      icon.classList.add("bi-x");

      mobileMenuBtn.setAttribute("aria-label", "Close navigation");
    } else {
      icon.classList.remove("bi-x");

      icon.classList.add("bi-list");

      mobileMenuBtn.setAttribute("aria-label", "Open navigation");
    }
  });
}

/* =========================================================
   CLOSE MOBILE MENU WHEN A LINK IS CLICKED
========================================================= */

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (mobileNav) {
      mobileNav.classList.remove("active");
    }

    if (mobileMenuBtn) {
      const icon = mobileMenuBtn.querySelector("i");

      if (icon) {
        icon.classList.remove("bi-x");

        icon.classList.add("bi-list");
      }

      mobileMenuBtn.setAttribute("aria-label", "Open navigation");
    }
  });
});

/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {
  if (!mobileNav || !mobileMenuBtn) {
    return;
  }

  const clickedInsideMenu = mobileNav.contains(event.target);

  const clickedMenuButton = mobileMenuBtn.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    mobileNav.classList.remove("active");

    const icon = mobileMenuBtn.querySelector("i");

    if (icon) {
      icon.classList.remove("bi-x");

      icon.classList.add("bi-list");
    }

    mobileMenuBtn.setAttribute("aria-label", "Open navigation");
  }
});

/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (!navbar) {
    return;
  }

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

/* =========================================================
   FORM SUBMISSION FEEDBACK
========================================================= */

const contactForm = document.querySelector(".contact-form-card form");

if (contactForm) {
  contactForm.addEventListener("submit", function () {
    const submitButton = contactForm.querySelector(".submit-btn");

    if (!submitButton) {
      return;
    }

    submitButton.disabled = true;

    submitButton.innerHTML = `
                Sending Request
                <i class="bi bi-arrow-repeat"></i>
            `;
  });
}

/* =========================================================
   PHONE NUMBER CLEANING
========================================================= */

const phoneInput = document.getElementById("phone");

if (phoneInput) {
  phoneInput.addEventListener("input", function () {
    /*
                Allow:

                08012345678

                +2348012345678

                080 1234 5678

                We don't force a particular format.
            */

    this.value = this.value.replace(/[^\d+\s()-]/g, "");
  });
}

/* =========================================================
   TEXTAREA CHARACTER FEEDBACK
========================================================= */

const messageInput = document.getElementById("message");

if (messageInput) {
  const maxCharacters = 1500;

  messageInput.setAttribute("maxlength", maxCharacters);

  const characterCounter = document.createElement("small");

  characterCounter.className = "character-counter";

  characterCounter.style.display = "block";

  characterCounter.style.marginTop = "6px";

  characterCounter.style.textAlign = "right";

  characterCounter.style.color = "#999";

  characterCounter.style.fontSize = "9px";

  characterCounter.textContent = `0 / ${maxCharacters}`;

  messageInput.parentElement.appendChild(characterCounter);

  messageInput.addEventListener("input", function () {
    characterCounter.textContent = `${this.value.length} / ${maxCharacters}`;
  });
}

/* =========================================================
   SMOOTH SCROLL FALLBACK
========================================================= */

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* =========================================================
   PREVENT EMPTY FORM SUBMISSION
========================================================= */

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name");

    const phone = document.getElementById("phone");

    const email = document.getElementById("email");

    const service = document.getElementById("service");

    const message = document.getElementById("message");

    if (!name || !phone || !email || !service || !message) {
      return;
    }

    const nameValue = name.value.trim();

    const phoneValue = phone.value.trim();

    const emailValue = email.value.trim();

    const serviceValue = service.value.trim();

    const messageValue = message.value.trim();

    if (
      nameValue === "" ||
      phoneValue === "" ||
      emailValue === "" ||
      serviceValue === "" ||
      messageValue === ""
    ) {
      event.preventDefault();

      alert("Please complete all required fields before submitting.");

      return;
    }

    if (messageValue.length < 10) {
      event.preventDefault();

      alert("Please provide a little more information about your project.");

      return;
    }
  });
}

/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log("%cZIKTECH", "color:#e01822;font-size:28px;font-weight:900;");

console.log(
  "%cBuild. Innovate. Elevate.",
  "color:#ffffff;font-size:13px;font-weight:700;",
);

console.log(
  "%cPortfolio loaded successfully.",
  "color:#92969d;font-size:11px;",
);
