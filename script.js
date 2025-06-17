// JavaScript for progress bar
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentStep = 1;

nextBtn.addEventListener('click', () => {
  if (currentStep < circles.length) {
    circles[currentStep].classList.add('active');
    currentStep++;
    prevBtn.disabled = false;
    if (currentStep == circles.length) {
      nextBtn.disabled = true;
    }
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    circles[currentStep - 1].classList.remove('active');
    currentStep--;
    if (currentStep == 1) {
      prevBtn.disabled = true;
    }
    nextBtn.disabled = false;
  }
});

