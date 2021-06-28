const { test, expect } = require('@playwright/test');

test('can add and list todos', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Add a todo
  const text1 = 'buy some milk';
  await page.fill('input', text1)
  await page.click('button');
  await page.waitForResponse('**/todos');
  let content = await page.textContent('ul li:first-child');
  expect(content.trim()).toBe(text1);

  // Add another todo, it should come on top of the list
  const text2 = 'buy some tea';
  await page.fill('input', text2);
  await page.click('button');
  await page.waitForResponse('**/todos');
  content = await page.textContent('ul li:first-child');
  expect(content.trim()).toBe(text2);

  // Should see all TODOs by now
  li1 = await page.textContent('ul li:first-child');
  li2 = await page.textContent('ul li:last-child');
  expect(li1.trim()).toBe(text2);
  expect(li2.trim()).toBe(text1);
});
