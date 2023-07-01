const slides = document.querySelectorAll('.testimonial__slider');

const leftPoligon = document.getElementById('testimonials__polygon-left');
const rightPoligon = document.getElementById('testimonials__polygon-right');

let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translate(-${counter * 100}%)`;
  });

  if (counter === 0) {
    leftPoligon.style.display = 'none';
  } else if (counter === 2) {
    rightPoligon.style.display = 'none';
  } else {
    leftPoligon.style.display = 'block';
    rightPoligon.style.display = 'block';
  }
};

const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
};
const goPrev = () => {
  if (counter != 0) {
    counter--;
    slideImage();
  }
};
