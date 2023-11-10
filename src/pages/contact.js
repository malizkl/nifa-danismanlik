function ContactPage() {
    // Replace the src value with the link you get from Google Maps
    const googleMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1040372423804!2d28.926821676041275!3d41.02297977134851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba409f17ebf9%3A0x5ce3c158503533ff!2sTopkap%C4%B1%2C%20Marifetname%20Sk.%20No%3A20%2C%2034093%20Fatih%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1699653250232!5m2!1sen!2str"

    return (
      <div className="site-container">
        <h1 className="text-3xl flex items-center justify-items-center justify-center font-bold">
          Bizimle iletişime geçin
        </h1>
  
        <p className="p-4 font-bold text-black">
          Adres: Marifetname Sk. No:20, Fatih/İstanbul
        </p>
  
        {/* Google Maps iframe 
        
                  <button className="hover:text-green-600 p-4">Konum için tıklayınız</button> 

*/}
        <div className="map-container">
          <iframe
            src={googleMapSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
  
        <a
          href="https://maps.app.goo.gl/vdACdwddz46Zi7LP9"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
  
        <p className="p-4 font-bold text-black">
          Telefon : 0535 606 65 98
        </p>
  
        <p className="p-4 font-bold text-black">
          E-posta : nifadanismanlik@gmail.com
        </p>
      </div>
    );
  }
  
  export default ContactPage;
  