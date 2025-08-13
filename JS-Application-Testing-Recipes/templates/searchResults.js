import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { userInfo } from '../util/userInfo.js';
import { requests } from '../api/requests.js';

export function getSearchResultsTemplate(recipes) {
    if (recipes.length == 0) {
        return html`<h3>No result.</h3>`;
    }

    return html`
        <h3>Results:</h3>
        <ul>
            ${recipes.map(
                (recipe) => html`
                    <li>
                        ${userInfo.getUserObj()
                            ? html`<a href="/details/${recipe._id}">${recipe.recipeName}</a>`
                            : recipe.recipeName}
                        by ${recipe.sharedBy}
                    </li>
                `
            )}
        </ul>
    `;
}