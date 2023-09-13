function openRegistrationForm() {
    window.open('registration.html', '_blank');
}

// // Initialize EmailJS (You might not need this if you're handling emails from the backend)
// emailjs.init("YOUR_USER_ID");

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    };

    // Send the data to the backend
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else {
            alert('Registration failed. Please try again later.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed. Please try again later.');
    });
});
