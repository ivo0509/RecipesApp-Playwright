import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { event } from '../util/eventHandler.js';

export function getEditTemplate(recipe) {
    return html`
        <div class="details-page">
            <div class="recipe-card">
                <form @submit=${event.onEditSubmit} recipeid=${recipe._id} class="recipe-form">
                    <h2>Edit Recipe</h2>

                    <label for="recipeName">Recipe Name</label>
                    <input id="recipeName" name="recipeName" class="recipeName" type="text" value=${recipe.recipeName}>

                    <label for="recipeImage">Recipe Image</label>
                    <input id="recipeImage" name="recipeImage" class="recipeImage" type="text" value=${recipe.recipeImage}>

                    <label for="preparationTime">Preparation Time (minutes)</label>
                    <input id="preparationTime" name="preparationTime" class="preparationTime" type="text" value=${recipe.preparationTime}>

                    <label for="sharedBy">Shared By</label>
                    <input id="sharedBy" name="sharedBy" class="sharedBy" type="text" value=${recipe.sharedBy}>

                    <label for="cuisineType">Cuisine Type</label>
                    <input id="cuisineType" name="cuisineType" class="cuisineType" type="text" value=${recipe.cuisineType}>

                    <label for="steps">Steps</label>
                    <textarea name="steps" class="steps" rows="10"
                        cols="10">${recipe.steps}</textarea>

                    <button class="save-btn" type="submit">Save Changes</button>
                </form>
            </div>
        </div>`;
}