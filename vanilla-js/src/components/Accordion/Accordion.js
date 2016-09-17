import ErrorDispatcher from '../../services/ErrorDispacher';

class Accordion {

    constructor() {

        this._content = [];
        this.panels = [];
        this.error = false;
    }

    loadContent (content) {

        if (content){
            this._content = content;
        }
        else {
            ErrorDispatcher('Accordion--LoadContent: No content to load');
        }
    }

    render (){

        if (this._content) {
            let accordionDomElement = document.createElement('dl');
            accordionDomElement.className = 'Accordion';
            let header, content;
            for (let i = 0; i < this._content.length; i++) {
                header = this.createHeaderElement(this._content[i].header);
                accordionDomElement.appendChild(header);

                content = this.createContentElement(this._content[i].content);
                accordionDomElement.appendChild(content);

                this.panels.push({
                    header: header,
                    content: content
                });
            }
            this.addClickEventToPanelHeaders();
            this.closeAllPanels();
            document.querySelector('.App-section').appendChild(accordionDomElement);
        }
        else {
            ErrorDispatcher('Accordion--Render: No content to Render');
        }
    }

    createHeaderElement (text) {

        let header, headerText;
        header = document.createElement('dt');
        header.className = 'Accordion-header';
        headerText = document.createTextNode(text);
        header.appendChild(headerText);
        return header;
    }

    createContentElement (text) {

        let content, contentText;
        content = document.createElement('dd');
        content.className = 'Accordion-content';
        contentText = document.createTextNode(text);
        content.appendChild(contentText);
        return content;
    }

    addClickEventToPanelHeaders () {

        if (!this.error) {
            this.panels.forEach((panel) => {
                panel.header.addEventListener('click', (e) => {
                    this.closeAllPanels();
                    this.openPanel(panel);
                });
            });
        }
    }

    closeAllPanels () {

        if (!this.error) {
            for (let i = 0; i < this.panels.length; i++) {
                this.panels[i].content.classList.remove('is-open');
                this.panels[i].content.classList.add('is-close');
            }
        }
    }

    openPanel (panel) {

        if (!this.error) {
            panel.content.classList.remove('is-close');
            panel.content.classList.add('is-open');
        }
    }
}

export default Accordion;
