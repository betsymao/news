import Link from 'next/link';
import styles from './Header.module.scss';
// CODEFEED ICON: https://react-icons.github.io/react-icons/search?q=mdoutlinecodeoff
// import { MdOutlineCodeOff } from 'react-icons/md';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <span className={styles.logoMain}>OZ Talk</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/topnews'>Top</Link>
          </li>
          <li>
            <Link href='/healthnews'>Health</Link>
          </li>
          <li>
            <Link href='/scinews'>Science</Link>
          </li>
          <li>
            <Link href='/sportnews'>Sports</Link>
          </li>
          <li>
            <Link href='/technews'>Technology</Link>
          </li>
          <li>
            <Link href='/busnews'>Business</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;