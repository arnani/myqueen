// JavaScript for interactivity: envelope open, gallery navigation, and section transitions
document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelopeContainer');
  const openBtn = document.getElementById('openButton');
  const gallerySection = document.getElementById('gallery');
  const letterSection = document.getElementById('letter');
  const letterContent = document.getElementById('letter-content');
  const galleryImage = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const audio = document.getElementById('bg-music');

  // Array of gallery image paths
  const images = [
    "/mywife/img1.jpeg", ];
    const images = [
        "/mywife/img2.jpeg",
    ];
    const images = [
        "/mywife/img3.jpeg"
    ];
    const images = [
        "/mywife/img4.jpeg",
    ];
       const images = [
        "/mywife/img5.jpeg", 
       ];
       const images = [
        "/mywife/img6.jpeg", 
       ];
       
    
  let currentIndex = 0;

  // Preload images
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Function to update displayed content based on currentIndex
  function showSlide(index) {
    if (index < images.length) {
      // Show gallery image
      gallerySection.style.display = "flex";
      letterSection.style.display = "none";
      // Fade out current image, then update
      galleryImage.style.opacity = 0;
      setTimeout(() => {
        galleryImage.src = images[index];
      }, 300);
      // When new image loads, fade it in
      galleryImage.onload = () => {
        galleryImage.style.opacity = 1;
      };
    } else {
      // Show love letter section
      gallerySection.style.display = "none";
      letterSection.style.display = "flex";
      // Fade in the letter content
      setTimeout(() => {
        letterContent.style.opacity = 1;
      }, 50);
    }
    // Update navigation buttons
    if (index === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "inline-block";
    }
    if (index < images.length) {
      nextBtn.style.display = "inline-block";
      nextBtn.textContent = (index === images.length - 1) ? "Read Letter ❯" : "Next ❯";
    } else {
      // On letter, hide Next
      nextBtn.style.display = "none";
    }
  }

  // Open envelope click handler
  openBtn.addEventListener('click', () => {
    // Start background music on user interaction
    audio.play();
    // Open envelope animation
    envelope.classList.add('open');
    // Optionally fade out landing text
    openBtn.style.opacity = 0;
    // After animation, hide landing and show gallery
    setTimeout(() => {
      document.getElementById('landing').style.display = 'none';
      // Show first image
      currentIndex = 0;
      showSlide(currentIndex);
    }, 700); // matches the envelope flap animation duration
  });

  // Next button click
  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    } else if (currentIndex === images.length - 1) {
      // If at last image, move to letter
      currentIndex++;
      showSlide(currentIndex);
    }
  });

  // Prev button click
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0 && currentIndex <= images.length) {
      // If currently on letter or a later image, go back
      currentIndex--;
      showSlide(currentIndex);
    }
  });
});
