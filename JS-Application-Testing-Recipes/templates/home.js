import { html } from '../node_modules/lit-html/lit-html.js';
import { userInfo } from '../util/userInfo.js';

export function getHomeTemplate() {
    return html`
        <section class="features">
            <div class="feature">
                <h2>Discover Unique Recipes</h2>
                <p>From quick snacks to gourmet meals, find recipes that suit every taste and occasion.</p>
            </div>
            <div class="feature">
                <h2>Share Your Creations</h2>
                <p>Upload your culinary masterpieces and inspire others to try your recipes.</p>
            </div>
            <div class="feature">
                <h2>Join a Passionate Community</h2>
                <p>Connect with fellow food lovers, exchange tips, and celebrate the art of cooking.</p>
            </div>
        </section>
        `;
}