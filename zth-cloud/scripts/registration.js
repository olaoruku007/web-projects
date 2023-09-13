function openRegistrationForm() {
    window.open('registration.html', '_blank');
  }
  
 // Initialize EmailJS (Replace YOUR_USER_ID with your EmailJS user ID)
 emailjs.init("YOUR_USER_ID");

 document.getElementById("registrationForm").addEventListener("submit", function(event) {
     event.preventDefault();
 
     let formData = {
         fullName: event.target.fullName.value,
         email: event.target.email.value,
         phone: event.target.phone.value
     };
 
     sendEmail(formData);
 });
 
 function sendEmail(data) {
     // Define your EmailJS template parameters
     let params = {
         from_name: data.fullName,
         from_email: data.email,
         from_phone: data.phone,
         to_name: "Your Name", // Replace with your name
     };
 
     // Send email using EmailJS (Replace YOUR_TEMPLATE_ID and YOUR_SERVICE_ID with your specific values)
     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
         .then(response => {
             console.log("Email sent successfully", response);
             alert("Registration successful! We will get in touch with you shortly.");
         })
         .catch(error => {
             console.error("There was an error sending the email", error);
             alert("There was a problem with the registration. Please try again later.");
         });
 }