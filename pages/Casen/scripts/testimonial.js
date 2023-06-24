const testimonialContainer = document.getElementById('testimonial__inner');
const testimonialIcons = document.querySelectorAll('.testimonial__icon');
const testimonialComment = document.querySelector('.testimonial__comment');
const testimonialAvt = document.querySelector('.testimonial__avt');
const testimonialName = document.querySelector('.testimonial__name');

// Data
const testimonials = [
  {
    comment:
      '1 Not only about the design but the quality. Never have I ever found such an awesome case',
    avtImage: '../../assets/img/testimonial-avt-1.png',
    name: 'Rhona Bowers',
  },
  {
    comment:
      '2 Not only about the design but the quality. Never have I ever found such an awesome case!',
    avtImage: '../../assets/img/testimonial-avt-2.png',
    name: 'John Doe',
  },
  {
    comment:
      '3 Not only about the design but the quality. Never have I ever found such an awesome case!',
    avtImage: '../../assets/img/testimonial-avt-3.png',
    name: 'Jane Smith',
  },
];

let currentTestimonialIndex = 0;

// Function to update the testimonial content
function updateTestimonialContent() {
  const currentTestimonial = testimonials[currentTestimonialIndex];
  testimonialComment.textContent = currentTestimonial.comment;
  testimonialAvt.style.backgroundImage = `url(${currentTestimonial.avtImage})`;
  testimonialName.textContent = currentTestimonial.name;
}

// Function to handle testimonial icon click
function handleTestimonialIconClick(event) {
  const icon = event.currentTarget;
  if (icon.id === 'testimonial__icon--left') {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  } else if (icon.id === 'testimonial__icon--right') {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
  }
  updateTestimonialContent();
}

testimonialIcons.forEach((icon) => {
  icon.addEventListener('click', handleTestimonialIconClick);
});

updateTestimonialContent();
