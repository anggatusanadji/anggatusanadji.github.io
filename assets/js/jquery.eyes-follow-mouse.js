//Eyes
const retina = $(".eye-retina");
const button = $(".eyes");

const maxMovement = 20; // Maksimal pergerakan retina dari tepi dalam persen

$(document).mousemove((e) => {
    e = e || window.event;

    // Offset of button from document
    const rect = button[0].getBoundingClientRect();
    const offsetLeft = rect.left + window.pageXOffset;
    const offsetTop = rect.top + window.pageYOffset;

    // Position of cursor in pixel
    const pageX = e.pageX;
    const pageY = e.pageY;

    // Cursor left position relative to button
    let left = (pageX - offsetLeft) / rect.width * 100;

    // Cursor top position relative to button
    let top = (pageY - offsetTop) / rect.height * 100;

    // Calculate the distance from the center of the eye
    const distance = Math.sqrt((left - 50) ** 2 + (top - 50) ** 2);

    // Limit the eye movement to a certain range from the center
    if (distance > maxMovement) {
        // Calculate the angle from the center to the cursor
        const angle = Math.atan2(top - 50, left - 50);

        // Set the new position within the maximum range
        left = 50 + Math.cos(angle) * maxMovement;
        top = 50 + Math.sin(angle) * maxMovement;
    }
    

    // Move the eye directly without animation
    retina.each((i, f) => {
        f.style.left = `${left > 45 && left < 55 ? 50 : left}%`;
        f.style.top = `${top > 45 && top < 55 ? 50 : top}%`;
    });
});
