$(function () {
  const recipes = [
    {
      title: "Пица",
      calories: 260,
      type: "main",
      description: "Традиционно италианско ястие",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Сандвич",
      calories: 320,
      type: "breakfast",
      description: "Неустоим тост с авокадо и яйца",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80"
    },
    {
      title: "Паста",
      calories: 130,
      type: "main",
      description: "Прясна паста по домашна рецепта",
      image:
        "https://images.unsplash.com/photo-1560788784-66eda82b5eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Торта",
      calories: 450,
      type: "dessert",
      description: "Домашно приготвена торта",
      image:
        "https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const $recipeTemplate = $('#recipe-template');
  const $recipesList = $('#recipes-list');
  // render cards from array
  recipes.forEach(function (item) {
    // clone template
    const $clonedRecipeTemplate = $recipeTemplate.clone();

    // Remove id and class display: none from cloned template
    $clonedRecipeTemplate.attr('id', '');
    $clonedRecipeTemplate.removeClass('d-none');

    // Fill template with data
    $clonedRecipeTemplate.find('.card-img').attr('src', item.image);
    $clonedRecipeTemplate.find('.card-title').text(item.title);
    $clonedRecipeTemplate.find('.card-description').text(item.description);
    $clonedRecipeTemplate.find('.card-calories').text(`${item.calories} kcal`);
    // Fill cloned template inside recipes-list
    $recipesList.append($clonedRecipeTemplate);
  });

  // add recipe form and hide modal
  const $recipeForm = $('#add-recipe-form');
  // add event to submit the form
  $recipeForm.submit(function(event) {
    event.preventDefault();
    // Collect all the data from the form
    const $recipeTitle = $recipeForm.find('input[name="title"]').val();
    const $recipeImage = $recipeForm.find('input[name="image"]').val();
    const $recipeCalories = $recipeForm.find('input[name="calories"]').val();
    const $recipeType = $recipeForm.find('select[name="type"]').val();
    const $recipeDescription = $recipeForm.find('textarea[name="description"]').val();

    // Create object with the new data
    // Add new recipe object to the recipies array
    // Close dialog
  });

  // filter by type

  // calories range

  // happy coding

});