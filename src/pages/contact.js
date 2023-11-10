function ContactPage(){
    return <div className="site-container">
        <h1 className="text-3xl flex items-center justify-items-center justify-center font-bold">
            Bizimle iletişime geçin
        </h1>

       

        <p className="p-4 font-bold text-black">
            Adres: Marifetname Sk. No:20, Fatih/İstanbul
        </p>

        

        <a
        href="https://maps.app.goo.gl/vdACdwddz46Zi7LP9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="hover:text-green-600 p-4">Konum için tıklayınız</button>
      </a>



      <p className="p-4 font-bold text-black">
            Telefon : 0535 606 65 98
        </p>

        <p className="p-4 font-bold text-black">
            E-posta : nifadanismanlik@gmail.com
        </p>

       


    </div>


}
export default ContactPage