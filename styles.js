document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add animation class when in view
        } else {
          entry.target.classList.remove("show"); // Remove when out of view
        }
      });
    }, { threshold: 0.2 }); // Adjust threshold for better control
  
    // Observe all elements with the 'hidden' class
    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
  });
  