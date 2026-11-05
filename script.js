// HARELINE STUDIO — Custom Cursor

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Only activate on devices with a mouse or trackpad
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    // Update cursor position
    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

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

    // Change circle into triangle while clicking
    document.addEventListener("mousedown", () => {
        cursor.classList.add("clicked");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("clicked");
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