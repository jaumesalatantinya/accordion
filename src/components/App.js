import SectionsService from '../services/SectionsService';
import ErrorDispatcher from '../services/ErrorDispacher';
import Accordion from './Accordion/Accordion';
import  '../styles/index.scss';

class App {

    constructor () {
        this.sections = [];
        this.accordion = new Accordion();
    }

    init () {
        this.getSectionsFromRenderedAccordion();
        this.getSectionsFromApi().then(() => {
            this.renderAccordion();
        });
    }

    getSectionsFromRenderedAccordion () {
        this.sections = SectionsService.getSectionsFromHtml('#a1');
    }

    getSectionsFromApi () {
        return new Promise((resolve, reject) => {
            SectionsService.getSectionsFromApi().then( (sections) => {
                this.sections.push(sections);
                resolve();
            });
        });
    }

    renderAccordion () {
        if (this.sections) {
            this.accordion.loadSections(this.sections);
            this.accordion.render();
        }
        else {
            ErrorDispatcher('No content provided to render accordion');
        }
    }
}

export default App;

