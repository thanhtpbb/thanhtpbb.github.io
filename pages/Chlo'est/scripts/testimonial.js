const testimonialContainer = document.querySelector('.testimonial__content')
const testimonialChangeButtons = document.querySelectorAll(
  '.testimonials__change'
)
const testimonialComment = document.querySelector('.testimonial__comment')
const testimonialsAvt = document.querySelector('.testimonials__avt')

// Data
const testimonials = [
  {
    comment:
      "I've already gotten compliments about my skin glowing after using the anti-aging!",
    avtImage: '../../assets/img/testimonial_avt-1.png'
  },
  {
    comment: 'My skin has never looked better! The products are amazing!',
    avtImage: '../../assets/img/testimonial_avt-2.png'
  },
  {
    comment:
      "I'm so happy with the results! This skincare routine has transformed my skin!",
    avtImage: '../../assets/img/testimonial_avt-3.png'
  }
]

let currentTestimonialIndex = 0

function updateTestimonialContent() {
  const currentTestimonial = testimonials[currentTestimonialIndex]
  testimonialComment.textContent = currentTestimonial.comment
  testimonialsAvt.style.backgroundImage = `url(${currentTestimonial.avtImage})`
}

function slideTestimonials(direction) {
  if (direction === 'left') {
    testimonialContainer.classList.add('slide-left')
  } else if (direction === 'right') {
    testimonialContainer.classList.add('slide-right')
  }

  setTimeout(() => {
    testimonialContainer.classList.remove('slide-left', 'slide-right')
  }, 500)
}

function handleTestimonialChange(event) {
  const button = event.target
  if (button.classList.contains('testimonials__polygon-left')) {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    slideTestimonials('left')
  } else if (button.classList.contains('testimonials__polygon-right')) {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length
    slideTestimonials('right')
  }
  updateTestimonialContent()
}

testimonialChangeButtons.forEach((button) => {
  button.addEventListener('click', handleTestimonialChange)
})

updateTestimonialContent()
