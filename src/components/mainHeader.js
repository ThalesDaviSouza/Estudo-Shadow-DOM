class mainHeader extends HTMLElement{
    constructor(){
        super()

        let shadow = this.attachShadow({mode: 'open'})

        shadow.innerHTML = '<h2>Welcome</h2>'
    }
}

customElements.define("main-header", mainHeader)