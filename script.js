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
    'path-to-your-image1.jpg',
    'path-to-your-image2.jpg',
    'path-to-your-image3.jpg'
    // Add more image paths as needed
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
      gallerySection.classList.remove('hidden');
      letterSection.classList.add('hidden');
      galleryImage.src = images[index];
      prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
      nextBtn.textContent = index === images.length - 1 ? 'Read Letter ❯' : 'Next ❯';
    } else {
      // Show love letter section
      gallerySection.classList.add('hidden');
      letterSection.classList.remove('hidden');
    }
  }

  // Open envelope click handler
  openBtn.addEventListener('click', () => {
    // Start background music on user interaction
    audio.play();
    // Open envelope animation
    envelope.classList.add('open');
    // Hide the open button
    openBtn.style.display = 'none';
    // After animation, show the gallery
    setTimeout(() => {
      showSlide(currentIndex);
    }, 500); // matches the envelope flap animation duration
  });

  // Next button click
  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length) {
      currentIndex++;
      showSlide(currentIndex);
    }
  });

  // Prev button click
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  });

  // Initialize by showing the first slide
  showSlide(currentIndex);
});
