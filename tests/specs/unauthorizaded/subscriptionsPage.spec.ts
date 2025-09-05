import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности контента подписок для неавторизованного пользователя', async ({
  subscriptionsPage,
}) => {
  await subscriptionsPage.correctHasCorrectAriaSnapshot();
});
