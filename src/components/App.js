import ContentProvider from '../services/ContentProvider';
import ErrorDispatcher from '../services/ErrorDispacher';
import Accordion from './Accordion/Accordion';
import  '../styles/index.scss';

class App {

    constructor () {
        this.content = [];
        this.accordion = new Accordion();
    }

    init () {
        this.getContentFromRenderedAccordion();
        this.getContentFromApi().then(() => {
            this.renderAccordion();
        });
    }

    getContentFromRenderedAccordion () {
        this.content = ContentProvider.getContentFromHtml('#a1');
    }

    getContentFromApi () {
        return new Promise((resolve, reject) => {
            ContentProvider.getContentFromApi().then( (content) => {
                this.content.push(content);
                resolve();
            });
        });
    }

    renderAccordion () {
        if (this.content) {
            this.accordion.loadContent(this.content);
            this.accordion.render();
        }
        else {
            ErrorDispatcher('No content provided to render accordion');
        }
    }
}

export default App;

