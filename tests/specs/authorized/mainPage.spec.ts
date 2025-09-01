import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов поп-апа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopupList();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов полного меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
