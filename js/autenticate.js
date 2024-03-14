function validateLoginForm() {
  let usernameField = document.getElementById('login_form');
  let passwordField = document.getElementById('pass_form');

  if (usernameField.value.length < 4) {
    console.log('El nombre de usuario debe tener al menos 4 caracteres.');
    setRed(usernameField);
	return false
  } else {
    setGreen(passwordField);
  }

  if (passwordField.value.length < 6) {
    console.log('La contraseña debe tener mas de 6 caracteres');
    setRed(passwordField);
    return false;
  } else {
    setGreen(passwordField);
  }
  
  if (passwordField.value.length > 16) {
	console.log('La contraseña debe tener menos de 16 caracteres');
	setRed(passwordField);
    return false;
  } else {
    setGreen(passwordField);
  }
  
 return true;
}

function setRed(field) {
  field.style.backgroundColor = "#b05454";
}
function setGreen(field) {
  field.style.backgroundColor = "#5cb85c"; 
}