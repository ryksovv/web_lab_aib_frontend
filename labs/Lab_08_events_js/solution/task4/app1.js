document.addEventListener("DOMContentLoaded", function () {
    const colorContainer = document.querySelector(".inner-line");
    const colorSquare = document.getElementById("colorSquare");

    colorContainer.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("clrBlck")) {
            const backgroundColor = target.style.backgroundColor;
            localStorage.setItem("selectedColor", backgroundColor);
        }
    });

    document.body.addEventListener("click", function (event) {
        const target = event.target;

        if (
            !target.classList.contains("clrBlck") &&
            !target.classList.contains("genBttn") &&
            target !== colorSquare
        ) {
            const selectedColor = localStorage.getItem("selectedColor");


            if (selectedColor) {
                target.style.backgroundColor = selectedColor;
            }
        }
    });

    window.addEventListener("beforeunload", function () {
        localStorage.clear();
    });
});

function generateBlock() {
    const line = document.querySelector(".inner-line");
    const colorSquare = document.getElementById("colorSquare");

    const newClrBlck = document.createElement("div");
    newClrBlck.classList.add("clrBlck");
    newClrBlck.style.backgroundColor = colorSquare.style.backgroundColor;
    line.prepend(newClrBlck);

    if (line.children.length > 15) {
        line.lastElementChild.remove();
    }
}

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
