function emailValidation() {
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const emailConfirmInput = document.getElementById('email_confirm');
  const errorRow = document.getElementById('error-row');
  const errorMessage = document.getElementById('error-message');

  emailConfirmInput.addEventListener('input', () => {
    if (emailInput.value !== emailConfirmInput.value) {
      errorMessage.textContent = "Eメールが一致しません";
      errorRow.style.display = 'table-row';
      emailConfirmInput.classList.add('email_error');
    } else {
      errorMessage.textContent = "";
      errorRow.style.display = 'none';
      emailConfirmInput.classList.remove('email_error');
    }
  });

  form.addEventListener('submit', e => {
    if (emailInput.value !== emailConfirmInput.value) {
      e.preventDefault();
      errorMessage.textContent = "Eメールが一致しません";
      errorRow.style.display = 'table-row';
      emailConfirmInput.classList.add('email_error');
    } else {
      errorMessage.textContent = "";
      errorRow.style.display = 'none';
      emailConfirmInput.classList.remove('email_error');
      form.submit();
    }
  });
};

window.onload = emailValidation;
