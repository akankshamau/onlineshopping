function validateForm() {
    var name = document.getElementById("form3Example1c").value;
    var email = document.getElementById("form3Example3c").value;
    var password = document.getElementById("form3Example4c").value;
    var repeatPassword = document.getElementById("form3Example4cd").value;

    // Validate name
    if (name.length < 2) {
        alert("Name must have at least two characters");
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // Validate password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    // Validate password match
    if (password !== repeatPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

function validateLoginForm() {
    // Get the form elements
    var emailInput = document.getElementById("form3Example3");
    var passwordInput = document.getElementById("form3Example4");
    var errorContainer = document.getElementById("error-container");

    // Reset previous errors
    errorContainer.innerHTML = '';

    // Validate email format
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      showError("Please enter a valid email address.");
      return false;
    }

    // Validate password strength (add your own conditions)
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
      showError("Password must be at least 8 characters long and contain at least one letter and one number.");
      return false;
    }

    // Additional validation logic can be added here

    return true;
  }

  function showError(message, duration = 5000) {
    var errorContainer = document.getElementById("error-container");
    var errorMessage = document.createElement("div");
    errorMessage.className = "alert alert-danger";
    errorMessage.innerHTML = message;
    errorContainer.appendChild(errorMessage);

    // Automatically remove the error message after a specified duration (default: 5000 milliseconds)
    setTimeout(function () {
        errorContainer.removeChild(errorMessage);
    }, 3000);
}
