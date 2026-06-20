const { chromium } = require('/tmp/pw/node_modules/playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:8099/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'C:/Users/user/kubo-website/hero-screenshot.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e.message); process.exit(1); });
