// HARELINE STUDIO — Custom Cursor

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Only activate on devices with a mouse or trackpad
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        cursor.classList.add("visible");

        updateCursorColour(event.target);
    });

    // Change cursor colour depending on the section
    function updateCursorColour(element) {

        const section = element.closest(
            ".section-pink, .section-cream, .hero, .navbar, .footer"
        );

        if (!section) return;

        if (
            section.classList.contains("section-pink") ||
            section.classList.contains("hero") ||
            section.classList.contains("navbar")
        ) {
            cursor.style.borderColor = "#FFFFFF";
        }

        else if (section.classList.contains("section-cream")) {
            cursor.style.borderColor = "#3D3B30";
        }

        else if (section.classList.contains("footer")) {
            cursor.style.borderColor = "#C62371";
        }
    }

    // Hide custom cursor over interactive elements
    document.addEventListener("mouseover", (event) => {

        if (event.target.closest("a, button, summary")) {
            cursor.classList.add("hidden");
        } else {
            cursor.classList.remove("hidden");
        }

    });

    // Hide cursor when leaving the page
    document.addEventListener("mouseleave", () => {
        cursor.classList.remove("visible");
    });

    document.addEventListener("mouseenter", () => {
        cursor.classList.add("visible");
    });

} else {
    cursor.remove();
}