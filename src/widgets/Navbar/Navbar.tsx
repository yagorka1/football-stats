import type { ReactElement } from 'react';
import styles from './Navbar.module.css';

const MENU_ITEMS = ['League Table', 'Players', 'Matches', 'Live Score'];

export function Navbar(): ReactElement {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {MENU_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}
