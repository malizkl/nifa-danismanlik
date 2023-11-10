// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Nifa Psikolojik Danışmanlığa Hoşgeldin</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Zihinsel Sağlığa Ulaşmanız İçin Sizi Güçlendiriyoruz</h2>
          <p>Denge ve gönül rahatlığı bulmanıza yardımcı olmak için özel olarak tasarlanmış psikolojik hizmetlerimizi keşfedin.</p>
          <Link href="/contact" passHref>
            <div className={styles.button}>Bizimle iletişime geçin.</div>
          </Link>
        </section>

        <section className={styles.features}>
          <div className={styles.grid}>
            {/* Repeat this block for each feature or service */}
            <div className={styles.card}>
              <h3>Gelişimsel Değerlendirme ve Takip</h3>
              <p>Çocuğunuzun büyümesini desteklemek için kapsamlı gelişimsel değerlendirme ve izleme.</p>
            </div>
            {/* ... other features or services */}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Nifa Psikolojik Danışmanlık. All rights reserved.</p>
      </footer>
    </div>
  );
}
