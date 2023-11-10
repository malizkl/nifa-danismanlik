import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Header() {
  return (
    <header className="p-4">
      <nav className="flex  justify-between">
        <div className="flex ">
          <h1 className="text-logocolor text-2xl font-bold px-6">Nifa Psikolojik Danışmanlık</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-logocolor">
            Anasayfa
          </Link>
          <Link href="/services" className="hover:text-logocolor">
            Hizmetlerimiz
          </Link>
          <Link href="/about" className="hover:text-logocolor">
            Hakkımızda
          </Link>
          <Link href="/contact" className="hover:text-logocolor">
            İletişim
          </Link>
          <Link href="/blog" className="hover:text-logocolor">
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4 px-6">
          <a href="https://www.instagram.com/nifadanismanlik/">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:text-logocolor"/>
          </a>
          <a href="https://www.instagram.com/nifadanismanlik/">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-logocolor"/>
          </a>
        </div>
      </nav>
    </header>
  );
}