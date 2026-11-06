// HARELINE STUDIO — Custom Cursor

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    // Update cursor colour based on the section underneath it
    function updateCursorColour(element) {

        const section = element.closest(
            ".section-pink, .section-cream, .hero, .navbar, .footer"
        );

        if (!section) return;

        let cursorColour = "#FFFFFF";

        if (section.classList.contains("section-cream")) {
            cursorColour = "#3D3B30";
        }

        else if (section.classList.contains("footer")) {
            cursorColour = "#C62371";
        }

        cursor.style.setProperty("--cursor-colour", cursorColour);
    }


    // Track mouse movement
    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        cursor.classList.add("visible");

        updateCursorColour(event.target);
    });


    // Switch to triangle over interactive elements
    document.addEventListener("mouseover", (event) => {

        const interactive = event.target.closest(
            "a, button, summary, input, select, textarea, label, [role='button']"
        );

        cursor.classList.toggle("interactive", Boolean(interactive));

        updateCursorColour(event.target);
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