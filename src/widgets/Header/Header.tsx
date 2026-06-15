import type { ReactElement } from 'react';
import styles from './Header.module.css';

export function Header(): ReactElement {
  return (
    <header className={styles.header}>
      Header
    </header>
  );
}
