export const smoothScroll = () => {
  let primaryLink = document.querySelectorAll('a[href*="#"]');
  if (!primaryLink) {
    return
  }

  primaryLink.forEach(link => {
    link.addEventListener('click', (e) => {

      if (link.hasAttribute('href')) {
        let hrefLink = link.getAttribute('href')
        let idLink = hrefLink.split('#').pop();

        let targetElement = document.getElementById(idLink);

        if (targetElement) {
          e.preventDefault()
          const offsetTop = targetElement.getBoundingClientRect().top - 60;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        } else {
          return
        }
      }
    })
  })
}
