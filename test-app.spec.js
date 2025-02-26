import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const newPage = await context.newPage();

  await newPage.goto('http://localhost:3000/');

  // Ajouter un contact
  await newPage.getByRole('button', { name: 'Ajouter un contact' }).click();
  await newPage.getByRole('textbox', { name: 'Prénom' }).fill('Étienne');
  await newPage.getByRole('textbox', { name: 'Prénom' }).press('Tab');
  await newPage.getByRole('textbox', { name: 'Nom', exact: true }).fill('Gagnon');
  await newPage.getByRole('textbox', { name: 'Nom', exact: true }).press('Tab');
  await newPage.getByRole('textbox', { name: 'Téléphone (xxx-xxx-xxxx)' }).fill('111-111-1111');
  await newPage.getByRole('textbox', { name: 'Téléphone (xxx-xxx-xxxx)' }).press('Tab');
  await newPage.getByRole('textbox', { name: 'Email' }).fill('info@exemple.ca');
  await newPage.getByRole('textbox', { name: 'Email' }).press('Tab');
  await newPage.getByRole('button', { name: 'Ajouter le contact' }).click();

  // Modifier le dernier contact ajouté
  const modifierLink = newPage.getByRole('link', { name: 'Modifier' }).last();
  await modifierLink.waitFor();
  await modifierLink.click();

  await newPage.getByRole('textbox', { name: 'Prénom' }).dblclick();
  await newPage.getByRole('textbox', { name: 'Prénom' }).fill('bonjour');
  await newPage.getByRole('button', { name: 'Ajouter le contact' }).click();

  // Supprimer le dernier contact ajouté
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  const supprimerButton = newPage.getByText('Supprimer').last();
  await supprimerButton.waitFor();
  await supprimerButton.click();

  await browser.close();
});
