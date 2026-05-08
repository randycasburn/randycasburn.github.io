/**
 * CryptoTrader Website - Navigation and Interaction Script
 * This is a minimal static website with no external dependencies
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScroll();
});

/**
 * Initialize smooth navigation
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set active link based on current page
    setActiveNavLink();
}

/**
 * Set the active navigation link based on current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Add smooth scroll behavior
 */
function initializeScroll() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Add animation to elements on scroll
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards and other elements
    document.querySelectorAll('.feature-card, .step-box, .panel, .task-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations
if (window.IntersectionObserver) {
    initializeScrollAnimations();
}

/**
 * Add keyboard navigation
 */
document.addEventListener('keydown', function(e) {
    // Alt + Left Arrow: Previous page
    if (e.altKey && e.key === 'ArrowLeft') {
        navigatePrevious();
    }
    // Alt + Right Arrow: Next page
    if (e.altKey && e.key === 'ArrowRight') {
        navigateNext();
    }
});

/**
 * Navigate to previous page
 */
function navigatePrevious() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let previousPage = 'index.html';
    
    if (currentPage === 'setup.html') {
        previousPage = 'index.html';
    } else if (currentPage === 'usage.html') {
        previousPage = 'setup.html';
    }
    
    if (previousPage !== currentPage) {
        window.location.href = previousPage;
    }
}

/**
 * Navigate to next page
 */
function navigateNext() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let nextPage = currentPage;
    
    if (currentPage === 'index.html') {
        nextPage = 'setup.html';
    } else if (currentPage === 'setup.html') {
        nextPage = 'usage.html';
    }
    
    if (nextPage !== currentPage) {
        window.location.href = nextPage;
    }
}

/**
 * Add table of contents to long pages
 */
function generateTableOfContents() {
    const headings = document.querySelectorAll('h2');
    
    if (headings.length > 0) {
        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        
        const list = document.createElement('ul');
        
        headings.forEach((heading, index) => {
            const id = 'section-' + index;
            heading.id = id;
            
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + id;
            link.textContent = heading.textContent;
            
            item.appendChild(link);
            list.appendChild(item);
        });
        
        toc.appendChild(list);
        
        // Insert after page header if it exists, otherwise at the start of main content
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.parentNode.insertBefore(toc, pageHeader.nextSibling);
        }
    }
}

// Generate TOC only if there are more than 3 sections
if (document.querySelectorAll('h2').length > 3) {
    // Disabled by default to keep the design clean
    // Uncomment to enable: generateTableOfContents();
}
