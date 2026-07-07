export const warningBtn = () => {
  let warningBtn = document.getElementById('warning-btn'),
      warningAnswer = document.getElementById('warning-answer');
  if (!warningBtn || !warningAnswer) {
    return
  }

  warningBtn.addEventListener('click', () => {
    if (warningAnswer.classList.contains('opacity-0')) {
      warningAnswer.classList.remove('opacity-0')
    }
  })
}
