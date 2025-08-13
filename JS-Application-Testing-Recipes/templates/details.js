import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { userInfo } from '../util/userInfo.js';


export function getDetailsView(recipe) { // change params with whatever u need
    return html`
    <div class="details-page">
            <div class="recipe-card">
                <img src=${recipe.recipeImage.substring(0,1) == '/' ? `..${recipe.recipeImage}` : recipe.recipeImage}>
                <div class="recipe-info">
                    <h2>${recipe.recipeName}</h2>
                    <p><strong>Shared By:</strong> ${recipe.sharedBy}</p>
                    <p><strong>Cuisine Type:</strong> ${recipe.cuisineType}</p>
                    <p><strong>Preparation Time (minutes):</strong> ${recipe.preparationTime}</p>
                    <p><strong>Steps:</strong> ${recipe.steps}</p>

                    <!-- Only for registered user and creator of the recipe-->
                    ${userInfo.getUserObj() && userInfo.getUserObj()._id == recipe._ownerId
                        ? html`
                            <div class="actions">
                                <a href="/edit/${recipe._id}" class="edit-btn">Edit</a>
                                <a href="/delete/${recipe._id}" class="delete-btn">Delete</a>
                            </div>`
                        : nothing }
                </div>
            </div>
        </div>`;
}
