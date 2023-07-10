import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './components.css?inline';

export const Components = component$(() => {
  useStylesScoped$(styles);

  return <>Components works!</>;
});
