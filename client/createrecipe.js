const name = document.getElementById('name').value;
const description = document.getElementById('description').value;
const image = document.getElementById('image').value;
const ingredients = document.getElementById('ingredients').value;
const instruction = document.getElementById('instruction').value;
const submitButton = document.getElementById('submit');


const createObject = {
  "recipe": {
    name,
    description,
    image,
    ingredients: [],
    instruction: []
  
  }

}

submitButton.addEventListener('click', () => {

  fetch('https://more-recipes.herokuapp.com/api/v1/recipe', {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(createObject),
  })
});