class mainHeader extends HTMLElement{
    constructor(){
        super()

        let shadow = this.attachShadow({mode: 'open'})

        shadow.appendChild(this.build())
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card-header')

        const mainText = document.createElement('h1');
        mainText.textContent = this.getAttribute('main-text');

        const pagesWrapper = document.createElement('div');
        pagesWrapper.setAttribute('class', 'header-pages');

        const pages = JSON.parse(this.getAttribute('pages'));

        pages.forEach(page => {
            const newPage = document.createElement('a');
            
            newPage.textContent = page.name;
            newPage.href = page.url;

            pagesWrapper.appendChild(newPage)
        })

        componentRoot.appendChild(mainText);
        componentRoot.appendChild(pagesWrapper);

        return componentRoot;
    }
}

customElements.define("main-header", mainHeader)