import type { ReactElement } from 'react';
import styles from './Content.module.css';
import { Navbar } from '../Navbar/Navbar.tsx';

export function Content(): ReactElement {
  return (
    <main className={styles.content}>
      <Navbar />
      Content
    </main>
  );
}
