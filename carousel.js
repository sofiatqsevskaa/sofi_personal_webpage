function moveCarouselItems() {
    const projectList = document.getElementById("project-list");
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");

    if (window.innerWidth <= 768) {
        // Remove previously added items (without GitHub links)
        document.querySelectorAll(".project-item").forEach(item => {
            if (!item.querySelector("a")) {
                item.remove();
            }
        });

        slides.forEach(slide => {
            const text = slide.querySelector(".experience-text")?.textContent.trim();
            if (text) {
                const projectItem = document.createElement("div");
                projectItem.classList.add("project-item");

                const span = document.createElement("span");
                span.textContent = text;

                projectItem.appendChild(span);
                projectList.appendChild(projectItem);
            }
        });

        carousel.style.display = "none"; 
    } else {
        carousel.style.display = "flex"; 
        document.querySelectorAll(".project-item").forEach(item => {
            if (!item.querySelector("a")) {
                item.remove();
            }
        });
    }
}

window.addEventListener("resize", moveCarouselItems);
window.addEventListener("load", moveCarouselItems);