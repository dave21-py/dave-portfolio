document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // --- REFINED ANIMATIONS for iOS/MacOS feel ---

  // Header Animations
  gsap.from("header h1, header nav ul li", {
    duration: 0.8,
    y: -20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  });

  // Sidebar Animations
  gsap.from(
    ".sidebar .name-highlight, .sidebar h2, .sidebar .subtitle, .sidebar .contact-links li",
    {
      duration: 0.6,
      x: -20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.2,
      ease: "power3.out",
    },
  );

  // Main Content Intro Animations
  gsap.from(".intro-text h2, .intro-text p", {
    duration: 0.8,
    x: 20,
    opacity: 0,
    stagger: 0.15,
    delay: 0.4,
    ease: "power3.out",
  });

  // Refined image animation (removed elastic bounce)
  gsap.from(".image-placeholder", {
    duration: 1.0,
    scale: 0.9,
    opacity: 0,
    delay: 0.6,
    ease: "power3.out",
  });

  // Scroll-triggered animations for sections
  gsap.utils
    .toArray(".content h3, .content h4, .content p, .publication-entry")
    .forEach((elem) => {
      if (!elem.closest(".intro-text")) {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%", // Start animation sooner
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 20, // More subtle slide
          duration: 0.8, // Faster animation
          ease: "power3.out",
        });
      }
    });
});
