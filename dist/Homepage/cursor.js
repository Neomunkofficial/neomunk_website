var crsr = document.querySelector("#cursor");

var delayX = 0, delayY = 0;  // Variables to hold the delayed positions
var offsetX = 5;  // Horizontal offset for the cursor
var offsetY = 5;  // Vertical offset for the cursor

document.addEventListener("mousemove", function(dets) {
    var mouseX = dets.x;
    var mouseY = dets.y;

    // Set the cursor to follow the mouse with a slight delay and offset
    delayX += (mouseX - delayX - offsetX) * 0.05; // Add delay and offset
    delayY += (mouseY - delayY - offsetY) * 0.05;

    crsr.style.left = delayX + "px";
    crsr.style.top = delayY + "px";
});
