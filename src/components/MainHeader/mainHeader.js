class mainHeader extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: 'open'})

        shadow.appendChild(this.styles())
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

    styles(){
        const head = document.createElement('head');
        const style = document.createElement('link');

        style.href = './src/components/MainHeader/mainHeader.css';
        style.type = 'text/css';
        style.rel = 'stylesheet';

        head.appendChild(style)
        
        return head;
    }
}

customElements.define("main-header", mainHeader)