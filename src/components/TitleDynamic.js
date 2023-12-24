class titleDynamic extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        shadow.appendChild(this.build())
    }

    build(){
        const componentRoot = document.createElement('div');

        const title = document.createElement('h1');
        title.textContent = this.getAttribute('title');

        componentRoot.appendChild(title);

        return componentRoot;
    }
}

customElements.define('title-dynamic', titleDynamic)