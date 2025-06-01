document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const currentSlideIndicator = document.querySelector('.current-slide');
    const totalSlides = document.querySelector('.total');
    
    let currentSlideIndex = 0;
    
    // Initialize
    totalSlides.textContent = slides.length;
    showSlide(currentSlideIndex);
    
    // Event listeners
    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            showNextSlide();
        } else if (e.key === 'ArrowLeft') {
            showPreviousSlide();
        }
    });
    
    // Functions
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show the current slide
        slides[index].classList.add('active');
        
        // Update indicators
        currentSlideIndicator.textContent = index + 1;
        
        // Update button states
        prevButton.disabled = index === 0;
        nextButton.disabled = index === slides.length - 1;
    }
    
    function showNextSlide() {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        }
    }
    
    function showPreviousSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            showSlide(currentSlideIndex);
        }
    }
    
    // Add animation to chart bars for better visualization
    const chartBars = document.querySelectorAll('.chart-bar');
    setTimeout(() => {
        chartBars.forEach(bar => {
            const height = bar.style.height;
            bar.style.height = '0';
            setTimeout(() => {
                bar.style.height = height;
            }, 100);
        });
    }, 1000);
});