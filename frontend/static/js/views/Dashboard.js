import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Greg</h1>
            <p>This is a test thing for the page
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
        
    }
}