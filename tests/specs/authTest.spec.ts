import { test, expect } from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('test', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru/');
  await page.waitForTimeout(1000);
  if (await page.locator('.wdp-popup-module__header').isVisible()) {
    await page.getByRole('button', { name: 'Закрыть' }).click();
  }
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page.waitForTimeout(1000);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'войти с помощью Почта' })
    .click();

  await page.waitForTimeout(1000);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите почту' })
    .fill(process.env.LOGIN!);

  await page.waitForTimeout(1000);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page.waitForTimeout(1000);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.waitForTimeout(1000);
  await page.getByRole('img', { name: 'Иконка канала channel69127753' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Профиль' }).click();

  await page.context().storageState({ path: authFile });
});
