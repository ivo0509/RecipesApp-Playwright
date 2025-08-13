import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { userInfo } from '../util/userInfo.js';
import { requests } from '../api/requests.js';

export function getDiscoverTemplate(items) {
    return html`
    <section>
    <h1 style="color: white;">All Recipes</h1>

    ${items && items.length > 0
        ? items.map(i => html`
                            <div class="recipe">
                                <img src=${i.recipeImage.substring(0,1) == '/' ? `..${i.recipeImage}` : i.recipeImage}>
                                <div class="recipe-details">
                                    <h2>${i.recipeName}</h2>
                                    <p><strong>Shared By:</strong> ${i.sharedBy}</p>
                                    <p><strong>Cuisine Type:</strong> ${i.cuisineType}</p>
                                    <p><strong>Preparation Time (minutes):</strong> ${i.preparationTime}</p>
                                    <p><strong>Steps:</strong> ${i.steps}</p>
                                    ${userInfo.getUserObj()
                                        ? html`<a href="/details/${i._id}" id="details">View Details</a>`
                                        : nothing }
                                </div>
                            </div>`)
        : html`<p>No Recipes Found!</p>`}
</section>`;
}