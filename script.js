window.addEventListener('scroll', function() {
  let header = document.querySelector('.sticky-header');
  if (window.pageYOffset > 1077) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

window.addEventListener('scroll', function() {
  let div = document.querySelector('.content');
  if (window.pageYOffset > 1077) {
    div.classList.add('change');
  } else {
    div.classList.remove('change');
  }
});