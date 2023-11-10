import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const phoneNumber = "+905356066598"; // Your phone number
  
  return (
    <header className="p-4">
      <nav className="flex justify-between">
        <div className="flex">
          <h1 className="text-logocolor text-2xl font-bold px-6">Nifa Psikolojik Danışmanlık</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Links should be wrapped with <a> tags */}
          <Link href="/" passHref>
            <div className="hover:text-logocolor">Anasayfa</div>
          </Link>
          <Link href="/services" passHref>
            <div className="hover:text-logocolor">Hizmetlerimiz</div>
          </Link>
          <Link href="/about" passHref>
            <div className="hover:text-logocolor">Hakkımızda</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="hover:text-logocolor">İletişim</div>
          </Link>
          <Link href="/blog" passHref>
            <div className="hover:text-logocolor">Blog</div>
          </Link>
        </div>

        <div className="flex items-center space-x-4 px-6">
          {/* Existing icons */}
          <Link href="https://twitter.com/nifadanismanlik" className="hover:text-logocolor">
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
          </Link>
          <Link href="https://www.instagram.com/nifadanismanlik/" className="hover:text-logocolor">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
          </Link>
          {/* WhatsApp icon */}
          <Link href={`https://wa.me/${phoneNumber}`} className="hover:text-logocolor" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
          </Link>
        </div>
      </nav>
    </header>
  );
}
