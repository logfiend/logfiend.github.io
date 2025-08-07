// Main JavaScript for LogFiend Jekyll site

document.addEventListener('DOMContentLoaded', function() {
  // Initialize functionality after DOM is loaded
  initSmoothScrolling();
  initMobileMenu();
  initBackToTop();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile menu functionality (if needed)
function initMobileMenu() {
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Back to top button
function initBackToTop() {
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.className = 'back-to-top btn btn-electric';
  backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: none;
    z-index: 1000;
    font-size: 20px;
    cursor: pointer;
  `;
  
  document.body.appendChild(backToTopButton);
  
  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to top on click
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Form handling (if contact forms are added)
function handleFormSubmission(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add your form handling logic here
    console.log('Form submitted');
    
    // Example: show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success';
    successMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
    
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    form.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}

// Initialize any contact forms
document.querySelectorAll('.contact-form').forEach(handleFormSubmission);

// Intersection Observer for animations (optional)
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations if elements exist
if (document.querySelector('.animate-on-scroll')) {
  initScrollAnimations();
}
