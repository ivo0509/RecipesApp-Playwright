import { html, nothing } from '../node_modules/lit-html/lit-html.js';
import { event } from '../util/eventHandler.js'; 

export function getSearchTemplate() {
    return html`
        <div id="searchPage" class="search-page">
            <form @submit=${event.onSearchClick} class="search-form">
                <h2>Find Your Favorite Recipes</h2>

                <input type="text" name="search" placeholder="Enter desired recipes's name" required>
                <button type="submit">Search</button>
            </form>

            <section class="search-results">
            
            </section>
        </div>`;
}