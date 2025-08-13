import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { event } from '../util/eventHandler.js'; 

export function getCreateView() {
    return html`
        <div class="details-page">
            <div class="recipe-card">
                <form @submit=${event.onCreateSubmit} class="recipe-form">
                    <h2>Add Recipe</h2>

                    <label for="recipeName">Recipe Name</label>
                    <input id="recipeName" name="recipeName" class="recipeName" type="text" placeholder="Recipe name">

                    <label for="recipeImage">Recipe Image</label>
                    <input id="recipeImage" name="recipeImage" class="recipeImage" type="text" placeholder="Recipe Image">

                    <label for="preparationTime">Preparation Time (minutes)</label>
                    <input id="preparationTime" name="preparationTime" class="preparationTime" type="text" placeholder="Preparation Time (minutes)">

                    <label for="sharedBy">Shared By</label>
                    <input id="sharedBy" name="sharedBy" class="sharedBy" type="text" placeholder="Shared By">

                    <label for="cuisineType">Cuisine Type</label>
                    <input id="cuisineType" name="cuisineType" class="cuisineType" type="text" placeholder="Cuisine Type">

                    <label for="steps">Steps</label>
                    <textarea name="steps" class="steps" placeholder="Steps"></textarea>

                    <button class="save-btn" type="submit">Save</button>
                </form>
            </div>
        </div>`;
}