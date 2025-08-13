import { html } from '../node_modules/lit-html/lit-html.js';
import { userInfo } from '../util/userInfo.js';

export function getNavTemplate() {
    return html`
            <nav>
                <a href="/">Home</a>
                <a href="/discover">Discover</a>
                <a href="/search">Search</a>
                ${userInfo.getUserObj()
                    ? html`
                        <a href="/create">Create Recipe</a>
                        <a href="/logout">Logout</a>`
                    : html`
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>`}
            </nav>`;
}