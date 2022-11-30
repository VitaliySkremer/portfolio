import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from "../Components/Header/Header";
import {Footer} from "../Components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100vh'}}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
