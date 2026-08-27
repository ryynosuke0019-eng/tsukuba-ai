(function () {
    const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            instance.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-up").forEach((element) => observer.observe(element));

    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            nav.style.boxShadow = window.scrollY > 50
                ? "0 2px 20px rgba(0,0,0,0.08)"
                : "none";
        });
    }

    document.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
            const item = button.parentElement;
            if (!item) return;
            const wasOpen = item.classList.contains("open");
            document.querySelectorAll(".faq-item").forEach((entry) => entry.classList.remove("open"));
            if (!wasOpen) item.classList.add("open");
        });
    });
})();
