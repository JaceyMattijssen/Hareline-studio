// HARELINE STUDIO — Custom Cursor

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    // Track mouse movement
    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        cursor.classList.add("visible");

        updateCursorColour(event.target);
    });

    // Change cursor colour depending on background
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

    // Switch to triangle over interactive elements
    document.addEventListener("mouseover", (event) => {

        const interactive = event.target.closest(
            "a, button, summary, input, select, textarea, label, [role='button']"
        );

        cursor.classList.toggle("interactive", !!interactive);

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