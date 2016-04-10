import Accordion from './Accordion';

window.onload = () => {
    const accordion1 = new Accordion('#a1', 3);
    accordion1.init();
    accordion1.loadAjaxContent('data/users.json');
};
