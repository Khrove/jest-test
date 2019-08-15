const options = require("../configs");
const pptr = require("puppeteer");

const URL = options.environmentConfig.ROAMRIGHT_APP_URL;

const init = {
    browser: null,
    page: null,
    initialize: async () => {
        init.browser = await pptr.launch({
            headless: false
        });
        init.page = await init.browser.newPage();
    },
    login: async () => {
        await init.page.goto(URL, { waitUntil: 'networkidle2' });
    }
}

module.exports = init;
