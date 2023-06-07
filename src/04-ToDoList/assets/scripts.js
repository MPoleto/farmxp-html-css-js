const form = document.getElementById('form-container');
let textInput = document.getElementById('new-item');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const info = textInput.value;
  addToDo(info);
});

function addToDo(info) {
  if (info === '') {
    alert('Adicione a sua tarefa!');
  } else {
    const divInput = document.createElement('div');
    divInput.setAttribute('class', 'check-label');

    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.setAttribute('class', 'checkbox-item');
    checkboxInput.setAttribute('id', info);

    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', info);
    const labelInfo = document.createTextNode(info);
    labelElement.appendChild(labelInfo);

    divInput.appendChild(checkboxInput);
    divInput.appendChild(labelElement);

    document.getElementById("wrapper").appendChild(divInput);
    
    textInput.value = '';
        
  }  
}
