import styles from './Footer.module.scss'
import Link from 'next/link';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <Link href='/privacy'>Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>
          Copyright &copy; {getCurrentYear()} OZ Talk.
        </p>
      </div>
    </div>
  );
}

export default Footer;