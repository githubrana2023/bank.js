userArr = JSON.parse(localStorage.getItem('userArr'))
console.log(userArr);

document.getElementById('log-in-btn').addEventListener('click',()=>{
  for (const user of userArr) {
    const objPropertyEmail = user.hasOwnProperty('email')
    const objPropertyPass = user.hasOwnProperty('password')
    console.log(objPropertyEmail, objPropertyPass);
    if (objPropertyEmail && objPropertyPass) {
      const userEmail = getInputElement('email')
      const userPass = getInputElement('password')
      console.log(userEmail,userPass);
      const {email, password} = user
      if (userEmail === email && userPass === password) {
        location.href = '../home.html'
      } else {
        alert('invalid email and password')
      }
      
    }else{
  
    }
  }
})

