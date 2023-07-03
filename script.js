const selectedForm = document.querySelector('.registration');
const selectedButton = document.querySelector('.options-box button');
const selectedFields = document.querySelectorAll('.field input');
const selectedPassword = document.getElementById('password');
const selectedPasswordConfirmation = document.getElementById('password-check');

selectedFields.forEach((field) => {
    field.addEventListener('focusout', function(e) {
        e.preventDefault();
        if (field.checkValidity()) {
            field.classList.add('valid');
            field.classList.remove('invalid');
        } else {
            field.classList.add('invalid');
            field.classList.remove('valid');
        }
    });
});

selectedPasswordConfirmation.addEventListener('focusout', function(e) {
    e.preventDefault();
    checkEquality();
});

selectedPassword.addEventListener('focusout', function(e) {
    e.preventDefault();
    checkEquality();
});

selectedButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (selectedForm.checkValidity()) {
        selectedForm.submit();
  } else {
    selectedForm.reportValidity();
  }
});

selectedButton.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedForm.checkValidity()) {
            if (checkEquality()) {
                selectedForm.submit();
            }
        } else {
            selectedForm.reportValidity();
        }
    }
});

function checkEquality() {
    if (selectedPassword.value === selectedPasswordConfirmation.value && (selectedPasswordConfirmation.value.length >= 8)) {
        selectedPasswordConfirmation.classList.add('valid');
        selectedPasswordConfirmation.classList.remove('invalid');
        return true;
    } else {
        selectedPasswordConfirmation.classList.add('invalid');
        selectedPasswordConfirmation.classList.remove('valid');
        selectedPasswordConfirmation.setAttribute('title', 'Confirmed password must be equal to the entered valid password');
        return false;
    }
}