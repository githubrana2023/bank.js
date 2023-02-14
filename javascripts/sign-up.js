document.getElementById('sign-up-btn').addEventListener('click',()=>{
  const user = {}
  const firstName = getInputElement('first-name')
  const lastName = getInputElement('last-name')
  const email = getInputElement('email')
  const password = getInputElement('password')
  const confirmPassword = getInputElement('confirm-password')

  
  
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = password;
  user.confirmPassword = confirmPassword;


  
  const termsCondition = document.getElementById('terms-conditon').checked
  
  if (termsCondition) {
    userArr.push(user)
    alert("Successfully account created")
    saveData()
  }
  
})
console.log(userArr);