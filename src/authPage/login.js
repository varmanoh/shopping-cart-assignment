(function () {
    function toggleClass() {
        let labelElement = this.previousElementSibling;
        if (labelElement.style.display === "block") {
            labelElement.style.display = "none";
        } else {
            labelElement.style.display = "block";
        }
    }
    
    const inputs = document.querySelectorAll('input');
    
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
    
        input.addEventListener('focusin', toggleClass);
        input.addEventListener('focusout', toggleClass);
    }

    localStorage.clear()
})();

