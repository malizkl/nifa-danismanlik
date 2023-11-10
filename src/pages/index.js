// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {


  Modal.setAppElement('#__next'); // Suppresses modal-related console warnings.

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    });
  }, [controls]);




  // Function to scroll the slider
  const scrollSlider = (direction) => {
    const slider = document.getElementById('slider');
    if (direction === 'left') {
      slider.scrollLeft -= slider.offsetWidth;
    } else {
      slider.scrollLeft += slider.offsetWidth;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Nifa Psikolojik Danışmanlığa Hoşgeldiniz</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Zihinsel Sağlığa Ulaşmanız İçin Sizi Güçlendiriyoruz</h2>
          <p>Denge ve gönül rahatlığı bulmanıza yardımcı olmak için özel olarak tasarlanmış psikolojik hizmetlerimizi keşfedin.</p>
          <Link href="/contact" passHref>
            <div className={styles.button}>Bizimle iletişime geçin</div>
          </Link>
        </section>

        <section className={styles.features}>
          <button onClick={() => scrollSlider('left')} className={styles.scrollButton}>&#10094;</button>
          
          <div id="slider" className={styles.slider}>
            <div className={styles.slides}>
              {/* Slide 1 */}
              <div className={styles.card}>
                <h3>Gelişimsel Değerlendirme ve Takip</h3>
                <p>Comprehensive developmental assessment and tracking to support your child's growth.</p>
              </div>
              {/* Slide 2 */}
              <div className={styles.card}>
                <h3>Ebeveyn Danışmanlığı</h3>
                <p>Parental guidance for nurturing a supportive family environment.</p>
              </div>
              {/* Slide 3 */}
              <div className={styles.card}>
                <h3>Oyun Terapisi</h3>
                <p>Engaging therapeutic play sessions to foster child development.</p>
              </div>
              {/* Slide 4 */}
              <div className={styles.card}>
                <h3>Oyun Terapisi</h3>
                <p>Engaging therapeutic play sessions to foster child development.</p>
              </div>
              {/* Slide 5 */}
              <div className={styles.card}>
                <h3>Oyun Terapisi</h3>
                <p>Engaging therapeutic play sessions to foster child development.</p>
              </div>
              {/* Slide 6 */}
              <div className={styles.card}>
                <h3>Oyun Terapisi</h3>
                <p>Engaging therapeutic play sessions to foster child development.</p>
              </div>
              {/* Add more slides as needed */}
            </div>
          </div>

          <button onClick={() => scrollSlider('right')} className={styles.scrollButton}>&#10095;</button>
        </section>

        <motion.div
        className={styles.whatsappPopup}
        initial={{ y: 200, opacity: 0 }}
        animate={controls}
      >
        <a
          href="https://wa.me/+905356066598"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappLink}
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </motion.div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Nifa Psikolojik Danışmanlık. All rights reserved.</p>
      </footer>
    </div>
  );
}
