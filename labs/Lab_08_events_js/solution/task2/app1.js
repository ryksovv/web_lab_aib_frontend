function changeColor() {
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const redError = document.getElementById("redError");
    const greenError = document.getElementById("greenError");
    const blueError = document.getElementById("blueError");

    const isValid = (value) => !isNaN(value) && value >= 0 && value <= 255;

    if (isValid(redInput.value)) {
        redError.textContent = "";
    } else {
        redError.textContent = "Invalid value (0-255)";
        return;
    }

    if (isValid(greenInput.value)) {
        greenError.textContent = "";
    } else {
        greenError.textContent = "Invalid value (0-255)";
        return;
    }

    if (isValid(blueInput.value)) {
        blueError.textContent = "";
    } else {
        blueError.textContent = "Invalid value (0-255)";
        return;
    }

    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;

    const colorSquare = document.getElementById("colorSquare");
    colorSquare.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}