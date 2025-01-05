document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  const imagePaths = [
    "photo/carousel-1.webp",
    "photo/carousel-2.webp",
    "photo/carousel-3.webp",
    "photo/carousel-4.webp",
    "photo/carousel-5.webp",
    "photo/carousel-6.webp",
    "photo/carousel-7.webp",
    "photo/carousel-8.webp",
    "photo/carousel-9.webp",
    "photo/carousel-10.webp",
    "photo/carousel-11.webp",
    "photo/carousel-12.webp",
    "photo/carousel-13.webp",
    "photo/carousel-14.webp",
    "photo/carousel-15.webp",
    "photo/carousel-16.webp",
    "photo/carousel-17.webp",
    "photo/carousel-18.webp",
    "photo/carousel-19.webp",
    "photo/carousel-20.webp",
    "photo/carousel-21.webp",
    "photo/carousel-22.webp",
    "photo/carousel-23.webp",
    "photo/carousel-24.webp"
  ];

  let currentImages = [];

  const getRandomImages = (excludeImages, count) => {
    const availableImages = imagePaths.filter(img => !excludeImages.includes(img));
    const shuffled = availableImages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const displayImages = (images) => {
    galleryGrid.classList.add('fade-out');
    setTimeout(() => {
      galleryGrid.innerHTML = '';
      images.forEach((imgSrc, index) => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Photo ${index + 1}`;
        img.loading = "lazy";
        img.style.width = "100%";
        img.style.height = "200px";
        img.style.objectFit = "cover";
        div.appendChild(img);
        galleryGrid.appendChild(div);
      });
      galleryGrid.classList.remove('fade-out');
      currentImages = images;
    }, 500);
  };

  const initGallery = () => {
    const initialImages = getRandomImages([], 6);
    displayImages(initialImages);
  };

  prevButton.addEventListener('click', () => {
    const newImages = getRandomImages(currentImages, 6);
    if (newImages.length < 6) {
      displayImages(getRandomImages([], 6));
    } else {
      displayImages(newImages);
    }
  });

  nextButton.addEventListener('click', () => {
    const newImages = getRandomImages(currentImages, 6);
    if (newImages.length < 6) {
      displayImages(getRandomImages([], 6));
    } else {
      displayImages(newImages);
    }
  });

  initGallery();
});
