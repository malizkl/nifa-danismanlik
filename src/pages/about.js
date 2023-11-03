function AboutPage(){
    return <div className="site-container">

        <h1 className="text-3xl flex items-center justify-items-center justify-center font-bold">
            Nifa Hakkında
        </h1>

       



    <p className="py-4 text-gray-500 p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <a
        href="https://www.instagram.com/nifadanismanlik/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-logocolor p-4"
      >
        <button className="hover:text-green-600">Contact via Instagram</button>
      </a>

    </div>


}
export default AboutPage