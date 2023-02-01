const button = document.getElementsByTagName('button')[0];
const body = document.getElementsByTagName('body')[0];
const title = document.getElementsByTagName('h3')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);

function changeMode() {

    changeClass();
    changeText();
}

function changeClass() {
    body.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode'); 
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains('dark-mode')) {
        button.innerHTML = lightMode;
        title.innerHTML = darkMode + ' on';
        return;
    }
    button.innerHTML = darkMode;
    title.innerHTML = lightMode + ' on';
}