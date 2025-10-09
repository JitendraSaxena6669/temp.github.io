// Software Agency Main JavaScript
// Portfolio Filtering (Basic implementation)
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // WhatsApp integration
    window.bookConsultation = function(service) {
        const message = Hi {encodeURIComponent('Vajra BigHit Tech Solution')}! I'm interested in a consultation for {service}. Can we schedule a brief call?;
        const whatsappUrl = https://wa.me/={message};
        window.open(whatsappUrl, '_blank');
    }
});
