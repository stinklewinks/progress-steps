const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const prev = document.querySelector('#back');
const next = document.querySelector('#next');
const steps = document.querySelectorAll('.step');
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    let currentStep = document.querySelector('.step.active');
    let nextStep = currentStep.nextElementSibling;
    if (nextStep) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
        progress.style.width = `${((currentActive - 1) / (steps.length - 1)) * 100}` + '%';
    }
});

prev.addEventListener('click', () => {
    currentActive--;
    let currentStep = document.querySelector('.step.active');
    let prevStep = currentStep.previousElementSibling;
    if (prevStep) {
        currentStep.classList.remove('active');
        prevStep.classList.add('active');
        progress.style.width = `${((currentActive - 1) / (steps.length - 1)) * 100}` + '%';
    }
    if(currentStep.previousElementSibling === null){
        currentActive = 1;
        steps[0].classList.add('active');
        progress.style.width = `${((currentActive - 1) / (steps.length - 1)) * 100}` + '%';
    }
});