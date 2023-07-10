import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Components } from './components';

test(`[Components Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Components />);
  expect(screen.innerHTML).toContain('Components works!');
});
