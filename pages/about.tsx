import Link from "next/link";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1>About us</h1>
      </main>
    </div>
  );
}

export default About;
