function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
};

function handleLogin(event) {
    event.preventDefault();
    alert('Login successful! Welcome to Hospital Tourism India.');
    closeModal('loginModal');
}

function handleSignup(event) {
    event.preventDefault();
    alert('Account created successfully!');
    closeModal('signupModal');
}

function handleEnquiry(event) {
    event.preventDefault();
    alert('Thank you for your enquiry! Our team will contact you within 24 hours.');
    closeModal('enquiryModal');
}

function handleContact(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
}
