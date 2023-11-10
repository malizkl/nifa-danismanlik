import Link from "next/link";

export default function Sidebar() {
    return (
        <div>
            <button onClick={openNav}>☰ Menüyü Aç</button>

            <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <Link href="/">Anasayfa</Link>
                <Link href="/services">Hizmetlerimiz</Link>
                <Link href="/about">Hakkımızda</Link>
                <Link href="/contact">İletişim</Link>
            </div>
        </div>
    );
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
