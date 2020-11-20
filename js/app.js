document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);
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

    return animalListItem
}