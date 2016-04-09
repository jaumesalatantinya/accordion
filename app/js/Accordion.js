class Accordion {

    constructor(defaultPanel = 0) {

        this.panels = [];
        this.getPanels();
        this.addClickEventToPanelHeaders();
        this.closeAllPanels();
        this.loadAjaxContent();
        if (defaultPanel > this.panels.length){
            defaultPanel = 0;
        }
        this.openPanel(this.panels[defaultPanel]);
    }

    getPanels () {

        let headers = document.querySelectorAll(".Accordion-header");
        let contents = document.querySelectorAll(".Accordion-content");
        let numPanels = headers.length;
        for (let i = 0; i < numPanels; i++) {
            this.panels[i] = {
                header: headers[i], 
                content: contents[i]
            }
        }
    }

    addClickEventToPanelHeaders () {

        this.panels.forEach((panel) => {
            panel.header.addEventListener('click', (e) => {
                this.closeAllPanels();
                this.openPanel(panel);
            });
        });
    }

    closeAllPanels () {

        for (let i = 0; i < this.panels.length; i++) {
            this.panels[i].content.classList.remove('is-open');
            this.panels[i].content.classList.add('is-close');
        }
    }

    openPanel (panel) {

        panel.content.classList.remove('is-close');
        panel.content.classList.add('is-open');
    }

    loadAjaxContent () {

        fetch('data/users.json')
            .then((response) => response.json())
            .then((users) => {
                let html = '';
                users.forEach((user) => {
                    html += `<p>${user.name} - ${user.email}</p>`;
                });
                this.panels[this.panels.length-1].content.innerHTML = html;
            })
            .catch(e => console.log(e));
    }
}

export default Accordion;
