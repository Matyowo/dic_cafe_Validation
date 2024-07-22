function emailValidation() {
    const form = document.getElementById('form');
    const emailConfirmInput = document.getElementById('email_confirm');
    const errorRow = document.getElementById('error-row');
    const errorMessage = document.getElementById('error-message');
  
    emailConfirmInput.addEventListener('input', () => {
      if (form.email.value !== form.email_confirm.value) {
        errorMessage.textContent = "Eメールが一致しません";
        errorRow.style.display = 'table-row';
      } else {
        errorMessage.textContent = "";
        errorRow.style.display = 'none';
      }
    });
  
    form.addEventListener('submit', e => {
      if (form.email.value !== form.email_confirm.value) {
        e.preventDefault();
        errorMessage.textContent = "Eメールが一致しません";
        errorRow.style.display = 'table-row';
      } else {
        errorMessage.textContent = "";
        errorRow.style.display = 'none';
      }
    });
  };
  
  window.onload = emailValidation;  