class titleDynamic extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: 'open' })

        const title = document.createElement('h1')
        title.textContent = this.getAttribute('title')

        shadow.appendChild(title);
    }
}

customElements.define('title-dynamic', titleDynamic)