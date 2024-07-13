const emailInput = document.getElementById('emailInput');
const sumbitButton = document.getElementById('submitButton');
const emailForm = document.getElementById('emailForm');
const errorMessage = document.getElementById('errorMessage');

const userEmail = document.getElementById('userEmail');
const successCanvas = document.getElementById('successCanvas');
const formCanvas = document.getElementById('background');

console.log(emailInput + ' ' + sumbitButton)

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        sumbitButton.style.backgroundColor = 'hsl(4, 100%, 67%)';
    } else {
        sumbitButton.style.backgroundColor = 'hsl(234, 29%, 20%)';
    }
});

sumbitButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (emailInput.checkValidity()) {
        successCanvas.style.display = 'flex';
        formCanvas.style.display = 'none';

        userEmail.textContent = emailInput.value;
    } else {
        emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        emailInput.style.borderColor = 'rgba(255, 0, 0)';
        errorMessage.style.display = 'block';
        sumbitButton.style.backgroundColor = 'hsl(234, 29%, 20%)';
    }
});