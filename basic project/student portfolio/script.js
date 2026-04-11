// Get the form element by its ID
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// Add an event listener to handle form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (which refreshes the page)
    event.preventDefault();

    // Get input elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Reset error messages (hide them initially)
    const errorMessages = document.querySelectorAll('.error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].style.display = 'none';
    }
    
    // Hide success message
    successMessage.style.display = 'none';

    // 1. Validate Name (must not be empty)
    if (nameInput.value.trim() === '') {
        // Show error message right below the input
        nameInput.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // 2. Validate Email (simple check for empty value; HTML5 handles @ validation)
    if (emailInput.value.trim() === '') {
        emailInput.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // 3. Validate Message (must not be empty)
    if (messageInput.value.trim() === '') {
        messageInput.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // If all fields are valid, we can simulate a successful submission
    if (isValid) {
        // Show success message
        successMessage.style.display = 'block';

        // Clear the form fields
        contactForm.reset();

        // Optional: Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    }
});
