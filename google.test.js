const options = require('./configs');

test('Google', () => {
    beforeAll(async () => {
        await page.goto(options.environmentConfig.KWT_APP_URL);
    })

    if('should be title "Google"', async () => {
        await expect(page.title()).resolves.toMatch('Google');
    });
});