import { test, expect, chromium} from '@playwright/test';

test('test', async ({ page }) => {
  const browser = await chromium.launch({ headless: true });
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Ajouter un contact' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).fill('Étienne');
  await page.getByRole('textbox', { name: 'Prénom' }).press('Tab');
  await page.getByRole('textbox', { name: 'Nom', exact: true }).fill('Gagnon');
  await page.getByRole('textbox', { name: 'Nom', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Téléphone (xxx-xxx-xxxx)' }).fill('111-111-1111');
  await page.getByRole('textbox', { name: 'Téléphone (xxx-xxx-xxxx)' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('info@exemple.ca');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('button', { name: 'Ajouter le contact' }).click();
  await page.getByRole('link', { name: 'Modifier' }).click();
  await page.getByRole('textbox', { name: 'Prénom' }).dblclick();
  await page.getByRole('textbox', { name: 'Prénom' }).fill('bonjour');
  await page.getByRole('button', { name: 'Ajouter le contact' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByText('Supprimer').click();
  await browser.close();
});

