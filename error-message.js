function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let valid = true;
  
    // Validate name
    if (name.length < 1 || name.length > 50) {
      nameError.innerText = "Name must be between 1 and 50 characters";
      valid = false;
    } else {
      nameError.innerText = "";
    }
  
    // Validate email
    if (!email.includes("@") || !email.endsWith(".com") || email.indexOf('@') > email.indexOf('.com') - 1) {
        emailError.innerText = "Invalid email address";
        valid = false;
      } else {
        emailError.innerText = "";
      }
      
  
    // Validate message
    if (message.length < 1) {
      messageError.innerText = "Message cannot be empty";
      valid = false;
    } else {
      messageError.innerText = "";
    }
  
    return valid;
  }