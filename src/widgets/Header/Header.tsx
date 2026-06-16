import type { ReactElement } from 'react';

const MENU_ITEMS = ['League Table', 'Players', 'Matches', 'Live Score'];

export function Header(): ReactElement {
  return (
    <header className="w-full shrink-0 bg-[aqua]">
      <nav className="px-4 py-3">
        <ul className="flex gap-4">
          {MENU_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
