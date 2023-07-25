function validateForm() {
  // Validation code here as before
  var name = document.getElementById("name").value
  var contact = document.getElementById("contact").value
  var email = document.getElementById("email").value
  var treatment = document.getElementById("treatment").value

  // Validate name field
  if (name.trim() === "") {
    alert("Please enter your name.")
    return false
  }

  // Validate contact number field
  if (contact.trim() === "") {
    alert("Please enter your contact number.")
    return false
  }

  // Validate email field
  if (email.trim() === "") {
    alert("Please enter your email.")
    return false
  }

  // Validate treatment dropdown
  if (treatment === "") {
    alert("Please select a treatment.")
    return false
  }

  // You can add additional validation if needed.

  // If all fields are valid, the form will be submitted
   return true
   
  // If all fields are valid, the form data will be sent to the server
  if (name.trim() !== "" && contact.trim() !== "" && email.trim() !== "" && treatment !== "") {
    sendDataToServer()
  }
  return false // Prevent form submission directly from the page
}

function sendDataToServer() {
  var form = document.getElementById("registrationForm")
  var formData = new FormData(form)

  var xhr = new XMLHttpRequest()
  xhr.open("POST", "process_form.php", true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert("Registration successful. Email sent!")
        form.reset()
      } else {
        alert("Error: Could not register. Please try again later.")
      }
    }
  }
  xhr.send(formData)
}
