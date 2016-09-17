class ContentProvider {

    static validateHtml (target) {
        if (!document.querySelector(target)) {
            return false;
        }
        if (!document.querySelector(target).classList.contains('Accordion')) {
            return false;
        }
        let headers = document.querySelectorAll(target + ' .Accordion-header');
        let contents = document.querySelectorAll(target + ' .Accordion-content');
        if (headers.length == 0 || contents.length == 0 || headers.length != contents.length) {
            return false;
        }
        return true;
    }

    static getHtmlContent (target) {

        let content = [];
        let headers = document.querySelectorAll(target + ' .Accordion-header');
        let contents = document.querySelectorAll(target + ' .Accordion-content');
        let numPanels = headers.length;
        for (let i = 0; i < numPanels; i++) {
            content.push({
               header: headers[i].innerHTML,
                content: contents[i].innerHTML
            });
        }
        return content;
    }


    static getContentFromHtml (target) {

        if (ContentProvider.validateHtml(target)) {
            return ContentProvider.getHtmlContent(target);
        }
        else {
            return [];
        }
    }

    static getContentFromApi () {
        const panel = {
            header: 'Section 5',
            content: 'Section 5 Content...'
        };
        const delay = 1000;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(Object.assign([], panel));
        }, delay);
        });
    }
}

export default ContentProvider;
