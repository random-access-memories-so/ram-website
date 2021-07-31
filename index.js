
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('rewind-button')

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop < 300) {
      el.classList.add('hide');
    } else {
      el.classList.remove('hide');
    }
  });
})