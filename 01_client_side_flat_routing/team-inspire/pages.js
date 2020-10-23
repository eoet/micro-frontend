class InspireHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Welcome Home!</h1>
            <strong>Here are three tractors:</strong>
            <ul>
                <li><a href="/product/eicher"/>Eicher</li>
                <li><a href="/product/porsche"/>Porsche</li>
                <li><a href="/product/fendt"/>Fendt</li>
            </ul>
        `;
    }
}

window.customElements.define('inspire-home', InspireHome);