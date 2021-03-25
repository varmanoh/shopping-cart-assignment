function toggleClass() {
    let x = this.previousElementSibling;
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener('focusin', toggleClass);
    input.addEventListener('focusout', toggleClass);
}