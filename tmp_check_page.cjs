const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  page.on('requestfailed', req => errors.push(`REQ FAILED ${req.url()} ${req.failure()?.errorText}`));
  await page.goto('https://aey001.github.io/klokke/', { waitUntil: 'networkidle' });
  const rootHtml = await page.$eval('#root', el => el.innerHTML);
  console.log('ERRORS:', JSON.stringify(errors, null, 2));
  console.log('ROOT_HTML_LENGTH:', rootHtml.length);
  if (rootHtml.length > 0) console.log('ROOT_HTML_SAMPLE:', rootHtml.slice(0, 500));
  await browser.close();
})();
