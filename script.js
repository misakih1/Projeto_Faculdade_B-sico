document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("mouseover", () => {
        section.style.transform = "scale(1.02)";
        section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
    });

    section.addEventListener("mouseout", () => {
        section.style.transform = "scale(1)";
        section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
});

document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute("href").slice(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: "smooth",
            });
        }
    });
});

const backToTopButton = document.createElement("button");
backToTopButton.textContent = "⬆ Topo";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px";
backToTopButton.style.backgroundColor = "blue";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
