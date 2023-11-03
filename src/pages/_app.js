import 'tailwindcss/tailwind.css'
import Header from '../../components/header'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false




function MyApp({ Component, pageProps }) {
  return(
      




      <div className="antialiased text-gray-700  ">


          <Header></Header>
          <main className="mt-6 mb-20  ">
          <Component {...pageProps} />

          </main>


      </div>

      

      )





}

export default MyApp