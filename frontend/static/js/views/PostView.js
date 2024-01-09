import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Posts");
    }

    async getHtml() {
        console.log(this.params.id)
        return `
            <h1>PostView</h1>
            <p>You are viewing the postview!</p>
        `;
        
    }
}