import 'normalize.css';
import './index.css';

function progressComponent(element) {
    const instance = {}
    instance.element = element;
    instance.percentage = `${parseInt(element.getAttribute('data-percentage'), 10)}%`;
    instance.element.title = instance.percentage;
    /* Add percentage text */
    instance.percentageElement = document.createElement('h3');
    instance.percentageElement.classList.add('progress-percentage');
    instance.percentageElement.innerHTML = instance.percentage;
    /* Create progress bar for skill */
    instance.progressBar = document.createElement('div');
    instance.progressBar.classList.add('progress-bar');
    /* Create percentage bar */
    instance.progressBarPercentage = document.createElement('div');
    instance.progressBarPercentage.setAttribute('style', `width: ${instance.percentage}`);
    instance.progressBarPercentage.classList.add('progress-bar-percentage');
    /* append children */
    instance.element.prepend(instance.percentageElement);
    instance.progressBar.appendChild(instance.progressBarPercentage);
    instance.element.appendChild(instance.progressBar);
    return instance;
}

function initSkills() {
    const skills = Array.from(document.querySelectorAll('.progress'));
    return skills.map(v => {
        return progressComponent(v);
    });
}

function initPage() {
    initSkills();
}

document.addEventListener('DOMContentLoaded', initPage);
