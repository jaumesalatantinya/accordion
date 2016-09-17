import { expect } from "chai";
import { spy } from 'sinon';
import App from './App';


describe('App Tests', () => {


    describe('Constructor', () => {
        it('Should empty inicialize content and accordion', () => {
            const app = new App();
            expect(app.content).to.exist;
            expect(app.accordion).to.exist;

        });
    });
  
   describe('Init', () => {

        it('Should call getContentFromRenderedAccordion getContentFromApi', () => {
            const app = new App();
            spy(app, 'getContentFromRenderedAccordion');
            spy(app, 'getContentFromApi');
            app.init();
            expect(app.getContentFromRenderedAccordion.called).to.be.true;
            expect(app.getContentFromApi.called).to.be.true;
        });
    });
});
