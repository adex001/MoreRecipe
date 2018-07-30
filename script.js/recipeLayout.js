const switchRecipeLayout = (event) => {
    const selectRecipeDivs = document.querySelectorAll('.recipe');
    selectRecipeDivs[0].style.display = 'block';
    if (event.target.id === 'viewAllRecipe') {
        selectRecipeDivs[1].style.display = 'block';
        selectRecipeDivs[0].style.display = 'none'
    }
    else{
        selectRecipeDivs[1].style.display = 'none';
        selectRecipeDivs[0].style.display = 'block'
    }
    const createForm = document.querySelector('#createRecipe');
    const viewAllRecipe = document.querySelector('#viewAllRecipe');
    createForm.addEventListener('click', switchRecipeLayout);
    viewAllRecipe.addEventListener('click', switchRecipeLayout);
}

window.load = switchRecipeLayout();