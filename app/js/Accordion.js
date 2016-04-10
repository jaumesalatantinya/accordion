class Accordion {

    constructor(target, defaultPanel = 0) {

        this.panels = [];
        this.error = false;
        if (!target) { 
            this.dispatchError('No id target passed as param');
            return;
        }
        this.target = target;
        this.validateHtml();
        this.getPanels();
        this.addClickEventToPanelHeaders();
        this.closeAllPanels();
        this.loadAjaxContent();
        if (defaultPanel > this.panels.length){
            defaultPanel = 0;
        }
        this.openPanel(this.panels[defaultPanel]);
    }

    validateHtml () {

        if (!this.error) {
            if (!document.querySelector(this.target)) {
                this.dispatchError('No HTML elements for id target: ' + this.target);
                return;
            }
            if (!document.querySelector(this.target).classList.contains('Accordion')) {
                this.dispatchError('Target doesn\'t have Accordion class');
                return;
            }
            let headers = document.querySelectorAll(this.target + ' .Accordion-header');
            let contents = document.querySelectorAll(this.target + ' .Accordion-content');
            if (headers.length == 0 || contents.length == 0 || headers.length != contents.length) {
                this.dispatchError('Accordion is empty or dt and dd elements doesn\'t match');
            }
        }
    }

    getPanels () {

        if (!this.error) {
            let headers = document.querySelectorAll(this.target + ' .Accordion-header');
            let contents = document.querySelectorAll(this.target + ' .Accordion-content');
            let numPanels = headers.length;
            for (let i = 0; i < numPanels; i++) {
                this.panels[i] = {
                    header: headers[i], 
                    content: contents[i]
                }
            }
        }
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

    loadAjaxContent () {

        if (!this.error) {
            fetch('data/users.json')
                .then((response) => response.json())
                .then((users) => {
                    let html = '';
                    users.forEach((user) => {
                        html += `<p>${user.name} - ${user.email}</p>`;
                    });
                    this.panels[this.panels.length-1].content.innerHTML = html;
                })
                .catch(e => this.dispatchError(e));
        }
    }

    dispatchError (e) {
        console.log (e);
        this.error = true;
        if (document.querySelector(this.target)){
            document.querySelector(this.target).innerHTML = `<div class="u-error">${e}</div>`;
        }
    }
}

export default Accordion;
