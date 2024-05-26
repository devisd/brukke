'use client';

import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

function Header() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={path.endsWith('/') ? styles.navLinkActive : styles.navLink}>
        Добро пожаловать
      </Link>
      <Link
        href="/today"
        className={path.endsWith('/today') ? styles.navLinkActive : styles.navLink}
      >
        Брюкке сегодня
      </Link>
      <Link
        href="/history"
        className={path.endsWith('/history') ? styles.navLinkActive : styles.navLink}
      >
        История
      </Link>
      <Link
        href="/contacts"
        className={path.endsWith('/contacts') ? styles.navLinkActive : styles.navLink}
      >
        Контакты
      </Link>
      <Link
        href="/stores"
        className={path.endsWith('/stores') ? styles.navLinkActive : styles.navLink}
      >
        Магазины
      </Link>
      <Link
        href="/products"
        className={path.endsWith('/products') ? styles.navLinkActive : styles.navLink}
      >
        Продукция
      </Link>
      <Link
        href="/album"
        className={path.endsWith('/album') ? styles.navLinkActive : styles.navLink}
      >
        Фотоальбом
      </Link>
    </nav>
  );
}

export default Header;
