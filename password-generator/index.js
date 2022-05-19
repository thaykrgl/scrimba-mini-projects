const button = document.getElementById("generate-btn");

function generateRandomPassword() {
  let password = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';

  for (let i = 1; i <= 12; i++) {

    let char = Math.floor(Math.random()
      * str.length + 1);
    password += str.charAt(char)
  }

  return password;
}

function renderPassword() {
  for (let i = 0; i < 4; i++) {

    document.getElementById(`pass-${i + 1}`).innerHTML = generateRandomPassword();
  }
}

button.addEventListener("click", renderPassword);



