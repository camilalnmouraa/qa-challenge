const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');
const { setup, retry } = require('@cypress/puppeteer')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 40000,
    screenshotOnRunFailure: true,
    video: true,
    cacheAcrossSpecs: true,
    chromeWebSecurity: false,
    baseUrl: "https://qastage.buildbox.one/18/cadastro/",
    specPattern: "cypress/scenarios/**/*.{js,jsx,ts,tsx,feature}",

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Verificar se houve falhas em alguma tentativa de reexecução
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          );
          if (!failures) {
            // Excluir o vídeo se o teste passou e não houve tentativas de reexecução com falha
            fs.unlinkSync(results.video);
          }
        }
      });

      setup({
        on,
        onMessage: {
          async switchToNewTabAndCheckHeading(browser) {
            const page = await retry(async () => {
              const pages = await browser.pages();
              const page = pages.find(page => page.url().includes('termos-de-uso'));
              if (!page) {
                throw new Error('Could not find page');
              }
              return page;
            });

            await page.bringToFront();
            const headingElement = await page.waitForSelector('h1.text-lg.font-bold.font-secondary.leading-none.uppercase');
            const headingText = await page.evaluate(el => el.textContent.trim(), headingElement);
            await page.close();

            return headingText === 'Termos de Uso';
          }
        }
      });
    }
  },
});
