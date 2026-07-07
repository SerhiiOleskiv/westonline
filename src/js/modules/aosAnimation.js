import AOS from "aos";

export const aosAnimation = () => {
  let aosTrigger = document.getElementById('warning-close-btn');
  if (!aosTrigger) {
    return
  }
  aosTrigger.addEventListener('click', () => {
    if (!aosTrigger.classList.contains('clicked')) {
      AOS.init({
        once: true,
        duration: 800
      })
      aosTrigger.classList.add('clicked')
    }
  })
}
