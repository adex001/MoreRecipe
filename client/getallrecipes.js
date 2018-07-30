// Import Create recipe controller 

// Connect the controller to the result
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNzN9LCJpYXQiOjE1MzI5NTc1MTEsImV4cCI6MTUzMjk2MTExMX0.vfC1jOXXdp3H9brc_10FCWNY6-VZgT5-JJkfqPnkZpQ';
fetch('https://more-recipes.herokuapp.com/api/v1/recipes/', {
  method: 'GET',
  headers: {
    'token': token,
  }
})
.then(response => response.json())
.then(result => {
  console.log(result);
  result.recipes.forEach(recipe => {
    document.getElementById('createrecipe').innerHTML += `${recipe.id} ${recipe.name} <br>`;
  });

})