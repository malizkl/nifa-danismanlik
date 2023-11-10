import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Service() {
  return (
    <div className="site-container">
    <div className="space-y-4 text-center">
      <h1 className="text-gray-500 text-3xl flex items-center justify-items-center justify-center font-bold">Hizmetlerimiz</h1>

      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <a className={`${styles.card} max-w-xs`}>
          <div className={styles.cardContent}>
            <Image
              src="https://www.sosyalgelisimrehabilitasyon.com/images/hizmetler/v8HZzGg71eMV-gelisimsel-test-sosyal-gelisim-rehabilitasyon-merkezi.jpg"
              alt="kitten"
              width={500}
              height={500}
              priority
            />
            <p className="py-2">Gelişimsel Değerlendirme ve Takip</p>
          </div>
        </a>

        <a className={`${styles.card} max-w-xs`}>
          <div className={styles.cardContent}>
            <Image
              src="https://www.verapsikolojikdanismanlik.com/images/med_thumb/1587904027aile_yatay.jpg"
              alt="kitten"
              width={300}
              height={300}
              priority
            />
            <p className="py-2">Ebeveyn Danışmanlığı</p>
          </div>
        </a>

        <a className={`${styles.card} max-w-xs`}>
          <div className={styles.cardContent}>
            <Image
              src="https://cdn.armut.com/images/services/21324-oyun-terapisi.jpeg"
              alt="kitten"
              width={300}
              height={300}
              priority
            />
            <p className="py-2">Oyun Terapisi ve Theraplay</p>
          </div>
        </a>

        <a className={`${styles.card} max-w-xs`}>
          <div className={styles.cardContent}>
            <Image
              src="https://psikoform.com/wp-content/uploads/2020/12/b3.jpg"
              alt="kitten"
              width={300}
              height={300}
              priority
            />
            <p className="py-2">Bireysel Terapi</p>
          </div>
        </a>

        <a className={`${styles.card} max-w-xs`}>
          <div className={styles.cardContent}>
            <Image
              src="https://i.anneysen.com/article/cift-terapisi-nedir-ne-ise-yarar-8-soruda-anlattik-cover.jpg"
              alt="kitten"
              width={300}
              height={300}
              priority
            />
            <p className="py-2">Çift Terapisi</p>
          </div>
        </a>

        <a className={`${styles.card} max-w-xs`}>
          <div className={styles.cardContent}>
            <Image
              src="https://www.perlapsikoloji.com/images/services/9019025912158-320-izmir-psikolog-ergen-psikoterapi.jpg"
              alt="kitten"
              width={300}
              height={300}
              priority
            />
            <p className="py-2">Çocuk ve Ergen Terapisi</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  )
}
export default Service