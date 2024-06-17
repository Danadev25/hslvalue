document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector(".btn");
    const thec = document.querySelector(".thecolor");
    const briSpan = document.getElementById("brivalue");
    const staSpan = document.getElementById("satvalue");
    const hueSpan = document.getElementById("huevalue");
   const colors = document.querySelector(".colors");
    const briInput = document.querySelector(".brivalue");
    const staInput = document.querySelector(".satvalue");
    const hueInput = document.querySelector(".huevalue");

    briInput.addEventListener('input', updateColor);
    staInput.addEventListener('input', updateColor);
    hueInput.addEventListener('input', updateColor);

    function updateColor() {
        const hueValue = hueInput.value;
        const satValue = staInput.value;
        const briValue = briInput.value;

        colors.style.backgroundColor = `hsl(${hueValue}, ${satValue}%, ${briValue}%)`;
        thec.textContent = `hsl(${hueValue}%, ${satValue}%, ${briValue}%)`;
        briSpan.textContent = `${briValue}%`;
        staSpan.textContent = `${satValue}%`;
        hueSpan.textContent = `${hueValue}%`;
    }

    // Optional: Copy to clipboard functionality
    button.addEventListener('click', () => {
        const hslColor = thec.style.backgroundColor;
        navigator.clipboard.writeText(hslColor).then(() => {
            alert('HSL color copied to clipboard: ' + hslColor);
        });
    });
});
