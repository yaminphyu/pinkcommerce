import { Auths, Navs } from '@/config';
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';

export function Menu() {
    return (
      <nav className={styles.menu}>
        <ul className={styles['menu-list']}>
          {
            Navs.map((nav) => (
              <li 
                key={nav.name}
                className={styles['menu-item']}
              >
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            ))
          }
        </ul>
        <ul className={styles['auth-list']}>
          {
            Auths.map((nav) => (
              <li 
                key={nav.name}
                className={styles['menu-item']}
              >
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
  