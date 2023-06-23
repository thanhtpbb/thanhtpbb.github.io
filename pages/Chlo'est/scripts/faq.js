const questions = document.querySelectorAll('.faq__question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('faq-active')

    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove('faq-active')
      }
    })
  })
})
