document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

    // const radioButton = document.querySelector('input[name="status"]:checked').value
    // radioButtonbutton.addEventListener('click', handleRadioButton);

    const deletebutton = document.querySelector('#delete');
    deletebutton.addEventListener('click', handleDeleteAll);
})

const handleFormSubmit = function(event) {
    event.preventDefault();

    const animalListItem = createAnimalListItem(event.target);
    const animalList = document.querySelector("#endangered-animals");
    animalList.appendChild(animalListItem);

    event.target.reset();
}

const createAnimalListItem = function(form) {
    const animalListItem = document.createElement('li');
    animalListItem.classList.add('animal-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    const species = document.createElement('h1');
    species.textContent = form.species.value;
    animalListItem.appendChild(species);

    const statuscritical = document.createElement('critical');
    statuscritical.textContent  = document.querySelector('input[name="status"]:checked').value;
    animalListItem.appendChild(statuscritical);

    const continent = document.createElement('h1');
    continent.textContent = form.continent.value;
    animalListItem.appendChild(continent);


    return animalListItem;
}

const handleDeleteAll = function (event) {
    const animalList = document.querySelector('#endangered-animals')
    animalList.innerHTML = '';
}